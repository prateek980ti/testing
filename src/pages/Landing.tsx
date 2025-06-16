import Section4 from '../components/landing/Section4';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className='max-w-screen bg-black min-h-screen text-white flex flex-col items-center text-center'>
      <Section4 />
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default Landing