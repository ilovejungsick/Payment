"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, ArrowLeft, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function OrderDetailClient({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const copyOrderNumber = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCancelOrder = () => {
    // 여기에 주문 취소 로직 구현
    console.log("주문 취소:", orderId);
    setIsDialogOpen(false);
    router.push("/"); // 또는 취소 완료 페이지로 이동
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Button
        variant="ghost"
        className="mb-8 text-primary hover:text-primary/80 hover:bg-primary/5"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        뒤로가기
      </Button>

      <Card className="max-w-2xl mx-auto p-8 border-primary/10">
        <div className="space-y-8">
          {/* 주문 정보 헤더 */}
          <div className="text-center pb-6 border-b">
            <h1 className="text-2xl font-bold mb-2">주문 상세 내역</h1>
            <p className="text-gray-500">주문번호: {orderId}</p>
          </div>

          {/* 주문 상태 */}
          <div className="bg-primary/5 rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-4 text-primary">결제 대기중</h2>
            <div className="space-y-2 text-sm">
              <p>입금 계좌: 농협 000-0000-0000</p>
              <p>예금주: 홍길동</p>
              <p>입금 금액: ₩199,000</p>
              <p className="text-red-500 font-medium mt-4">
                입금 기한: {new Date(Date.now() + 12 * 60 * 60 * 1000).toLocaleString("ko-KR")} 까지
              </p>
            </div>
          </div>

          {/* 주문 상품 정보 */}
          <div>
            <h2 className="font-semibold text-lg mb-4">주문 상품</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">프리미엄 PACK</h3>
                  <p className="text-sm text-gray-500">6개월 이용권 + 프리미엄 혜택</p>
                </div>
                <p className="font-semibold">₩199,000</p>
              </div>
            </div>
          </div>

          {/* 주문자 정보 */}
          <div>
            <h2 className="font-semibold text-lg mb-4">주문자 정보</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">이름</span>
                <span>김철수</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">연락처</span>
                <span>010-1234-5678</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">이메일</span>
                <span>example@email.com</span>
              </div>
            </div>
          </div>

          {/* 주문번호 복사 버튼과 취소 버튼을 포함하는 버튼 그룹 */}
          <div className="pt-6 border-t space-y-3">
            <Button
              variant="outline"
              className="w-full border-primary/20 hover:bg-primary/5 text-primary"
              onClick={copyOrderNumber}
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? "복사완료" : "주문번호 복사하기"}
            </Button>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  주문 취소하기
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>주문 취소 확인</DialogTitle>
                  <DialogDescription className="pt-3">
                    <div className="space-y-3">
                      <p>정말로 주문을 취소하시겠습니까?</p>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm">
                        <p className="font-medium mb-2">취소 시 유의사항:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>입금 전 주문만 취소가 가능합니다</li>
                          <li>취소 후에는 복구가 불가능합니다</li>
                          <li>동일한 혜택으로 재주문이 어려울 수 있습니다</li>
                        </ul>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex gap-3 sm:gap-0">
                  <Button
                    variant="ghost"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    돌아가기
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleCancelOrder}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    주문 취소하기
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* 안내 메시지 */}
          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <p className="text-sm text-blue-600">
              ※ 입금 확인 후 결제가 완료되며, 입금자명이 다르더라도 주문번호만 일치하면 정상 처리됩니다.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
} 