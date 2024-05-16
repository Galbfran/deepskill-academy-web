import Image from "next/image";

const ContainerExpert = ( {listLog} ) =>{
  return (
    <div className="flex">
      <div className="flex w-full m-5 justify-around ">
        {
          listLog.map((item)=>(
            <Image width={100} height={80} className="rounded-sm" src={item} alt="Logo" />
          ))
        }
      </div>
    </div>
  )
}

export default ContainerExpert