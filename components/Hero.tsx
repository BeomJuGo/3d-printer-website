const KAKAO_URL = "http://pf.kakao.com/_nxnkCX/chat";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-transparent to-yellow-950/20 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          ✨ 고객 맞춤 3D프린팅 제작 서비스
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          당신의 아이디어를
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            현실로 만들어 드립니다
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          피규어부터 기계 부품, 인테리어 소품, 커스텀 기념품까지
          <br className="hidden md:block" />
          어떤 형태든 정밀하게 제작해 드립니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-yellow-400/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.6 5.1 4.1 6.6L5 21l4.4-2.3c.8.2 1.7.3 2.6.3 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
            </svg>
            카카오톡으로 무료 상담
          </a>
          <a
            href="#templates"
            className="flex items-center justify-center gap-2 border border-orange-400/50 text-orange-400 hover:bg-orange-400/10 font-semibold px-8 py-4 rounded-full text-lg transition-all"
          >
            제작 갤러리 보기 →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          {[
            { num: "500+", label: "제작 완료" },
            { num: "100%", label: "맞춤 제작" },
            { num: "24h", label: "빠른 응답" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-black text-orange-400">{stat.num}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
