import "./globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import { Box } from "@mui/material"
import Header from "src/components/header"
import Footer from "src/components/footer"
import Providers from "src/utils/providers"


export const metadata: Metadata = {
  title: "Simple Crud Next.js 14",
  description: "Simple Crud Next.js 14",
};

type LayoutProps = {
  children: ReactNode
}

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box display='flex' flexDirection='column' minHeight='100vh'>
            <Header />
            <Box flexGrow={1}>
              {props.children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
