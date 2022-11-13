import Image from 'next/image';

export default function Main(){
  return(
    <div id="main" className="flex flex-col sm:flex-col-reverse flex-col-reverse mx-10 lg:flex-row lg:h-screen lg:justify-center lg:items-center lg:mx-20 ">
        <div className="lg:w-6/12 font-sans">
          <span className="text-5xl lg:text-7xl font-bold block mb-5">Asistenlegal</span>
          <span className="text-2xl lg:text-4xl">Jasa Pendirian PT Perorangan untuk semua bidang usaha dan UMKM</span>
          <button className="bg-[#ffcb42ff] block px-3 py-1 text-2xl font-bold mt-5 ">Lihat Selengkapnya</button>
        </div>
        <div className="w-full flex lg:w-6/12">
          <Image alt="main_image"
                 width={800}
                 height={600}
                 src="/images/main_image.webp"
          />
        </div>
      </div>
  )
}
