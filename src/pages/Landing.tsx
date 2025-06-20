import Section4 from "../components/landing/Section4";
import Footer from "../components/Footer";
import Section2 from "../components/landing/Section-2/Section2";
import Section1 from "../components/landing/Section1";
import Section3 from "../components/landing/Section-3/Section3";
import { InputField,IconStatus,InputSize,InputStatus } from "../components/utils/InputField";

const Landing = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-center text-white bg-black max-w-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <InputField
        label="Username"
        hint="Enter your name"
        iconStatus={IconStatus.CLOSE}
        status ={InputStatus.DEFAULT}
        size={InputSize.MD}
        counter={{ max: 20 }}
      />

      <div className="w-[80vw]">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
