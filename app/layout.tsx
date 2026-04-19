import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D프린팅 맞춤 제작 서비스 | 고객 요구사항 맞춤 제작",
  description: "피규어, 부품, 인테리어 소품, 커스텀 기념품까지 고객의 요구사항에 맞는 3D프린팅 제작 서비스. 카카오톡으로 쉽게 문의하세요.",
  keywords: ["3D프린팅", "맞춤제작", "피규어", "부품제작", "3D프린터", "커스텀"],
  openGraph: {
    title: "3D프린팅 맞춤 제작 서비스",
    description: "고객 요구사항에 맞는 3D프린팅 제작 서비스",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#0f0f0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
