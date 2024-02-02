import '../Assets/Css/Styles.css'
const NavBar = () => {
    return(
        <nav>
            <ul className='flex bg-white '>
                <li className=''>Biographie</li>
                <li className=''>Compétences</li>
                <li className=''>Expériences</li>
                <li className=''>Réalisations</li>
            </ul>
        </nav>
    )
}

export default NavBar;