import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Embark<br />
              To Find Your
              <br /><b>Dream Property</b>
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Shop around for the best properties that suit your needs</span>
            <span>We will do our best to help you find the best properties</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={15800} end={17638} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Properties</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={10000} end={23758} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Satisfied Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={35} /> <span>+</span>
              </span>
              <span className="secondaryText">Endorsements</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
