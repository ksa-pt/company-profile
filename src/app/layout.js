import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  title: "KSA Indonesia",
  description: "deliver data driven solutions that create a real impact, particularly in the sectors of healthcare, disaster management, and environmental sustainability areas that are at the core of our expertise and focus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
