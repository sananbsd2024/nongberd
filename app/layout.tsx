import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterPage from "./components/Footer";
import HeaderPage from "./components/Header";
import AuthProvider from "./context/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'โรงเรียนบ้านหนองเบิด',
  description: 'โรงเรียนบ้านหนองเบิด ตำบลเมืองน้อย อำเภอธวัชบุรี จังหวัดร้อยเอ็ด',
  keywords: 'Nongberd School, โรงเรียนบ้านหนองเบิด, หนองเบิด',
  icons: {
    icon: '/favicon.png', // Default favicon
    shortcut: '/favicon.ico', // Optional shortcut icon
    apple: '/apple-touch-icon.png', // Optional Apple Touch icon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <HeaderPage />
        <Navbar />
        {children}
        <FooterPage />
        </AuthProvider>
      </body>
    </html>
  );
}
