import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experiance = () =>{
    const data = [
        {
            image:"",
            Post:"Titre",
            description:"lo lol lol lol lol lol lol",
            
        },
        {
            image:"",
            Post:"titre2",
            description:"lo lol lol lol lol lol lol",
            
        },
        {
            image:"",
            Post:"titre3",
            description:"lo lol lol lol lol lol lol",
            
        },
        {
            image:"",
            Post:"titre4",
            description:"lo lol lol lol lol lol lol",
            
        },
        {
            image:"",
            Post:"titre5",
            description:"lo lol lol lol lol lol lol",
            
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
        <section className="border">
            <h3 className="text-4xl">Expériances</h3>
            <div className="flex justify-center mt-20"> 
                <div className="w-8/12 h-2/5 border">
                <Slider {...settings}>
                    {data.map((d) => (
                    <div className="border w-3/12  h-[500] rounded-xl">
                        <div className="border">
                            <img alt="" src={d.image} className="h-60 w-full"/>
                        </div>
                        <div className="border">
                            <h3 className="text-5xl">{d.Post}</h3>
                            <p>{d.description} </p>
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