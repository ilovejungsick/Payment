"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PaymentStatus = 'pending' | 'completed' | 'cancelled';

export default function OrderDetailClient({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('pending');
  const [copiedAccount, setCopiedAccount] = useState(false);

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("140-015-054218");
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const handleCancelOrder = () => {
    console.log("주문 취소:", orderId);
    setIsDialogOpen(false);
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* 시연용 상태 선택기 */}
      <div className="max-w-2xl mx-auto mb-8 flex items-center justify-end gap-2">
        <Label htmlFor="payment-status" className="text-sm text-gray-600">
          주문 상태
        </Label>
        <Select
          value={paymentStatus}
          onValueChange={(value: PaymentStatus) => setPaymentStatus(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">결제 대기중</SelectItem>
            <SelectItem value="completed">결제 완료</SelectItem>
            <SelectItem value="cancelled">주문 취소됨</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
          <div className={`rounded-lg p-6 ${
            paymentStatus === 'completed' ? 'bg-green-50' : 
            paymentStatus === 'cancelled' ? 'bg-gray-50' : 
            'bg-primary/5'
          }`}>
            <h2 className={`font-semibold text-lg mb-4 ${
              paymentStatus === 'completed' ? 'text-green-600' : 
              paymentStatus === 'cancelled' ? 'text-gray-600' : 
              'text-primary'
            }`}>
              {paymentStatus === 'completed' ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>결제완료</span>
                </div>
              ) : paymentStatus === 'cancelled' ? (
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>주문 취소됨</span>
                </div>
              ) : (
                '결제 대기중'
              )}
            </h2>
            {paymentStatus === 'completed' ? (
              <div className="space-y-4 text-sm">
                <div className="space-y-2">
                  <p>결제일시: {new Date().toLocaleString("ko-KR")}</p>
                  <p>결제금액: ₩199,000</p>
                  <p>결제수단: 무통장입금</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4 space-y-2 border border-green-100">
                  <p className="font-medium text-green-600">
                    ✨ 얼리버드 신청이 완료되었습니다!
                  </p>
                  <p className="text-gray-600">
                    영업일 기준 24시간 이내에 담당 매니저가 입력하신 이메일(<span className="text-gray-900">example@email.com</span>)로 
                    초대장을 발송해드립니다.
                  </p>
                  <div className="mt-4 p-3 bg-yellow-50/50 rounded-lg border border-yellow-200">
                    <p className="flex items-center gap-2 text-yellow-700">
                      <span className="text-lg">💬</span>
                      앱 출시 소식을 카카오톡으로 받아보세요!
                    </p>
                    <a 
                      href="http://pf.kakao.com/_MkxbfG"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-2 mt-2 w-full bg-[#FEE500] text-[#391B1B] py-2 rounded-lg hover:bg-[#FDD800] transition-colors"
                    >
                      <span className="text-lg">📱</span>
                      핏리에버 카카오톡 채널 추가하기
                    </a>
                  </div>
                </div>
              </div>
            ) : paymentStatus === 'cancelled' ? (
              <div className="space-y-4 text-sm">
                <div className="space-y-2">
                  <p>취소일시: {new Date().toLocaleString("ko-KR")}</p>
                  <p>취소사유: 구매자 요청</p>
                </div>
                <div className="bg-white rounded-lg p-4 space-y-2 border border-gray-200">
                  <p className="font-medium text-gray-600">
                    주문이 취소되었습니다
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => router.push('/')}
                  >
                    메인으로 돌아가기
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <p>입금 계좌: 신한 140-015-054218</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-primary hover:text-primary/80"
                    onClick={copyAccountNumber}
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    {copiedAccount ? "복사완료" : "복사"}
                  </Button>
                </div>
                <p>예금주: 주식회사 핏리에버 오준상</p>
                <p>입금 금액: ₩199,000</p>
                <p className="text-red-500 font-medium mt-4">
                  입금 기한: {new Date(Date.now() + 12 * 60 * 60 * 1000).toLocaleString("ko-KR")} 까지
                </p>
              </div>
            )}
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

          {/* 버튼 그룹 */}
          <div className="pt-6 border-t space-y-3">
            {paymentStatus === 'pending' && (
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
            )}
          </div>

          {/* 안내 메시지 */}
          {paymentStatus === 'pending' && (
            <div className="bg-blue-50 p-4 rounded-lg mt-6 space-y-2">
              <p className="text-sm text-blue-600">
                ※ 입금하시면 즉시 얼리버드 혜택이 적용되니 안심하세요.
              </p>
              <p className="text-sm text-blue-600">
                ※ 담당자가 12시간 이내 입금을 확인하여 결제완료 상태로 변경해드립니다.
              </p>
              <p className="text-sm text-blue-600">
                ※ 입금자명이 달라도 주문번호만 일치하면 정상 처리됩니다.
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
} 