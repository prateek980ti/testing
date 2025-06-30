import { Header } from "../Header";
import { OutlinedButton } from "../utils/OutlinedButton";
import Carousel3D from "../carousel/Carousel3D";

function Section1() {
  const images = [
    { id: 1, src: "/images/Section1_Images/hand ticket.png" },
    { id: 2, src: "/images/Section1_Images/ticket 2.png" },
    { id: 3, src: "/images/Section1_Images/ticket 3.png" },
  ];

  return (
    <div className="pt-4 max-lg:pt-0">
      <div className="w-full min-h-full">
        <div className="pl-4 max-lg:hidden">
          <Header />
        </div>

        <div className="bg-gradient-to-r from-primaryC to-accent w-full p-[2px] min-lg:hidden">
          <div className="bg-black flex justify-between px-4 py-2">
            <div className="flex gap-3.5 justify-center items-center pl-2">
              <img src="src/assets/Icons/Voicera.svg" alt="" />
              <p className="text-md font-bold">Voicera</p>
            </div>
            <button>
              <img src="/src/assets/Icons/menu.svg" alt="hamburger-menu" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center pt-12">
          <p className="text-3xl sm:text-5xl font-bold font-primary">
            NEXT LEVEL
          </p>
          <p className="text-3xl sm:text-5xl font-bold font-primary bg-gradient-to-r from-primaryC to-accent bg-clip-text text-transparent">
            COMMUNICATION
          </p>
          <p className="text-3xl sm:text-5xl font-bold font-primary">
            MADE SIMPLE
          </p>

          <p className="text-base sm:text-xl pt-4 py-1 px-2 font-secondary">
            Empower your team with scalable voice, messaging, and Connectivity
          </p>
          <p className="text-base sm:text-xl px-2 max-w-xl font-secondary">
            APIs — all from a single, developer-first platform
          </p>

          <div className="sm:w-2/3 max-sm:w-2/3 bg-gradient-to-r from-primaryC to-accent h-1.5 rounded-4xl mt-4"></div>

          <OutlinedButton className="mt-4 flex items-center gap-2">
            Start Today
            <img
              src="/src/assets/Icons/click.svg"
              alt="Click icon"
              className="w-5 h-5"
            />
          </OutlinedButton>
        </div>

        <div className="overflow-hidden">
          <Carousel3D images={images} autoplayInterval={4000} />
        </div>
      </div>
    </div>
  );
}

export default Section1;
