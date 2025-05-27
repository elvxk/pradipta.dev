import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { RandomReveal } from "react-random-reveal";
import metal from "@/assets/parallax/metal.webp";
import hero from "@/assets/parallax/hero.webp";

const Hero = () => {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current);
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, []);
  return (
    <section id="home" ref={sceneEl} className="h-screen overflow-hidden">
      <div data-depth="0.1" className="relative h-full w-full">
        <div className="bg_parallax absolute w-[151%] h-[110%] -top-20 -left-20 opacity-[40%] dark:opacity-[5%]" />
      </div>
      <div data-depth="0.1" className="relative h-full w-full">
        <div
          data-aos="zoom-out"
          className="absolute w-[121%] h-[120%] -top-20 -left-20"
        >
          <div className="doodle absolute w-[121%] h-[120%] -top-20 -left-20 opacity-[75%] dark:opacity-[40%]" />
        </div>
      </div>
      <div data-depth="0.2" className="relative h-full w-full">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="relative h-full w-full"
        >
          <img
            draggable={false}
            // src="../assets/parallax/metal.webp"
            src={metal.src}
            alt="PRS logo metal"
            className="h-[361px] aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:h-[720px]"
          />
        </div>
      </div>
      <div data-depth="0.3" className="relative h-full w-full ">
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="absolute top-19 md:top-20 flex justify-center items-center w-full"
        >
          <h2 className="font-squada text-cwhite">
            <span className="bg-cpink px-3 text-3xl border-4">
              HII, IT{"'"}S
            </span>
            <br />
            <span className="bg-cpink px-3 text-4xl lg:text-6xl border-4">
              {/* PRADIPTA R. SANDRI */}
              <RandomReveal
                isPlaying
                revealDuration={0.5}
                duration={2}
                characters={[
                  "P",
                  "R",
                  "A",
                  "D",
                  "I",
                  "P",
                  "T",
                  "A",
                  " ",
                  "R.",
                  " ",
                  "S",
                  "A",
                  "N",
                  "D",
                  "R",
                  "I",
                ]}
                characterSet={["*"]}
              />
            </span>

            <div>
              <br></br>
            </div>
            <span
              data-aos="fade-up"
              data-aos-delay="1000"
              className="bg-ccyan px-3 text-lg lg:text-xl font-blinker py-2 border-4"
            >
              I am a{" "}
              <Typewriter
                words={[
                  "Web Developer",
                  "Frontend Developer",
                  "Music Producer",
                ]}
                loop={true}
                cursor
              />
            </span>
          </h2>
        </div>
      </div>
      <div data-depth="0.5" className="relative h-full w-full ">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative h-full w-full "
        >
          <img
            draggable={false}
            src={hero.src}
            alt="HERO"
            className="absolute -bottom-28 md:-bottom-20 left-1/2 -translate-x-1/2 aspect-auto h-[640px] lg:h-[720px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
