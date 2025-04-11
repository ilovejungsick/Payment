"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function OrderLookupButton() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 여기서 API 호출 등을 통해 주문을 검증하고 이동
    router.push(`/order/${orderNumber}`);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">주문조회</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>주문 조회</DialogTitle>
            <DialogDescription>
              휴대폰번호와 주문번호를 입력하여 주문 내역을 확인하세요.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="phone">휴대폰번호</Label>
              <Input
                id="phone"
                placeholder="휴대폰번호를 입력하세요 (-없이)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="orderNumber">주문번호</Label>
              <Input
                id="orderNumber"
                placeholder="주문번호를 입력하세요"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button type="submit">조회하기</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 