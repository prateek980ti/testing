import Section4 from '../components/landing/Section4';
import Footer from '../components/Footer';
import Section2 from '../components/landing/Section-2/Section2';

const Landing = () => {
  return (
    <div className='flex flex-col items-center min-h-screen text-center text-white bg-black max-w-screen'>
      <Section2/>
      <Section4 />
      <div className='w-[80vw]'>
        <Footer />
      </div>
    </div>
  )
}

export default Landing