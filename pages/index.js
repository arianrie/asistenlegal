import Image from 'next/image';
import { useState, useEffect } from 'react';
import { DasarHukum } from '../constans/';
import Navbar  from '../components/Navbar';
import Main from '../components/Main';
import Service from '../components/Service';
import WillGet from '../components/WillGet';
import Process from '../components/Process';
import Profit from '../components/Profit';
import Regulation from '../components/Regulation';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Index(){
  const control = useAnimation();
  const [ ref, inView ] = useInView();
  useEffect(()=>{
    if(inView){
      control.start("visible");
    }else{
      control.start("hidden")
    }
  },[control, inView])
  const exampleVariants = {
    visible: {opacity:100, scale:1},
    hidden: {opacity:0, scale:0},
    transition:{
      duration: 0.2
    }
  }
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
    <motion.div ref={ ref } variants={exampleVariants} initial="hidden" animate={control}>
    <Profit/>
    </motion.div>
    <Regulation/>
  </div>
  )
}
