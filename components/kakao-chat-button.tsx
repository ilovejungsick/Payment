"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
    kakaoAsyncInit: () => void;
  }
}

export function KakaoChatButton() {
  useEffect(() => {
    window.kakaoAsyncInit = function() {
      window.Kakao.Channel.createChatButton({
        container: '#kakao-talk-channel-chat-button',
      });
    };
  }, []);

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.channel.min.js"
        integrity="sha384-8oNFBbAHWVovcMLgR+mLbxqwoucixezSAzniBcjnEoumhfIbMIg4DrVsoiPEtlnt"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <div 
        className="fixed bottom-24 right-4 z-50"
        id="kakao-talk-channel-chat-button"
        data-channel-public-id="_MkxbfG"
        data-title="question"
        data-size="small"
        data-color="yellow"
        data-shape="pc"
        data-support-multiple-densities="true"
      />
    </>
  );
} 