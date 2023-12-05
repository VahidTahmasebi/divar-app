import "./globals.css";
import vazirFont from "@/constants/localFonts";

import Providers from "./Providers";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Divar App",
  description: "Divar App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <div className="max-w-7xl container mx-auto px-2">
            <Header />

            <div className="flex gap-x-5">
              <SideBar />
              <div className="w-full">{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
