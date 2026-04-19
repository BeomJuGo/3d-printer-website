const KAKAO_URL = "http://pf.kakao.com/_nxnkCX/chat";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a]/85 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold text-orange-400 mb-3">🖨 3D프린팅 제작소</div>
            <p className="text-gray-500 text-sm leading-relaxed">고객의 아이디어를 현실로 만드는<br />맞춤형 3D프린팅 제작 서비스</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">바로가기</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#templates" className="hover:text-orange-400 transition-colors">제작 갤러리</a></li>
              <li><a href="#how-it-works" className="hover:text-orange-400 transition-colors">제작 과정</a></li>
              <li><a href="#pricing" className="hover:text-orange-400 transition-colors">가격 안내</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">문의하기</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">문의 채널</h4>
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded-full text-sm transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.6 5.1 4.1 6.6L5 21l4.4-2.3c.8.2 1.7.3 2.6.3 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
              </svg>
              카카오톡 채널
            </a>
            <p className="text-gray-600 text-xs mt-3">평일 09:00~21:00<br />주말 10:00~18:00</p>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 text-center text-gray-600 text-xs">© 2025 3D프린팅 제작소. All rights reserved.</div>
      </div>
    </footer>
  );
}
