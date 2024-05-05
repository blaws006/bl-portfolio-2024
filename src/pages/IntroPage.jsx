import brandon from '../assets/Daniel Headshot v2.png'

const IntroPage = () => {
  return (
    <main>
      <h1 className='text-center my-10 text-3xl font-bold flex-column'>Profile</h1>
      <section className='sm:container sm:flex justify-evenly content-center columns-1 mx-auto'>
        <div className='profileImg'>
          <img src={brandon} className='aspect-square mx-auto' />
        </div>
        <div className='profileDesc text-center sm:text-left'>
            <p>Name: Brandon Lawson</p>
        </div>
      </section>
     
    </main>
  )
}

export default IntroPage