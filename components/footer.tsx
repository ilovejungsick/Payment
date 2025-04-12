export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4 text-sm text-gray-600">
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-gray-900">이용약관</a>
            <a href="/privacy" className="font-medium hover:text-gray-900">개인정보처리방침</a>
          </div>
          
          <div className="space-y-2">
            <p className="font-medium">주식회사 핏리에버 (FitlyEver Inc.)</p>
            <div className="space-y-1">
              <div className="flex gap-8">
                <div className="flex gap-2">
                  <span className="text-gray-500">대표:</span>
                  <span>오준상</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">이메일:</span>
                  <span>info@fitlyever.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">사업자등록번호:</span>
                  <span>142-81-87334</span>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex gap-2">
                  <span className="text-gray-500">통신판매업 신고번호:</span>
                  <span>제 2025-세종조치원-0012호</span>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex gap-2">
                  <span className="text-gray-500">주소:</span>
                  <span>세종특별자치시 조치원읍 세종로 2296, 세종창업기술센터 3층 301호</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">전화번호:</span>
                  <span>010-4836-0520</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-400">© 2024 FitlyEver All rights reserved</p>
        </div>
      </div>
    </footer>
  );
} 