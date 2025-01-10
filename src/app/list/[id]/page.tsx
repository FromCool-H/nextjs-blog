import DetailData from '../_components/DetailData';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ name: string }>
}

export async function generateMetadata(
  { searchParams }: Props,
): Promise<Metadata> {
  return {
    title: searchParams.name,
  }
}

function DetailPage (){
  console.log('run on server');
  return <div className='detail'>
    <DetailData />
  </div>;
}

export default DetailPage;