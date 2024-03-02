'use client'

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'src/utils/theme'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers(props: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {props.children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  )
}