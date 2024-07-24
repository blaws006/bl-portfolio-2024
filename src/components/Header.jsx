import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
	return (
		<div className='bg-zinc-950 text-center sm:columns-3 py-2'>
			<div className='text-white font-bold py-2'>Brandon Lawson: Developer</div>
			<nav className='columns-3 py-2'>
				<div className='text-white'>
					<Link to='/bl-portfolio-2024/'>About</Link>
				</div>
				<div className='text-white'>
					<Link to='/bl-portfolio-2024/portfolio'>Portfolio</Link>
				</div>
				<div className='text-white'>
					<Link to='/bl-portfolio-2024/contact'>Contact</Link>
				</div>
			</nav>
			<div className='social columns-4 flex justify-evenly py-2'>
				<Link to='https://www.linkedin.com/in/blawson1/' target='_blank'>
					<FontAwesomeIcon icon={faLinkedin} size='2x' color='white' />
				</Link>
				<Link to='https://github.com/blaws006' target='_blank'>
					<FontAwesomeIcon icon={faGithub} size='2x' color='white' />
				</Link>
				<Link to='https://twitter.com/B_Law703' target='_blank'>
					<FontAwesomeIcon icon={faXTwitter} size='2x' color='white' />
				</Link>
				<Link to='https://www.facebook.com/brandon.b.lawson' target='_blank'>
					<FontAwesomeIcon icon={faFacebook} size='2x' color='white' />
				</Link>
			</div>
		</div>
	);
};

export default Header;
