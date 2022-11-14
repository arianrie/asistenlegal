import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeLeft, fadeRight } from '../utils/Animation';

export default function Main(){
  const control = useAnimation();
  const [ ref, inView ] = useInView();
  useEffect(()=>{
    if(inView){
      control.start('visible');
    }else{
      control.start('hidden');
    }
  })

  return(
      <div className="flex flex-col mx-10 flex-col-reverse lg:flex-row lg:mx-20 overflow-hidden ">
      <motion.div className="lg:w-6/12 font-sans" animate={control} initial="hidden" ref={ref} variants={fadeLeft}>
          <span className="text-5xl lg:text-7xl font-bold block mb-5">Asistenlegal</span>
          <span className="text-2xl lg:text-4xl">Jasa Pendirian PT Perorangan untuk semua bidang usaha dan UMKM</span>
          <button className="bg-[#ffcb42ff] block px-3 py-1 text-2xl font-bold mt-5 ">Lihat Selengkapnya</button>
      </motion.div>
      <motion.div className="w-full flex lg:w-6/12" animate={control} initial="hidden" ref={ref} variants={fadeRight}>
          <Image alt="main_image"
                 width={800}
                 height={660}
                 src="/images/main_image.webp"
          />
      </motion.div>
      </div>
  )
}
