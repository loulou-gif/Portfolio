import '../Assets/Css/Styles.css'
import profile from '../Assets/Img/profile.jpg'

const Biographie = () =>{
    return(
        <section className='section1 flex justify-center mt-16'>
            <div className="bio  mt-10 p-20 flex w-11/12">
                <div className='w-6/12 flex-col h-full '>
                    <h2 className='text-black w-7/12 ml-20 text-left text-5xl p-5'>BIOGRAPHIE</h2>
                    <p className=' text-3xl w-8/12 ml-20 p-5 text-start'>Je suis un fervent passionné de l'informatique et je suis constamment à la recherche de défis technologiques plus ambitieux afin d'acquérir des compétences solides dans mes domaines de prédilection, à savoir le développement et l'éthique du hacking ainsi que les tests logiciels.<br/><br/> Dans cette perspective, j'ai entrepris la réalisation de divers projets, tant en tant que travailleur indépendant que pour des clients et des partenaires.<br/><br/> Je suis prêt à collaborer avec vous sur vos projets, en m'adaptant aux détails spécifiques de la mission.</p>
                </div>
                <div className='w-6/12 h-full flex-col '>
                    <img className='section-img h-full  w-7/12 ml-20 text-left text-5xl p-5' alt='' src={profile} />
                    <h3 className='text-black text-3xl w-7/12 ml-20 p-4 text-start'>Julius KONAN KAN</h3>
                    <p className=' text-xl w-7/12 ml-20 p-2 text-start'>Développeur Full-Stack & pentester/tester web junior</p>
                </div>
            </div>
        </section>
    )
}

export default Biographie