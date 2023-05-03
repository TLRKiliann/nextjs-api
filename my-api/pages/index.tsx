import type { GetStaticProps } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { z } from 'zod'

type SpaceXData = {
  data: {
    name: z.string
    date_local: z.string
    links: [
      patch: [
        large: z.string
      ]
    ]
  }
  error: {
    message: z.string
  }
  isLoading: z.boolean;
  isError: z.boolean;
}

const getSpaceXData: z.string = "https://api.spacexdata.com/v5/launches/latest"

//queryFn = function fetch a constant !
const Home = () => {
  const { data, isLoading, isError, error } = useQuery<SpaceXData>({
    queryKey: ['spacex'],
    queryFn: () => fetch(getSpaceXData).then((res) => res.json())
  });
  
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (!data) {
    return <div>No data</div>
  } else {
    console.log("data + cores : ", data, data?.date_local)
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>

      <h1>Start !</h1>
      <h2>{data?.name}</h2>
      <h2>{data?.date_local}</h2>
      <Image
        src={data?.links.patch.large}
        width={400}
        height={375}
        alt="patch-img"
        style={{width: "20%", height:"auto"}}
      />
    </div>
  )
}
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<SpaceXData>(["spacex"], getSpaceXData);
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
