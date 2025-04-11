import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { OrderLookupButton } from '@/components/order-lookup-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '핏리에버 - AI 기반 스마트 헬스케어',
  description: 'AI 트레이너와 함께하는 스마트한 운동 관리',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* 프로모션 배너 */}
        <div className="bg-black text-white text-center py-2 text-sm">
          <span className="inline-flex items-center gap-2">
            ⭐️ 2025 신년 프로모션 진행중
            <span className="text-blue-400">(30% 할인)</span>
          </span>
        </div>

        {/* 네비게이션 바 */}
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* 로고 */}
              <div className="flex items-center">
                <a href="/" className="text-[#0066ff] font-bold text-xl">
                  핏리에버
                </a>
              </div>

              {/* 주문조회 버튼 */}
              <OrderLookupButton />
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
