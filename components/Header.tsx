"use client";
import { useState } from "react";

const KAKAO_URL = "http://pf.kakao.com/_nxnkCX/chat";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-orange-400 tracking-tight">
          🖨 3D프린팅 제작소
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#templates" className="hover:text-orange-400 transition-colors">제작 갤러리</a>
          <a href="#how-it-works" className="hover:text-orange-400 transition-colors">제작 과정</a>
          <a href="#pricing" className="hover:text-orange-400 transition-colors">가격 안내</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">문의</a>
        </nav>

        <a
          href={KAKAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded-full text-sm transition-colors"
        >
          <KakaoIcon />
          카카오톡 문의
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-sm">
          <a href="#templates" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-orange-400">제작 갤러리</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-orange-400">제작 과정</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-orange-400">가격 안내</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-orange-400">문의</a>
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full w-fit"
          >
            <KakaoIcon />
            카카오톡 문의
          </a>
        </div>
      )}
    </header>
  );
}

function KakaoIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.6 5.1 4.1 6.6L5 21l4.4-2.3c.8.2 1.7.3 2.6.3 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
    </svg>
  );
}
