import '../Assets/Css/Styles.css'
const NavBar = () => {
    return(
        <nav className='navBar w-full'> 
            <ul className='flex justify-around w-2/4 '>
                <li className=''>Biographie</li>
                <li className=''>Compétences</li>
                <li className=''>Expériences</li>
                <li className=''>Réalisations</li>
            </ul>
        </nav>
    )
}

export default NavBar;