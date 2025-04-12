"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { useSearchParams, useRouter } from "next/navigation";
import { generateOrderId } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  cashReceipt: z.enum(["none", "personal", "business"]),
  cashReceiptValue: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val, "You must accept the terms"),
  purchaseAgreement: z.boolean().refine((val) => val, "You must agree to the purchase conditions"),
  depositorName: z.string().optional(),
});

export default function OrderPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedPackage = searchParams.get("package");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cashReceipt: "none",
      termsAccepted: false,
      purchaseAgreement: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const orderId = generateOrderId();
    // In a real application, you would save the order details to a database here
    console.log({ orderId, ...values });
    router.push("/order/complete?id=" + orderId);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
        주문하기
      </h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* 주문자 정보 */}
              <Card className="p-6 border-primary/10">
                <h2 className="font-semibold text-lg mb-4">주문자 정보</h2>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          이름 <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} className="focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          연락처 <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="'-' 없이 입력해주세요"
                            className="focus-visible:ring-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          이메일 <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="focus-visible:ring-primary"
                            placeholder="앱 초대장을 받으실 이메일을 입력해주세요" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="depositorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          입금자명 <span className="text-gray-500 text-sm">(선택)</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="focus-visible:ring-primary"
                            placeholder="미입력 시 주문자 이름으로 처리됩니다" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-sm text-gray-500 pt-2">
                    <span className="text-red-500">*</span> 표시는 필수 입력 사항입니다
                  </div>
                </div>
              </Card>

              {/* 무통장입금 안내 */}
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700">
                  <span className="font-medium">✨ 안정적인 서비스 제공을 위해 얼리버드는 무통장입금으로만 진행됩니다</span>
                </p>
              </div>

              <Card className="p-6 border-primary/10">
                <FormField
                  control={form.control}
                  name="cashReceipt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 block mb-4">현금영수증</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-3"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="none" className="text-primary" />
                            </FormControl>
                            <FormLabel className="font-normal">발급 안함</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="personal" className="text-primary" />
                            </FormControl>
                            <FormLabel className="font-normal">소득공제용 (휴대폰번호)</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="business" className="text-primary" />
                            </FormControl>
                            <FormLabel className="font-normal">지출증빙용 (사업자등록번호)</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.watch("cashReceipt") !== "none" && (
                  <FormField
                    control={form.control}
                    name="cashReceiptValue"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-gray-700">
                          {form.watch("cashReceipt") === "personal"
                            ? "휴대폰번호"
                            : "사업자등록번호"}
                        </FormLabel>
                        <FormControl>
                          <Input {...field} className="focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </Card>

              <Card className="p-6 border-primary/10">
                <div className="space-y-4">
                  <p className="text-red-500 font-medium">
                    ※ 입금 전 취소는 가능하지만 입금 후 환불은 불가합니다.
                  </p>

                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            <Dialog>
                              <DialogTrigger className="text-primary hover:text-primary/80 underline">
                                개인정보 수집 및 이용
                              </DialogTrigger>
                              <DialogContent>
                                <div className="py-4">
                                  <h3 className="text-lg font-semibold mb-4">
                                    개인정보 수집 및 이용 동의
                                  </h3>
                                  <p>개인정보 수집 및 이용에 대한 상세 내용...</p>
                                </div>
                              </DialogContent>
                            </Dialog>
                            에 동의합니다
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="purchaseAgreement"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            구매조건 확인 및 결제 진행에 동의합니다
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </Card>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                결제하기
              </Button>
            </form>
          </Form>
        </div>

        <div>
          <Card className="p-6 border-primary/10 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">주문 요약</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">선택한 패키지</span>
                <span className="font-semibold">{selectedPackage} PACK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">결제 방법</span>
                <span className="font-semibold">무통장입금</span>
              </div>
              <hr className="border-primary/10" />
              <div className="flex justify-between text-lg">
                <span className="font-bold">총 결제금액</span>
                <span className="font-bold text-primary">₩199,000</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}