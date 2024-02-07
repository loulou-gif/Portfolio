import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import simplon from '../Assets/Img/simplon.jpeg'

const Experiance = () =>{
    const data = [
        {
            image: simplon,
            Post:"Titre",
            description:"Où j’ai été stagiaire et travailler sur divers projet blablablablabla lol lol lol lol lol lol lol lol lol lolol lol lol lol lol lol lol lol lol lol lol lol",
            
        },
        {
            image:simplon,
            Post:"titre2",
            description:"Où j’ai été stagiaire et travailler sur divers projet blablablablabla lol lol lol lol lol lol lol lol lol lolol lol lol lol lol lol lol lol lol lol lol lol",
            
        },
        {
            image:simplon,
            Post:"titre3",
            description:"Où j’ai été stagiaire et travailler sur divers projet blablablablabla lol lol lol lol lol lol lol lol lol lolol lol lol lol lol lol lol lol lol lol lol lol",
            
        },
        {
            image:simplon,
            Post:"titre4",
            description:"Où j’ai été stagiaire et travailler sur divers projet blablablablabla lol lol lol lol lol lol lol lol lol lolol lol lol lol lol lol lol lol lol lol lol lol",
            
        },
        {
            image:simplon,
            Post:"titre5",
            description:"Où j’ai été stagiaire et travailler sur divers projet blablablablabla lol lol lol lol lol lol lol lol lol lolol lol lol lol lol lol lol lol lol lol lol lol",
            
        },
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(
        <section id="exp-sect" className="">
            <h3 className="text-4xl">Expériances</h3>
            <div className="flex justify-center mt-20"> 
                <div className="w-8/12 h-2/5 ">
                <Slider {...settings}>
                    {data.map((d) => (
                    <div className=" w-[232] border  h-[485] rounded-xl">
                        <div className="">
                            <img alt="" src={d.image} className="h-[232] w-[415]"/>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-3/5"><h3 className="text-3xl">{d.Post}</h3>
                            <p className="text-2xl">{d.description} </p></div>
                        </div>
                    </div>                
                    ))}  
                </Slider>
                </div>
                     
            </div>
            
        </section>
    )
}

export default Experiance