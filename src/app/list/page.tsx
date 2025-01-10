import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '列表',
  description: '这是第一个页面',
}

// 服务器端渲染
const LoadData = () => {
  return fetch('https://api-mall.mihoyogift.com/common/homeishop/v1/goods/search_goods_spu_list?limit=16&page=1&order_by=comprehensive&shop_code=ys&show_sale_type=1&hide_sold_out=false&goods_type=1&random=true')
    .then(res=>res.json())
}

async function ListPage (){
  const data = [
    { id:1, name: 'aaaa'},
    { id:2, name: 'bbbb'},
    { id:3, name: 'cccc'},
    { id:4, name: 'dddd'},
  ];
  
  const dataList = await LoadData();
  
  return <div className='list-page'>
    ListPage
    <ul>
      {data.map( item => <li key={item.id}><Link href={'/list/'+item?.id}>{item.name}</Link></li>)}
    </ul>
    {dataList.data.list.map( (item:any) => <li key={item.goods_id}><Link href={'/list/'+item?.goods_id+'?name='+item?.name}>{item.name}</Link></li>)}
  </div>;
}

export default ListPage;