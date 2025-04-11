"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Flame, ThumbsUp, Users } from "lucide-react";

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
    src: "/images/detailed1.webp",
    alt: "아직도 다이어트하는데 막연하게 아무 계획도 없으세요?"
  },
  {
    src: "/images/detailed2.png",
    alt: "아직도 다이어트하는데 막연하게 아무 계획도 없으세요?"
  },
  {
    src: "/images/detailed3.gif",
    alt: "또 돈이랑 시간만 날리고 실패하시려구요?"
  },
  {
    src: "/images/detailed4.png",
    alt: "성공하는 다이어트의 핵심은 식욕억제제 X 더 빡센 운동 X 지독한 절제 X"
  },
  {
    src: "/images/detailed5.gif",
    alt: "내 목표에 맞는 섭취량을 알고 기록을 통해 꾸준히 실천하는 것만이 답"
  },
  {
    src: "/images/detailed6.png",
    alt: "현대인은 바쁘다 바빠~ 저도 알긴 아는데.. 엄두가 나지 않는 현실!"
  },
  {
    src: "/images/detailed7.png",
    alt: "고물가 시대 PT 없이도 목적 달성이 가능한 나만의 다이어트 성공법"
  }
];

// 패키지 상품 데이터
const packages = [
  {
    id: "basic",
    name: "베이식 PACK",
    originalPrice: "42,900",
    price: "19,000",
    description: "앱 3개월 이용권",
    badge: "EARLY BIRD",
    features: [
      "앱 3개월 이용권",
      "얼리버드 뱃지",
    ]
  },
  {
    id: "pro",
    name: "프로 PACK",
    originalPrice: "101,000",
    price: "39,000",
    description: "앱 3개월 이용권 + 추가 혜택",
    badge: "BEST CHOICE",
    features: [
      "앱 3개월 이용권",
      "얼리버드 뱃지",
      "음식 티어 총정리",
      "건강통계 분석 가이드",
    ]
  },
  {
    id: "premium",
    name: "프리미엄 PACK",
    originalPrice: "789,000",
    price: "297,000",
    description: "앱 6개월 이용권 + 프리미엄 혜택",
    badge: "PREMIUM",
    features: [
      "앱 6개월 이용권",
      "프리미엄 뱃지",
      "음식 티어 총정리",
      "건강통계 분석 가이드",
      "전문가 개인 맞춤형 식단/운동 관리(4주)",
    ]
  }
];

// 앱 기능 설명
const features = [
  {
    title: "AI 자세 교정",
    description: "인공지능이 실시간으로 운동 자세를 분석하고 교정해드립니다."
  },
  {
    title: "맞춤형 운동 계획",
    description: "개인의 체력과 목표에 맞는 최적화된 운동 루틴을 제공합니다."
  },
  {
    title: "식단 관리",
    description: "일일 칼로리와 영양소를 계산하여 효과적인 식단을 추천해드립니다."
  }
];

export default function Home() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    router.push(`/order?package=${packageId}`);
  };

  return (
    <main className="relative min-h-screen pb-20">
      {/* Hero Section with Gallery Carousel */}
      <div className="relative">
        {/* 배경 이미지 레이어 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/workout-bg.jpg"  // 운동하는 이미지로 교체 필요
            alt=""
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
        </div>

        <div className="container mx-auto px-4 pt-8 pb-24 relative">
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl">
              <GalleryCarousel />
            </div>
            {/* Decorative elements */}
            <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* 간소화된 Special Offer 섹션 */}
      <div className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 통계 지표 */}
            <div className="flex justify-center gap-12 mb-12 py-6 px-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">4.9</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">상담요청 5,000+</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-medium">98% 만족</span>
              </div>
            </div>

            {/* 패키지 카드 그리드 */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* 베이식 패키지 */}
              <Card className="relative bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl font-bold">베이식 PACK</CardTitle>
                    <Badge variant="secondary" className="text-sm">EARLY BIRD</Badge>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">₩19,000</span>
                    <span className="text-sm text-gray-400 line-through">₩42,900</span>
                  </div>
                  <Badge variant="destructive" className="text-xs">56% OFF</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      앱 3개월 이용권
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      얼리버드 뱃지
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* 프로 패키지 */}
              <Card className="relative bg-white/50 backdrop-blur-sm shadow-lg scale-105 border-primary/20">
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary text-white">BEST CHOICE</Badge>
                </div>
                <CardHeader className="pt-12">
                  <CardTitle className="text-xl font-bold">프로 PACK</CardTitle>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">₩39,000</span>
                    <span className="text-sm text-gray-400 line-through">₩101,000</span>
                  </div>
                  <Badge variant="destructive" className="text-xs">61% OFF</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      앱 3개월 이용권
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      얼리버드 뱃지
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      음식 티어 총정리
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      건강통계 분석 가이드
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* 프리미엄 패키지 */}
              <Card className="relative bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl font-bold">프리미엄 PACK</CardTitle>
                    <Badge variant="default" className="text-sm">PREMIUM</Badge>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">₩297,000</span>
                    <span className="text-sm text-gray-400 line-through">₩789,000</span>
                  </div>
                  <Badge variant="destructive" className="text-xs">62% OFF</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      앱 6개월 이용권
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      프리미엄 뱃지
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      음식 티어 총정리
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      건강통계 분석 가이드
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      전문가 개인 맞춤형 식단/운동 관리(4주)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* 얼리버드 알림 배너 */}
            <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-primary">얼리버드 특별 혜택</span>
                <span className="mx-2">|</span>
                지금 구매 시 출시 직후 담당 매니저의 1:1 앱 이용 가이드를 받으실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* 세로 스크롤 상세 이미지 */}
        <div className="space-y-0 py-12">
          {detailImages.map((image, index) => (
            <div key={index} className="relative w-full max-w-3xl mx-auto">
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  unoptimized={image.src.endsWith('.gif')}
                  priority={index === 0}
                />
              </div>
              <span className="sr-only">{image.alt}</span>
            </div>
          ))}

          {/* 상품 설명 섹션 */}
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">AI 기반 스마트 헬스케어</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                인공지능 트레이너가 24시간 당신의 건강을 관리해드립니다.
                운동 자세부터 식단까지, 더 건강한 라이프스타일을 만들어보세요.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">주요 기능</h2>
              <div className="space-y-6">
            {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-primary text-xl">✓</span>
                    </div>
                  <div>
                      <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 고정 구매하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
              패키지 선택하기
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <div className="space-y-6 py-6">
              <h3 className="text-xl font-bold">패키지 선택</h3>
              <div className="space-y-4">
                {packages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    className={`p-4 cursor-pointer transition-all ${
                      selectedPackage === pkg.id
                        ? "border-primary"
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => handlePackageSelect(pkg.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{pkg.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {pkg.description}
                        </p>
                      </div>
                      <p className="font-bold">₩{pkg.price}</p>
                </div>
                    <ul className="text-sm space-y-1">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-primary text-xs">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
              </Card>
            ))}
          </div>
        </div>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}