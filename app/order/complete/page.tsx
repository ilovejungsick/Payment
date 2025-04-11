"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Copy } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OrderCompletePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  
  const orderId = searchParams.get("id") || "000000000";
  const orderDateTime = new Date().toLocaleString("ko-KR");

  const copyOrderNumber = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto p-8">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">주문이 완료되었습니다</h1>
        
        <div className="bg-muted p-6 rounded-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">주문번호</span>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold">{orderId}</span>
              <button
                onClick={copyOrderNumber}
                className="text-primary hover:text-primary/80"
                title="주문번호 복사"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            주문일시: {orderDateTime}
          </p>
          <p className="text-sm text-muted-foreground">
            ※ 주문자 연락처와 주문번호로 주문 조회가 가능합니다.
          </p>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg mb-6">
          <h2 className="font-semibold mb-4">입금 정보</h2>
          <div className="space-y-2">
            <p>은행: 농협</p>
            <p>계좌번호: 000-0000-0000</p>
            <p>예금주: 홍길동</p>
            <p>금액: ₩199,000</p>
            <p className="text-destructive font-semibold mt-4">
              입금기한: {new Date(Date.now() + 12 * 60 * 60 * 1000).toLocaleString("ko-KR")} 까지
            </p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded mb-8">
          <p className="text-center text-sm text-muted-foreground">
            입금이 확인되면 결제가 완료됩니다.<br />
            12시간 이내에 입금해 주시기 바랍니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => router.push(`/order/${orderId}`)}
            size="lg"
            variant="outline"
          >
            주문 상세보기
          </Button>
          <Button
            onClick={() => router.push("/")}
            size="lg"
            variant="secondary"
          >
            홈으로 돌아가기
          </Button>
        </div>
      </Card>
    </div>
  );
}