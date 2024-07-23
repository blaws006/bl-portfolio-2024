import { Link } from "react-router-dom"
import { faPhone } from "@fortawesome/free-solid-svg-icons" 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {getCurrentYear} from '../utils/DateUtils'


const Footer = () => {
  
  return (
    <footer className=' bg-zinc-950 text-white py-10 text-center sm:flex sm:justify-evenly'>
        <div className='pb-2'>
            &copy; Brandon Lawson {getCurrentYear()}
        </div>
        <div className='pb-2'>
        <FontAwesomeIcon icon={faPhone} />: <Link to='tel: 7035983362'>703-598-3362</Link>
        </div>
        <div><FontAwesomeIcon icon={faEnvelope} />: <Link to='mailto: blaws006@gmail.com'>blaws006@gmail.com</Link></div>
    </footer>
  )
}

export default Footer