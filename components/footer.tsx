export function Footer() {
  return (
    <footer className="border-t mt-auto pb-32">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6 text-sm text-gray-600">
          <div className="flex gap-4">
            <a 
              href="https://fitlyever.notion.site/3228e06f5d4d4c14bcb6b9b6981c7da2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              이용약관
            </a>
            <a 
              href="https://fitlyever.notion.site/cd6556fa6d08451cab2751bfbba837aa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:text-gray-900"
            >
              개인정보처리방침
            </a>
          </div>
          
          <div className="space-y-3">
            <p className="font-medium">주식회사 핏리에버 (FitlyEver Inc.)</p>
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:gap-8 space-y-2 md:space-y-0">
                <div className="flex gap-2">
                  <span className="text-gray-500 w-24 md:w-auto">대표:</span>
                  <span>오준상</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500 w-24 md:w-auto">이메일:</span>
                  <span>info@fitlyever.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500 w-24 md:w-auto">사업자등록번호:</span>
                  <span>142-81-87334</span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500 w-24 md:w-auto">통신판매업:</span>
                <span>제 2025-세종조치원-0012호</span>
              </div>
              <div className="flex flex-col md:flex-row md:gap-8 space-y-2 md:space-y-0">
                <div className="flex gap-2">
                  <span className="text-gray-500 w-24 md:w-auto">주소:</span>
                  <span className="flex-1">세종특별자치시 조치원읍 세종로 2296, 세종창업기술센터 3층 301호</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500 w-24 md:w-auto">전화번호:</span>
                  <span>010-4836-0520</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-400 pt-2">© 2024 FitlyEver All rights reserved</p>
        </div>
      </div>
    </footer>
  );
} 