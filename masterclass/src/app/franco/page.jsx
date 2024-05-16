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
                        imgProfile={"https://deepskill.space/img/deepskill-about.webp"} 
                        name={"JEAN PIERRE MANDUJANO"} 
                        position={"Software Engineer | Engineering Manager | CTO"} 
                        detail={"Founder & CTO de Deep Pit Technology Manager de Ingeniería en Scotiabank Tech Lead en BCP. Ingeniero de Software Senior en startups como Crehana y Fandango."} 
                        imgLogo={"https://deepskill.space/img/deepskill-logo.png"}
                    />
                     <CardExpert 
                        index={1}
                        imgProfile={"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"} 
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