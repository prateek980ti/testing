import Section4 from "../components/landing/Section4";
import Footer from "../components/Footer";
import Section2 from "../components/landing/Section-2/Section2";
import Section1 from "../components/landing/Section1";
import Section3 from "../components/landing/Section-3/Section3";
import {
  InputField,
  InputStatus,
  InputSize,
  InputType,
  IconStatus,
} from "../components/utils/InputField";

const Landing = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-center text-white bg-black max-w-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <InputField
        label="Email Address"
        hint="We'll never share your email."
        iconStatus={IconStatus.CLOSE}
        size={InputSize.MD}
        status={InputStatus.DEFAULT}
        counter={{ max: 30 }}
        onChange={() => console.log("Input changed")}
        disabled={false}
        className="mt-4 bg-white text-black"
        placeholder="you@example.com"
        type={InputType.PASSWORD}
      />

      <div className="w-[80vw]">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
