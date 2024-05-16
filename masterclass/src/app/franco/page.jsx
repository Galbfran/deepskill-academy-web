import CardExpert from "@/components/CardExpert";

const PageExpertTech = () => {
    return (
        <section className="w-screen h-screen bg-slate-400 flex">
            <div className="m-10 flex flex-col">
                <div>
                    <h2 className="text-5xl text-cyan-700">Expertos tech: Mentores en tu aprendizaje</h2>
                </div>
                
               <div className="flex flex-row">
                    <CardExpert 
                        index={0}
                        imaProfile={"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"} 
                        name={"JEAN PIERRE MANDUJANO"} 
                        position={"Software Engineer | Engineering Manager | CTO"} 
                        detail={"Founder & CTO de Deep Pit Technology Manager de Ingeniería en Scotiabank Tech Lead en BCP. Ingeniero de Software Senior en startups como Crehana y Fandango."} 
                        imgLogo={"https://deepskill.space/img/deepskill-logo.png"}
                    />
                     <CardExpert 
                        index={1}
                        imaProfile={"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"} 
                        name={"JEAN PIERRE MANDUJANO"} 
                        position={"Software Engineer | Engineering Manager | CTO"} 
                        detail={"Founder & CTO de Deep Pit Technology Manager de Ingeniería en Scotiabank Tech Lead en BCP. Ingeniero de Software Senior en startups como Crehana y Fandango."} 
                        imgLogo={"https://deepskill.space/img/deepskill-logo.png"}
                    />
               </div>
            </div>
            
        </section>
    )
}

export default PageExpertTech;

{/* <div className={"w-96 h-5/6  m-8 p-8 bg-" + bgColor + " flex flex-col justify-between rounded-md"}>
<img className="w-32 h-32 rounded-full mb-4" src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="" />
<h3 className="text-base text-white font-bold mb-4">JEAN PIERRE MANDUJANO</h3>
<h4 className="text-sm font-bold text-white mb-4">Software Engineer | Engineering Manager | CTO</h4>
<p className="text-xs text-white">Founder & CTO de Deep Pit Technology Manager de Ingeniería en Scotiabank Tech Lead en BCP. Ingeniero de Software Senior en startups como Crehana y Fandango.</p>
<div className="flex m-5 justify-center">
  <Image width={150} height={150} className=" rounded-sm" src="https://deepskill.space/img/deepskill-logo.png" alt="logo" />
</div>
</div> */}