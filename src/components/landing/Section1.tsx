import { Header } from "../Header";
import { OutlinedButton } from "../utils/OutlinedButton";
import Carousel3D from "../carousel/Carousel3D";

function Section1() {
  const images = [
    { id: 1, src: '/images/Section1_Images/hand ticket.png' },
    { id: 2, src: '/images/Section1_Images/ticket 2.png' },
    { id: 3, src: '/images/Section1_Images/ticket 3.png' },
  ];

  return (
    <div className="px-4 pt-4 font-primary">
      <div className="w-full min-h-screen">
        <div className="pl-4 max-sm:hidden">
          <Header />
        </div>

        <div className="flex flex-col items-center text-center pt-12">
          <p className="text-3xl sm:text-5xl font-bold">NEXT LEVEL</p>
          <p className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-primaryC to-accent bg-clip-text text-transparent">
            COMMUNICATION
          </p>
          <p className="text-3xl sm:text-5xl font-bold">MADE SIMPLE</p>

          <p className="text-base sm:text-xl pt-4 px-2 max-w-xl">
            Empower your team with scalable voice, messaging, and
          </p>
          <p className="text-base sm:text-xl px-2 max-w-xl">
            connectivity APIs — all from a single, developer-first platform
          </p>

          <div className="w-full sm:w-2/3 bg-gradient-to-r from-primaryC to-accent h-1.5 rounded-4xl mt-4"></div>

          <OutlinedButton className="mt-4 flex items-center gap-2">
            Start Today
            <img src="/src/assets/Icons/click.svg" alt="Click icon" className="w-5 h-5" />
          </OutlinedButton>
        </div>

        <div className="mt-10 overflow-hidden">
          <Carousel3D images={images} autoplayInterval={4000} />
        </div>
      </div>
    </div>
  );
}

export default Section1;
