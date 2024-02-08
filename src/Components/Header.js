import '../Assets/Css/Styles.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import profil from '../Assets/Img/profile.jpg'
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const slideToRight = (elem, delay, duration) =>{
    gsap.fromTo(
        elem,
        {
            opacity:0,
            x:-5000
        },
        {
            opacity:1,
            x:0,
            duration:1
        }
    )
}


const Header = () => {

    
    useEffect(() =>{
        slideToRight("#circle")
    },[])
   

    return(
        <header id='header' className="flex-row flex justify-end">
            <div id="circle" className='circle  h-3/4 w-6/12 ' style={{ position: 'relative', right: '20px', top: '20px' }}>
                <div id="circle1" className='circle1  bg-white'></div >
                <div id='circle2' className='circle2  ml-20 -mt-36 bg-white'></div > 
                {/* <div className='img-circle  ml-28 -mt-52 bg-white'></div > */}
                <img id='img-circle' className='  ml-28 -mt-52' alt=''src={profil}></img>
                
                <h1 id='name' className='text-white p-5  text-left text-5xl'>Julius KONAN KAN</h1>
                <h3 id="title" className='text-white p-2 pl-5  text-left text-2xl'>Développeur Full-Stack & pentester/tester web junior</h3>
            </div>
        </header>
    )
}


export default Header;