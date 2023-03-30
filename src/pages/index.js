import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout, { Section } from '../../components/Section'
import Card from '../../components/Card'

import Link from 'next/link'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })


export default function Home({data}) {
  

  return (
    <Section>
      <button>
      <Link href={"/create"}>Crear nueva caja de cartas secretas.</Link>
      </button>
      

    </Section>

    
  )
}

async function getData(){
  const response = await axios.get("http://localhost:3000/api/vername")
  return response.data
}

export async function getServerSideProps(context){
  const data = await getData()

  return {props:{data}}

}