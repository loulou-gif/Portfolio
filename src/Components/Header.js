import '../Assets/Css/Styles.css'
import profil from '../Assets/Img/profile.jpg'
const Header = () => {
    return(
        <header className="flex-row flex justify-end">
            <div className='circle  h-3/4 w-6/12'>
                <div className='circle1  bg-white'></div >
                <div className='circle2  ml-20 -mt-36 bg-white'></div >
                {/* <div className='img-circle  ml-28 -mt-52 bg-white'></div > */}
                <img className='img-circle  ml-28 -mt-52' alt=''src={profil}></img>
                
                <h1 className='text-white p-5  text-left text-5xl'>Julius KONAN KAN</h1>
                <h3 className='text-white p-2 pl-5  text-left text-2xl'>Développeur Full-Stack & pentester/tester web junior</h3>
            </div>
        </header>
    )
}


export default Header;