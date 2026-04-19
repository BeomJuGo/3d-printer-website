const KAKAO_URL = "http://pf.kakao.com/_nxnkCX/chat";

const PLANS = [
  {
    name: "소형 제품",
    priceRange: "15,000원~",
    description: "작은 소품, 액세서리, 간단한 피규어",
    features: [
      "최대 10x10x10cm",
      "단색 기본 출력",
      "PLA/PETG 소재",
      "2~3일 제작",
      "1회 수정 포함",
    ],
    highlight: false,
  },
  {
    name: "중형 제품",
    priceRange: "30,000원~",
    description: "부품, 소품, 중형 피규어 및 모형",
    features: [
      "최대 20x20x20cm",
      "다색 출력 가능",
      "다양한 소재 선택",
      "3~5일 제작",
      "2회 수정 포함",
      "표면 처리 옵션",
    ],
    highlight: true,
  },
  {
    name: "대형/맞춤",
    priceRange: "문의 후 결정",
    description: "대형 모형, 복잡한 기구물, 특수 요청",
    features: [
      "크기 제한 없음",
      "풀컬러 도색 가능",
      "특수 소재 협의",
      "제작 기간 협의",
      "무제한 수정 협의",
      "납기일 보장",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            가격
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> 안내</span>
          </h2>
          <p className="text-gray-400 text-lg">합리적인 가격으로 고품질 3D프린팅을 경험하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 border transition-all hover:-translate-y-1 ${
                plan.highlight
                  ? "bg-gradient-to-b from-orange-950/60 to-[#1a1a1a] border-orange-500/50 shadow-xl shadow-orange-500/10"
                  : "bg-[#1a1a1a] border-white/10 hover:border-orange-500/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black text-xs font-black px-4 py-1 rounded-full">
                    가장 인기
                  </span>
                </div>
              )}

              <h3 className="text-xl font-black text-white mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

              <div className="text-3xl font-black text-orange-400 mb-6">{plan.priceRange}</div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-orange-400 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-bold py-3 rounded-xl transition-all ${
                  plan.highlight
                    ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                    : "border border-orange-400/50 text-orange-400 hover:bg-orange-400/10"
                }`}
              >
                견적 문의하기
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
          <p className="text-gray-400 text-sm">
            💡 <strong className="text-white">소재, 크기, 복잡도</strong>에 따라 가격이 달라질 수 있습니다.
            정확한 견적은 카카오톡으로 요구사항을 보내주시면 빠르게 안내해 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
