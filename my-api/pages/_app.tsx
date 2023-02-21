import React from 'react';
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
   <QueryClientProvider client={queryClient}>
     <Hydrate state={pageProps.dehydratedState}>
       <Component {...pageProps} />
     </Hydrate>
   </QueryClientProvider>
  )
};
