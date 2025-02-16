import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className=" flex items-center gap-1.5 text-grey-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 text-red-600">
            Crafting Scalable and Future-Ready Web Solutions
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/files/resume.pdf"
              label="Download CV"
              icon="download"
              className="bg-red-400 hover:bg-red-700 text-white"
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto">
            {/* <img
              src="/images/profile2.png"
              width={656}
              height={800}
              alt="Geeta Hade Profile"
              className="w-full"
            /> */}
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
