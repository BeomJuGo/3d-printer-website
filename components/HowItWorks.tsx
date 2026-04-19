const STEPS = [
  {
    step: "01",
    title: "요구사항 상담",
    description: "카카오톡으로 원하시는 제품의 사진, 도면, 또는 간단한 설명을 보내주세요. 크기, 재질, 색상 등 세부 사항을 함께 논의합니다.",
    icon: "💬",
    color: "from-orange-500 to-amber-500",
  },
  {
    step: "02",
    title: "시제품 확인 & 수정",
    description: "요구사항을 바탕으로 3D 모델링 후 시제품을 제작합니다. 고객님의 피드백을 반영해 완성도를 높입니다.",
    icon: "🔧",
    color: "from-amber-500 to-yellow-500",
  },
  {
    step: "03",
    title: "최종 제작 & 배송",
    description: "최종 승인 후 제품을 정밀 제작하여 안전하게 포장 후 배송해 드립니다. 만족하실 때까지 책임집니다.",
    icon: "📦",
    color: "from-yellow-500 to-orange-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            제작
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> 과정</span>
          </h2>
          <p className="text-gray-400 text-lg">간단한 3단계로 맞춤 제품을 받아보세요</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <div key={step.step} className="relative text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>

                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2">
                  <span className="text-xs font-bold text-orange-500/50 bg-orange-500/10 px-2 py-0.5 rounded-full">
                    STEP {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>

                {index < STEPS.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent mx-auto mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-950/50 to-yellow-950/50 border border-orange-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">📋 제작 소요 기간</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {[
              { type: "소형 제품", period: "2~3일", example: "피규어, 액세서리" },
              { type: "중형 제품", period: "3~5일", example: "부품, 소품" },
              { type: "대형/복잡", period: "5~10일", example: "모형, 기구물" },
            ].map((item) => (
              <div key={item.type} className="bg-white/5 rounded-xl p-4">
                <div className="text-orange-400 font-bold">{item.type}</div>
                <div className="text-white text-2xl font-black mt-1">{item.period}</div>
                <div className="text-gray-500 text-xs mt-1">{item.example}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">※ 제품 복잡도와 수량에 따라 달라질 수 있습니다</p>
        </div>
      </div>
    </section>
  );
}
