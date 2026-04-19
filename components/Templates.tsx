"use client";
import { useState } from "react";

const KAKAO_URL = "http://pf.kakao.com/_nxnkCX/chat";

const CATEGORIES = ["전체", "피규어/캐릭터", "부품/기구물", "인테리어 소품", "커스텀 기념품"];

const TEMPLATES = [
  {
    id: 1,
    title: "애니메이션 피규어",
    category: "피규어/캐릭터",
    description: "좋아하는 캐릭터를 정밀하게 제작",
    color: "from-purple-900/50 to-pink-900/50",
    icon: "🎭",
    tags: ["피규어", "캐릭터", "컬러 가능"],
  },
  {
    id: 2,
    title: "기계 부품 교체품",
    category: "부품/기구물",
    description: "단종된 부품이나 특수 규격 부품 제작",
    color: "from-blue-900/50 to-cyan-900/50",
    icon: "⚙️",
    tags: ["PLA", "ABS", "PETG"],
  },
  {
    id: 3,
    title: "미니어처 건축 모형",
    category: "인테리어 소품",
    description: "집, 건물 등 건축 미니어처 모형 제작",
    color: "from-green-900/50 to-teal-900/50",
    icon: "🏠",
    tags: ["모형", "건축", "소품"],
  },
  {
    id: 4,
    title: "커스텀 트로피/상패",
    category: "커스텀 기념품",
    description: "대회, 기념일 등 맞춤형 트로피",
    color: "from-yellow-900/50 to-orange-900/50",
    icon: "🏆",
    tags: ["트로피", "상패", "기념품"],
  },
  {
    id: 5,
    title: "반지/액세서리",
    category: "커스텀 기념품",
    description: "커플링, 이니셜 반지 등 커스텀 주얼리",
    color: "from-rose-900/50 to-red-900/50",
    icon: "💍",
    tags: ["반지", "액세서리", "커플"],
  },
  {
    id: 6,
    title: "드론/RC 부품",
    category: "부품/기구물",
    description: "드론 프레임, 마운트, RC 차 부품",
    color: "from-gray-900/50 to-slate-900/50",
    icon: "🚁",
    tags: ["드론", "RC", "경량"],
  },
  {
    id: 7,
    title: "화분/플랜터",
    category: "인테리어 소품",
    description: "독특한 디자인의 인테리어 화분",
    color: "from-emerald-900/50 to-lime-900/50",
    icon: "🌿",
    tags: ["화분", "인테리어", "생활"],
  },
  {
    id: 8,
    title: "게임 캐릭터 피규어",
    category: "피규어/캐릭터",
    description: "좋아하는 게임 캐릭터 고품질 피규어",
    color: "from-violet-900/50 to-purple-900/50",
    icon: "🎮",
    tags: ["게임", "피규어", "도색 가능"],
  },
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filtered = activeCategory === "전체"
    ? TEMPLATES
    : TEMPLATES.filter((t) => t.category === activeCategory);

  return (
    <section id="templates" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              제작 갤러리
            </span>
          </h2>
          <p className="text-gray-400 text-lg">다양한 분야의 맞춤 제작 사례를 확인하세요</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a] hover:border-orange-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center text-6xl`}>
                {item.icon}
              </div>

              <div className="p-5">
                <div className="text-xs text-orange-400 mb-1">{item.category}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={KAKAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded-lg text-sm transition-colors"
                >
                  이것과 비슷하게 제작 문의
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">원하는 제품이 없으신가요? 어떤 형태든 제작 가능합니다!</p>
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-orange-400/50 text-orange-400 hover:bg-orange-400/10 px-6 py-3 rounded-full font-semibold transition-all"
          >
            직접 요구사항 전달하기 →
          </a>
        </div>
      </div>
    </section>
  );
}
