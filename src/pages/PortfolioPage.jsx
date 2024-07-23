import { Link } from 'react-router-dom';
import reactMemoryGame from '../assets/react_game.png';
import prefCenter from '../assets/pref-center.png';
import rge from '../assets/rge.png';

const PortfolioPage = () => {
	return (
		<main className='flex-grow'>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
					<h2 className='text-2xl font-bold tracking-tight text-gray-900'>I&apos;m available for the following services</h2>

					<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8'>
						<Link to='https://blaws006.github.io/react-memory-game/' target='_blank'>
							<div className='group relative'>
								<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
									<img src={reactMemoryGame} alt='React Memory Game' className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
								</div>

								<div className='mt-4 flex justify-between'>
									<div>
										<h3 className='text-sm text-gray-700'>
											<span aria-hidden='true' className='absolute inset-0'></span>
											Building Web Apps
										</h3>
									</div>
								</div>
							</div>
						</Link>
						<Link to='https://engage.build.com/preference-center' target='_blank'>
							<div className='group relative'>
								<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
									<img src={prefCenter} alt='Build.com Preference Center' className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
								</div>
								<div className='mt-4 flex justify-between'>
									<div>
										<h3 className='text-sm text-gray-700'>
											<span aria-hidden='true' className='absolute inset-0'></span>
											Building Landing Pages
										</h3>
									</div>
								</div>
							</div>
						</Link>
						<Link to='https://reallygoodemails.com/emails/dont-get-spooked' target='_blank'>
							<div className='group relative'>
								<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
									<img src={rge} alt="Really Good Emails - Don't Get Spooked" className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
								</div>
								<div className='mt-4 flex justify-between'>
									<div>
										<h3 className='text-sm text-gray-700'>
											<span aria-hidden='true' className='absolute inset-0'></span>
											Building Emails
										</h3>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default PortfolioPage;
