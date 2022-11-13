import { RegulationList } from '../constans/';

export default function Regulation(){
 return (
    <div id="regulation" className="flex flex-col mt-10 mx-10 lg:mx-20">
     <div className="text-3xl lg:text-4xl font-bold mb-5">Dasar Hukum <br/>PT Perorangan </div>
      <div className="w-full ">
        {RegulationList.map((pp)=>(
        <div key={ pp.id } tabIndex={0} className="hover:bg-[#ffcb42ff] duration-300 collapse collapse-plus border  border-base-300 bg-base-100 mt-2">
          <div className="collapse-title text-xl font-medium">
            { pp.title }
          </div>
          <div className="collapse-content">
            <p>{ pp.content }</p>
          </div>
        </div>
        ))}
    </div>
    </div>
 )
}
