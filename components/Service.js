import Image from 'next/image';

export default function Service(){
  return(
  <div id="service" className="flex flex-col mx-10 mt-20 lg:flg:lex-col lg:justify-center lg:mx-20">
    <div className="text-3xl lg:text-4xl font-bold mb-10">Layanan Kami</div>
      <div className="flex flex-col md:flex-col-reverse lg:flex-row">
        <Image alt="main_image"
                width={700}
                height={500}
                src="/images/service.webp"
        />
        <div className="lg:ml-10 flex flex-col justify-center">
          <div className="md:mt-10 font-semibold text-3xl mb-5">Biaya Pendirian PT Perorangan</div>
          <div className="lg:ml-5 text-2xl lg:ml-10 lg:px-10">
            <p className="mb-5">
              <span className="font-semibold block">PNBP Rp.50.000,-</span>
              penerimaan bukan pajak dibayarkan ke ahu kemenkumham
            </p>
            <p>
              <span className="font-semibold block">Jasa pendirian Rp.650.000,-</span>
              dibayarkan setelah dokumen pt perorangan selesai
            </p>
            <button className="px-3 py-1 bg-[#ffcb42ff] mt-10 font-bold">pesan sekarang</button>
          </div>
        </div>
      </div>
  </div>

  )
}
