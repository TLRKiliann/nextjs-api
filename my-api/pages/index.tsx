import { dehydrate, QueryClient, useQuery } from 'react-query';
import Image from 'next/image';

type SpaceXData = {
  name: string
  links: [
    patch: [
      large: string
    ]
  ]
}

const getSpaceXData = async () => await (await fetch("https://api.spacexdata.com/v5/launches/latest")).json();

const Home: NextPage = () => {
  const { data, isLoading, isFetching } = useQuery('spacex', getSpaceXData);
  //console.log(data)
  
  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>No data</div>

  return (
    <div>

      <h1>Start !</h1>
      <h2>{data?.name}</h2>
      <Image
        src={data?.links.patch.large}
        width={500}
        height={500}
        alt="patch-img"
      />
    </div>
  )
}
export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<SpaceXData>("spacex", getSpaceXData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
