import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '首页',
  description: '这是第一个页面',
}
 
function HomePage (){
  return <div>HomePage</div>;
}

export default HomePage;
