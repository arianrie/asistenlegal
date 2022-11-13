import { IconName } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';
import { ToggleProfitList, ProfitList } from '../constans/';
export default function Profit(){
  const [ tabProfit, setTabProfit ] = useState(1);
    function tabProfitHandle(index){
      setTabProfit(index)
    }
return (
    <div id="profit" className="flex flex-col mt-20 mx-10 lg:mx-20">
      <div className="text-3xl lg:text-4xl font-bold mb-10 lg:w-4/12">Keuntungan PT Perorangan</div>
        <div className="flex flex-col flex-col-reverse lg:flex-row ">
          <div className="lg:w-6/12 w-full">
            <div className="flex flex-col w-full justify-center">
                <div className="flex gap-x-2">
                {ToggleProfitList.map((item)=>(
                  <div onClick={()=> tabProfitHandle(item.id)} key={ item.id } className={`${tabProfit === item.id ? 'bg-slate-900 text-slate-100 px-5 py-5 text-2xl' : 'bg-[#ffcb42ff] px-5 py-5 text-2xl '}`}>{item.icon}</div>
                ))}
                </div>
                {ProfitList.map((item)=>(
                <p key={ item.id } className={`${tabProfit === item.id ? 'block' : 'hidden'} duration-300 text-2xl mt-5`}>
                  <span className="font-bold block text-3xl w-8/12 mb-3">{ item.title }</span>
                  { item.content }
                </p>
                ))}
            </div>
        </div>
        <div className="lg:w-6/12 ml-5">
          <Image alt="image_profit"
                  width={700}
                  height={500}
                  src="/images/profit.webp"
          />
        </div>
      </div>
    </div>
  )
}
