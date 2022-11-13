import Image from 'next/image';
import { useState } from 'react';
import { DasarHukum } from '../constans/';
import Navbar  from '../components/Navbar';
import Main from '../components/Main';
import Service from '../components/Service';
import WillGet from '../components/WillGet';
import Process from '../components/Process';
import Profit from '../components/Profit';
import Regulation from '../components/Regulation';
import Head from 'next/head';

export default function Index(){

  return (
   <div className="bg-[#f4f4f8ff] font-sans">
    <Head>
      <title>Asistenlegal</title>
    </Head>

    <Navbar/>
    <Main/>
    <Service/>
    <WillGet/>
    <Process/>
    <Profit/>
    <Regulation/>
  </div>
  )
}
