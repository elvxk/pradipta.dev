import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaDribbble,
  FaFacebook,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-5 lg:px-[20vh] py-20">
      <div className="flex flex-col items-center">
        <h2
          className="font-blinker text-ccyan text-3xl font-bold pb-6"
          data-aos="fade-up"
        >
          Social
        </h2>
        <p
          data-aos="fade-up"
          className="font-blinker text-cdark dark:text-cwhite text-center justify-center items-center my-1 text-lg"
        >
          The blog I use to write articles
        </p>

        <a
          href="https://word.sandri.my.id"
          target="_blank"
          data-aos="zoom-in"
          className="flex flex-wrap gap-5 justify-center items-center text-xl text-cdark dark:text-cwhite hover:text-cpink transition-all dark:hover:text-ccyan mb-6 font-bold"
        >
          word.sandri.my.id
        </a>

        <p
          data-aos="fade-up"
          className="font-blinker text-cdark dark:text-cwhite text-center justify-center items-center my-1 text-lg"
        >
          Some tools programs that I made
        </p>

        <a
          href="https://tools.pradipta.dev"
          target="_blank"
          data-aos="zoom-in"
          className="flex flex-wrap gap-5 justify-center items-center text-xl text-cdark dark:text-cwhite hover:text-cpink transition-all dark:hover:text-ccyan mb-6 font-bold"
        >
          tools.pradipta.dev
        </a>

        <p
          data-aos="fade-up"
          className="font-blinker text-cdark dark:text-cwhite text-center justify-center items-center my-1 mb-6 text-lg"
        >
          find me on the following social media
        </p>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap gap-5 justify-center items-center text-2xl text-cdark dark:text-cwhite"
        >
          <a
            href="https://instagram.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/xelvxkx"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://dribbble.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
            rel="noreferrer"
          >
            <FaDribbble />
          </a>
          <a
            href="https://github.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
