import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import first from '../Assets/Img/first.png'
import second from '../Assets/Img/second.png'
import third from '../Assets/Img/third.png'
import fourth from '../Assets/Img/fourth.png'

const Realisation = () =>{
    const data = [
        {
            image: first,
            Link:"",
            
        },
        {
            image: second,
            Link:"",
            
        },
        {
            image: third, 
            Link:"",
            
        },
        {
            image: fourth,
            Link:"",
            
        },
        {
            image:"",
            Link:"titre5",
            
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
        <section id="real-sect" className=" ">
            <h3 className="text-4xl pt-10">Réalisations & Certifications</h3>
            <div className="flex justify-center mt-10"> 
                <div className="w-8/12 h-2/5 ">
                <Slider {...settings}>
                    {data.map((d) => (
                    <div className="hover:shadow-1xl w-[415] m-5 h-[435] rounded-xl">
                        <div className="">
                            <div className="flex justify-center items-center "style={{ 
                                backgroundImage: `url(${d.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '35vh'
                                }}>
                               <button className=" bg-black hover:shadow-2xl shadow  hover:bg-gray-400 duration-300 h-12 w-6/12"><a href={d.Link} className="text-2xl  text-white">VISUALISATION</a></button> 
                            </div>
                        </div>
                    </div>                
                    ))}  
                </Slider>
                </div>
                     
            </div>
            
        </section>
    )
}

export default Realisation