import React from "react";
import Image from "next/image";
import Link from "next/link";
import mrj from "../img/mrj.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="container mx-auto font-mono">
          <h1 className="text-black-200 heroheader mt-10 ml-6 text-3xl mt-24">
            About Me&nbsp;:
          </h1>
          <div className="flex mt-2 mb-4 ml-12 justify-start">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-200 h-200 rounded-full inline-flex items-center justify-center">
                  <Image src={mrj} width="280" height="400" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-lg">
                    D Jaya Shankar
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <div className="flex gap-8">
                    <div>
                      <Link
                        href="https://www.linkedin.com/in/devarapallijayashankarkumar/"
                        passHref
                      >
                        <a>
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-5xl"
                          ></FontAwesomeIcon>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://github.com/jayashankardevarapalli"
                        passHref
                      >
                        <a>
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="text-5xl"
                          ></FontAwesomeIcon>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href="https://twitter.com/MrJayashankar" passHref>
                        <a>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-5xl"
                          ></FontAwesomeIcon>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="mailto:devarapallijayashankarkumar@gmail.com"
                        passHref
                      >
                        <a>
                          <FontAwesomeIcon
                            icon={faGoogle}
                            className="text-5xl"
                          ></FontAwesomeIcon>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-6 mt-2 pt-12 align-center sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-3 mt-24">
                  I am D.Jaya Shankar Kumar, I am currently pursuing my MCA Post
                  Graduartion degree from Gayatri Vidya Parishad College of
                  Engineering, Visakhapatnam. I have pursued my CEH(Certified
                  Ethical Hacker) Certification from EC-Council and I am
                  actively participating in bug bounty programs in Hackerone and
                  intigriti. Currently, I am working on my full stack web
                  developement and machine learning skills.
                </p>
                <div className="flex items-center justify-center mt-12">
                  <Link href="https://jayashankar.in/" passHref>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      My Website
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
