import brandon from '../assets/Daniel Headshot v2.png';

const IntroPage = () => {
	return (
		<main className='flex-grow mb-20'>
			<h1 className='text-center my-10 text-3xl font-bold flex-column'>Profile</h1>
			<section className='sm:container sm:flex justify-evenly content-center columns-1 mx-auto'>
				<div className='profileImg'>
					<img src={brandon} className='aspect-square mx-auto' />
				</div>
				<div className='profileDesc text-center sm:text-left'>
					<p>Name: Brandon Lawson</p>
					<p>Occupation: Senior Email Marketing Strategist, Development</p>
					<p>Location: Suffolk, VA, US</p>
					<p>Skills: HTML, CSS, JavaScript, React, Node.js, SQL, MongoDB, Eloqua, Responsys, SFMC, and More</p>
				</div>
			</section>
			<section className='sm:container content-center mx-auto'>
				<h1 className='text-left my-10 text-3xl font-bold'>Introduction</h1>
				<p>Hello World! I&#39;m Brandon Lawson, and I&apos;m a highly-motivated Certified Full Stack Web Developer and Email Marketing Strategist with a passion for problem-solving and analytical thinking. Proficient in front end technologies (HTML, CSS, JavaScript and jQuery), and comfortable with certain backend technologies (Node.js, Express, SQL and NoSQL databases) and seek to apply these skills in building web apps and emails that combine both style and structure. </p>
			</section>
		</main>
	);
};

export default IntroPage;
