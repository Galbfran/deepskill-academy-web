'use client'
import Image from "next/image";

const CardExpert = ({ index, imgProfile, name, position, detail, imgLogo }) => {
  const bgColor = index % 2 === 0 ? "bg-deepskillgreen" : "bg-deepskillblue";

  return (
    <div className={`w-96 h-5/6 m-8 p-8 ${bgColor} flex flex-col justify-between rounded-md`}>
      <Image  className="w-32 h-32 rounded-full mb-4" src={imgProfile} alt={name} width={128} height={128} />
      <h3 className="text-base text-white font-bold mb-4">{name}</h3>
      <h4 className="text-sm font-bold text-white mb-4">{position}</h4>
      <p className="text-xs text-white">{detail}</p>
      <div className="flex m-5 justify-center">
        <Image width={150} height={150} className="rounded-sm" src={imgLogo} alt="Logo" />
      </div>
    </div>
  );
}

export default CardExpert;