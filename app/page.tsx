"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// 상단 슬라이더 이미지
const sliderImages = [
  {
    src: "/images/slider-2.jpg.png",
    alt: "초간편 헬스앱 - 메인 대시보드"
  },
  {
    src: "/images/slider-3.jpg.png",
    alt: "초간편 헬스앱 - 개인화 건강분석"
  },
  {
    src: "/images/slider-4.jpg.png",
    alt: "초간편 헬스앱 - 1초만에 카메라로"
  },
  {
    src: "/images/slider-5.jpg.png",
    alt: "초간편 헬스앱 - 정밀 건강추적"
  }
];

// 상세 페이지 이미지
const detailImages = [
  {
    src: "/images/detailedpage1.png",
    alt: "상세페이지1"
  },
  {
    src: "/images/detailedpage2.png",
    alt: "상세페이지2"
  },
  {
    src: "/images/detailedpage3.gif",
    alt: "상세페이지3"
  },
  {
    src: "/images/detailedpage4.png",
    alt: "상세페이지4"
  },
  {
    src: "/images/detailedpage5.gif",
    alt: "상세페이지5"
  },
  {
    src: "/images/detailedpage6.png",
    alt: "상세페이지6"
  },
  {
    src: "/images/detailedpage7.gif",
    alt: "상세페이지7"
  },
  {
    src: "/images/detailedpage8.png",
    alt: "상세페이지8"
  },
  {
    src: "/images/detailedpage9.png",
    alt: "상세페이지9"
  },
  {
    src: "/images/detailedpage10.gif",
    alt: "상세페이지10"
  },
  {
    src: "/images/detailedpage11.png",
    alt: "상세페이지11"
  }
];

// 패키지 데이터
const packages = {
  basic: {
    icon: "🌱",
    title: "베이직 패키지",
    description: "혼자서도 잘해낼 수 있어요",
    originalPrice: "42,900원",
    price: "19,000원",
    discount: "56%",
    features: [
      "초개인화 건강분석 무제한",
      "간편한 카메라 기록 무제한",
      "실시간 건강 추적 기능"
    ]
  },
  pro: {
    icon: "⭐️",
    title: "프로 패키지",
    description: "전문가의 도움을 받아보세요",
    originalPrice: "101,000원",
    price: "39,000원",
    discount: "61%",
    features: [
      "초개인화 건강분석 무제한",
      "간편한 카메라 기록 무제한",
      "실시간 건강 추적 기능",
      "전문가 식단 레포트"
    ],
    badge: "BEST DEAL"
  },
  premium: {
    icon: "👑",
    title: "프리미엄 패키지",
    description: "확실한 변화를 원한다면",
    originalPrice: "789,000원",
    price: "297,000원",
    discount: "62%",
    features: [
      "초개인화 건강분석 무제한",
      "간편한 카메라 기록 무제한",
      "실시간 건강 추적 기능",
      "전문가 식단 레포트",
      "비대면 1:1 맞춤 코칭 (4주)"
    ],
    badge: "PREMIUM"
  }
};

// 컴포넌트
const HeroSection = () => (
  <div className="relative">
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/images/workout-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-10"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
    </div>

    <div className="container py-4">
      <div className="relative">
        <div className="rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg">
          <GalleryCarousel />
        </div>
      </div>
    </div>
  </div>
);

const PromotionBanner = () => (
  <div className="bg-gradient-to-r from-black to-primary/90 text-white text-center py-2.5 text-sm px-4">
    <span className="inline-flex items-center gap-2">
      ⭐️ 얼리버드 유저 모집
      <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">62% 할인</span>
    </span>
  </div>
);

const PackageFeatures = () => (
  <div className="py-10 bg-gradient-to-b from-white to-gray-50/30">
    <div className="container">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* 얼리버드 혜택 헤더 */}
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <h1 className="text-xl font-bold">얼리버드 유저 혜택</h1>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">HOT</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold text-primary">
              핏리에버 앱 이용권 + 전문가 식단 레포트
            </span>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="text-sm text-gray-500 line-through">정상가 101,000원</span>
              <span className="text-lg font-bold text-red-500">62% 할인</span>
            </div>
          </div>
        </div>

        {/* 특별 혜택 배지 */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="px-3 py-1">
            <span className="text-primary mr-1">✨</span> 파격 할인 특가
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <span className="text-yellow-500 mr-1">⚡️</span> 지금이 가장 싸다
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <span className="text-red-500 mr-1">🔥</span> 얼리버드 한정
          </Badge>
        </div>

        {/* 앱 기능 설명 */}
        <div className="grid gap-4 mt-6">
          <Card className="bg-primary/5 border-primary/10">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">초개인화 건강분석 무제한</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">간편한 카메라 기록 무제한</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">실시간 건강 추적 기능</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const PurchaseGuide = () => (
  <div className="py-10 bg-gray-50">
    <div className="container">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">✅</span>
          <h2 className="text-xl font-bold">구매전 꼭 확인하세요!</h2>
          <span className="text-2xl">👀</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm">
          <div className="mb-2">
            <span className="text-3xl">📱</span>
          </div>
          <h3 className="font-bold mb-1">이용기기</h3>
          <p className="text-xs text-gray-500 text-center">
            (안드로이드/아이폰)
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm">
          <div className="mb-2">
            <span className="text-3xl">💬</span>
          </div>
          <h3 className="font-bold mb-1">고객센터</h3>
          <p className="text-xs text-gray-500 text-center">
            (평일 10AM - 4PM)
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm text-gray-600 max-w-2xl mx-auto px-4">
        <p className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          얼리버드 이용권은 무통장입금 후 환불이 불가합니다.
        </p>
        <p className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          5월 1일까지 서비스 미제공 시에는 전액 환불됩니다.
        </p>
        <p className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          얼리버드 유저 초대장은 이메일로 PDF 형태로 발송됩니다.
        </p>
        <p className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          현금영수증 발급은 요청 시 발급 가능합니다.
        </p>
      </div>
    </div>
  </div>
);

// PackageSelection 컴포넌트의 props 타입 정의
interface PackageSelectionProps {
  onSelect: (packageId: string) => void;
}

const PackageSelection = ({ onSelect }: PackageSelectionProps) => (
  <div className="space-y-6 py-6">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold">패키지 선택</h3>
    </div>

    <div className="space-y-4 max-h-[calc(80vh-120px)] overflow-y-auto pr-2">
      <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 hover:shadow-sm transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <div>
                <h4 className="font-bold">베이직 패키지</h4>
                <p className="text-sm text-gray-500">혼자서도 잘해낼 수 있어요</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-primary font-medium">앱 3개월 이용권</p>
              <div className="space-y-1 pl-4 text-sm text-gray-600">
                <p>• 초개인화 건강분석 무제한</p>
                <p>• 간편한 카메라 기록 무제한</p>
                <p>• 실시간 건강 추적 기능</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400 line-through">42,900원</p>
            <p className="text-lg font-bold text-primary">19,000원</p>
            <p className="text-xs text-red-500">56% 할인</p>
          </div>
        </div>
        <Button 
          className="w-full transform transition-transform active:scale-95" 
          variant="outline"
          onClick={() => onSelect('basic')}
        >
          선택하기
        </Button>
      </div>

      <div className="border rounded-lg p-4 space-y-3 relative">
        <div className="absolute -top-3 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
          BEST DEAL
        </div>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐️</span>
              <div>
                <h4 className="font-bold">프로 패키지</h4>
                <p className="text-sm text-gray-500">전문가의 도움을 받아보세요</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-primary font-medium">앱 3개월 이용권</p>
              <div className="space-y-1 pl-4 text-sm text-gray-600">
                <p>• 초개인화 건강분석 무제한</p>
                <p>• 간편한 카메라 기록 무제한</p>
                <p>• 실시간 건강 추적 기능</p>
              </div>
              <p className="text-primary font-medium mt-3">전문가 식단 레포트</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400 line-through">101,000원</p>
            <p className="text-lg font-bold text-primary">39,000원</p>
            <p className="text-xs text-red-500">61% 할인</p>
          </div>
        </div>
        <Button 
          className="w-full transform transition-transform active:scale-95" 
          variant="outline"
          onClick={() => onSelect('pro')}
        >
          선택하기
        </Button>
      </div>

      <div className="border rounded-lg p-4 space-y-3 relative hover:shadow-lg transition-shadow">
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#1a237e] to-[#283593] text-white text-xs px-3 py-1 rounded-full shadow-lg">
          PREMIUM
        </div>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👑</span>
              <div>
                <h4 className="font-bold">프리미엄 패키지</h4>
                <p className="text-sm text-gray-500">확실한 변화를 원한다면</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-primary font-medium">앱 3개월 이용권</p>
              <div className="space-y-1 pl-4 text-sm text-gray-600">
                <p>• 초개인화 건강분석 무제한</p>
                <p>• 간편한 카메라 기록 무제한</p>
                <p>• 실시간 건강 추적 기능</p>
              </div>
              <p className="text-primary font-medium mt-3">전문가 식단 레포트</p>
              <p className="text-primary font-medium">비대면 1:1 맞춤 코칭 (4주)</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400 line-through">789,000원</p>
            <p className="text-lg font-bold text-primary">297,000원</p>
            <p className="text-xs text-red-500">62% 할인</p>
          </div>
        </div>
        <Button 
          className="w-full transform transition-transform active:scale-95" 
          variant="outline"
          onClick={() => onSelect('premium')}
        >
          선택하기
        </Button>
      </div>
    </div>
  </div>
);

export default function Home() {
  const router = useRouter();

  const handlePackageSelect = (packageId: string) => {
    router.push(`/order?package=${packageId}`);
  };

  return (
    <main className="relative min-h-screen pb-20">
      <HeroSection />
      <PromotionBanner />
      <PackageFeatures />
      <PurchaseGuide />
      
      {/* 상세 설명 이미지들 */}
      <div className="space-y-4">
        {detailImages.map((image, index) => (
          <div key={index} className="relative aspect-auto">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              className="w-full"
            />
          </div>
        ))}
      </div>

      {/* 하단 고정 구매하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 border-t shadow-lg backdrop-blur-sm">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold" size="lg">
              패키지 선택하기
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
            <PackageSelection onSelect={handlePackageSelect} />
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}