import { Inter } from "next/font/google";
import "./globals.css";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
