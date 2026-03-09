import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, BASE_URL } from "@/lib/constant";
import { ThemeProvider } from "next-themes";
const geistSans = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased`}
      >
       <ThemeProvider
       attribute="class"
       defaultTheme="light"
       enableSystem
       disableTransitionOnChange
       >
         {children}
       </ThemeProvider>
      </body>
    </html>
  );
}
