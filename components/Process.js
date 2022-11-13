import Image from 'next/image';

export default function Process(){
 return(
   <div id="process" className="mx-10 flex items-center justify-center lg:mx-40 mt-20">
    <Image alt="main_image"
          width={1200}
          height={600}
          src="/images/roadmap_process.webp"
    />
  </div>

 )
}
