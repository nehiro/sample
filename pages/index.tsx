import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

  
const Home: NextPage = () => {
  const array = [1,2,3,4,5];
  const map = array.filter(function(num){
    return num > 2;
  })
  console.log(map);
  const map02: string[] | null = [];
  for(let i=0; i<map.length; i++){
    map02.push('<li>'+ map[i] +'番です</li>');
  }
  if (process.browser) {
    document?.getElementById('ary')?.innerHTML = map02.join('');
  }
  console.log(map02);
  return (
    <>
    <div><ul id='ary'>{map02}</ul></div>
    
    </>
  )
}

export default Home
