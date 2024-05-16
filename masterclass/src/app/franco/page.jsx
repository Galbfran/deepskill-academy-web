import CardExpert from "@/components/CardExpert";
import ContainerExpert from "@/components/ContainerExpert";

const PageExpertTech = () => {
    const listLog = [
        "https://deepskill.space/img/deepskill-logo.png",
        "https://deepskill.space/img/deepskill-logo.png",
        "https://deepskill.space/img/deepskill-logo.png",
        "https://deepskill.space/img/deepskill-logo.png",
        "https://deepskill.space/img/deepskill-logo.png",
        "https://deepskill.space/img/deepskill-logo.png",
    ]

    const listExpert = [
        {
            imgProfile: "https://deepskill.space/img/deepskill-about.webp",
            name: "JEAN PIERRE MANDUJANO",
            position: "Software Engineer | Engineering Manager | CTO",
            detail: "Founder & CTO de Deep Pit Technology Manager de Ingeniería en Scotiabank Tech Lead en BCP. Ingeniero de Software Senior en startups como Crehana y Fandango.",
            imgLogo: "https://deepskill.space/img/deepskill-logo.png"
        },
        {
            imgProfile: "https://deepskill.space/img/deepskill-about.webp",
            name: "JEAN PIERRE MANDUJANO",
            position: "Software Engineer | Engineering Manager | CTO",
            detail: "Founder & CTO de Deep Pit Technology Manager de Ingeniería en Scotiabank Tech Lead en BCP. Ingeniero de Software Senior en startups como Crehana y Fandango.",
            imgLogo: "https://deepskill.space/img/deepskill-logo.png"
        },
        
    ]

    return (
        <section className="w-screen h-screen bg-blue-400  flex flex-col justify-between">
            <div className="m-4 h-4/6 flex flex-col">
                <div>
                    <h2 className="text-3xl text-white bold">Expertos tech: Mentores en tu aprendizaje</h2>
                </div>
               <div className="flex flex-row">
                   {
                    listExpert.map((item)=>(
                        <CardExpert index={item.index} imgProfile={item.imgProfile} name={item.name} position={item.position} detail={item.detail} imgLogo={item.imgLogo}/>
                    ))
                   }
               </div>
            </div>
            <div className="bg-deepskillblue h-1/6 w-screen flex flex-col">
                <p className="text-white text-center">Nuestros mentores también lideraron en otras de las empresas más importantes del mundo</p>
                <ContainerExpert listLog={listLog}/>
            </div>
            
        </section>
    )
}

export default PageExpertTech;