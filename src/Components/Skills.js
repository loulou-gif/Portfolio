import '../Assets/Css/Styles.css'
import {skillsContent} from '../Data/SkillsContent'
const Skills = () => {
    const competances = skillsContent.map((competance) =>(
    <div id='content-box' className=' w-6/12 mt-10 flex p-10 bg-gray-100'>
        <div className='m-5 text-7xl'>{competance.icone}</div>
        
        <div id='skill' className='skill text-left w-8/12'>
            <div id='box-text' className=' text-3xl'>{competance.name}</div>
            <ul>
                <li className='tex-3xl ml-10 text-gray-500'>{competance.skill1}</li>
                <li className='tex-3xl ml-10 text-gray-500'>{competance.skill2}</li>
                <li className='tex-3xl ml-10 text-gray-500'>{competance.skill3}</li>
                <li className='tex-3xl ml-10 text-gray-500'>{competance.skill4}</li>
                <li className='tex-3xl ml-10 text-gray-500'>{competance.skill5}</li>
            </ul>
        </div>
    </div>
    ))
    return(
        <section id="skills" className=" lg:flex lg:justify-center mt-10">
            <div id='box-skill' className=' lg:flex lg:justify-evenly mt-20 flex-row w-10/12'>
                {competances}
            </div>
                
        </section>
    )
}

export default Skills