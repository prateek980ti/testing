import Carousel from "./Carousel";
const TestimonialsArray =[
  {
    id: 1,
    name: "David Patel",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor discovered the undoubtable source."
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Product Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance."
  }
]
function Testimonials() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4 py-8">
      {/* Hexagon SVG positioned above the heading */}
      <div className="w-full flex relative justify-center ">
        <img
          src="/images/section3/hexagon.svg"
          alt="Hexagon decoration"
          className="w-[60%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] h-auto opacity-80"
        />

        {/* Section Header - Overlaid on hexagon */}
        <div className="flex absolute inset-0 items-center justify-center flex-col text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            What People Say
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto leading-relaxed px-2">
            Empower your team with scalable voice, messaging, and connectivity
            APIs — all from a single, developer-first platform
          </p>
        </div>
      </div>

      {/* Carousel Component */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-2 sm:px-4">
        <Carousel
          testimonials={TestimonialsArray}
          autoPlay={true}
          autoPlayInterval={3000}
        />
      </div>
    </div>
  );
}

export default Testimonials;
