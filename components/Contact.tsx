const KAKAO_URL = "http://pf.kakao.com/_nxnkCX/chat";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]/70">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-orange-950/40 to-yellow-950/30 border border-orange-500/20 rounded-3xl p-10 md:p-16">
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            지금 바로
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> 문의하세요</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            아이디어가 있으신가요? 참고 이미지나 간단한 설명만으로도 OK!
            카카오톡으로 연락주시면 친절하게 상담해 드립니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {[
              { icon: "⚡", title: "빠른 응답", desc: "평균 1시간 내 답변" },
              { icon: "💯", title: "무료 상담", desc: "상담비 0원" },
              { icon: "🔄", title: "수정 보장", desc: "만족할 때까지" },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-white text-sm">{item.title}</div>
                <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
          <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-10 py-5 rounded-full text-xl transition-all hover:scale-105 shadow-2xl shadow-yellow-400/30">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.6 5.1 4.1 6.6L5 21l4.4-2.3c.8.2 1.7.3 2.6.3 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
            </svg>
            카카오톡 채널 문의하기
          </a>
          <p className="text-gray-600 text-sm mt-4">운영시간: 평일 09:00 ~ 21:00 | 주말 10:00 ~ 18:00</p>
        </div>
      </div>
    </section>
  );
}
