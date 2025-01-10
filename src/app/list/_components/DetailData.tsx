'use client'
import { useParams, useSearchParams } from 'next/navigation';

function DetailData (){
  const { id } = useParams();
  const searchParams = useSearchParams();
  return <div>
    DetailData---{id}
    <a>{searchParams.get('name')}</a>
  </div>;
}

export default DetailData;