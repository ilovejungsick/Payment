"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <a href="/about" className="block py-2 text-lg">
            소개
          </a>
          <a href="/features" className="block py-2 text-lg">
            기능
          </a>
          <a href="/pricing" className="block py-2 text-lg">
            요금제
          </a>
          <a href="/blog" className="block py-2 text-lg">
            블로그
          </a>
          <a href="/login" className="block py-2 text-lg">
            로그인
          </a>
          <a
            href="/signup"
            className="bg-[#0066ff] text-white px-4 py-2 rounded-lg text-center"
          >
            시작하기
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
} 