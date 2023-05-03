import * as React from 'react'
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


//Without ReactQueryDevtools
const queryClient = new QueryClient()

/*const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
)*/

export default function MyApp({ Component, pageProps }: AppProps) {
  //With ReactQueryDevtools
  /*const [queryClient] = React.useState(() => new QueryClient())
  const [showDevtools, setShowDevtools] = React.useState(false)

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old)
  }, [])
  */
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
};

//ReactQueryDevtoolsProduction with Suspense
/*
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
*/