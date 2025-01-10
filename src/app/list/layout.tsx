import React from 'react';
import Link from 'next/link';

function ListLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return <div className='list'>
    <h3>这是我的列表页面</h3>
    <hr />
    {children}
  </div>;
}

export default ListLayout;