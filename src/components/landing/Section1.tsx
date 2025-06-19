import { Header } from "../Header";
import { OutlinedButton } from "../utils/OutlinedButton";
import Carousel3D from "../carousel/Carousel3D";

function Section1() {
  const images = [
    {
      id: 1,
      src: '/images/Section1_Images/hand ticket.png',
    },
    {
      id: 2,
      src: '/images/Section1_Images/ticket 2.png',
    },
    {
      id: 3,
      src: '/images/Section1_Images/ticket 3.png',
    },
    // {
    //   id: 4,
    //   src: '/images/Section1_Images/hand ticket.png',
    // },
    // {
    //   id: 5,
    //   src: '/images/Section1_Images/hand ticket.png',
    // }
  ];
  return (
    <div className="px-2 pt-6">
      <div className='w-[96vw] h-[142vh] bg-[url("src/assets/Icons/folder.png")] bg-no-repeat bg-cover'>
        <div className="pt-9 pl-8">
          <Header />
        </div>
        <div className="flex flex-col items-center pt-13">
          <p className="text-5xl/tight font-bold">NEXT LEVEL</p>
          <p className="text-5xl/tight font-bold bg-gradient-to-r from-primaryC to-accent bg-clip-text text-transparent">
            COMMUNICATION
          </p>
          <p className="text-5xl/tight font-bold">MADE SIMPLE</p>
          <p className="text-2xl pt-3">
            Empower your team with scalable voice, messaging, and{" "}
          </p>
          <p className="text-2xl">
            connectivity APIs — all from a single, developer-first platform
          </p>
          <div className="w-[55%] bg-gradient-to-r from-primaryC to-accent h-1.5 rounded-4xl mt-4"></div>
          <OutlinedButton className="mt-3">Start Today <img src="src/assets/Icons/click.svg" alt="" /></OutlinedButton>
        </div>
        {/* <div className="flex gap-15 justify-center pt-10">
          <img src="src/assets/Icons/Header Carousal/photo1.svg" alt="" className="w-auto h-98"/>
          <img src="src/assets/Icons/Header Carousal/photo2.svg" alt="" className="w-auto h-98"/>
          <img src="src/assets/Icons/Header Carousal/photo3.svg" alt="" className="w-auto h-98"/>
        </div> */}
       <Carousel3D 
        images={images} 
        autoplayInterval={4000}
      />
      </div>
    </div>

  );
}

export default Section1;
