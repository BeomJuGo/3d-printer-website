const KAKAO_URL = "http://pf.kakao.com/_nxnkCX/chat";

export default function KakaoFloat() {
  return (
    <a
      href={KAKAO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 채널 문의"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-yellow-400/40 transition-all hover:scale-110 group"
    >
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.6 5.1 4.1 6.6L5 21l4.4-2.3c.8.2 1.7.3 2.6.3 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
      </svg>
      <span className="text-sm">카카오톡 문의</span>
    </a>
  );
}
