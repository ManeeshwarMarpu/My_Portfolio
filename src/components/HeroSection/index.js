// import React from 'react'
// import HeroBgAnimation from '../HeroBgAnimation'
// import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
// import HeroImg from '../../images/g1.webp'
// import Typewriter from 'typewriter-effect';
// import { Bio } from '../../data/constants';
// import React, { useContext } from "react";
// import { ResumeButton } from "./HeroSectionStyledComponent";
// import { ThemeContext } from "../../contexts/ThemeContext";
// import { FaFileDownload } from "react-icons/fa";

// const HeroSection = () => {
//     return (
//         <div id="about">
//             <HeroContainer>
//                 <HeroBg>
//                     <HeroBgAnimation />
//                 </HeroBg>
//                 <HeroInnerContainer >
//                     <HeroLeftContainer id="Left">
//                         <Title>Hi, I am <br /> {Bio.name}</Title>
//                         <TextLoop>
//                             I am a
//                             <Span>
//                                 <Typewriter
//                                     options={{
//                                         strings: Bio.roles,
//                                         autoStart: true,
//                                         loop: true,
//                                     }}
//                                 />
//                             </Span>
//                         </TextLoop>
//                         <SubTitle>{Bio.description}</SubTitle>
//                         <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
//                     </HeroLeftContainer>

//                     <HeroRightContainer id="Right">

//                         <Img src={HeroImg} alt="hero-image" />
//                     </HeroRightContainer>
//                 </HeroInnerContainer>

//             </HeroContainer>
//         </div>
//     )
// }

// export default HeroSection

import React, { useContext } from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
} from "./HeroStyle";
import { ResumeButton } from "./HeroStyle";
import HeroImg from "../../images/mine.jpeg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaFileDownload } from "react-icons/fa"; // Import icon

const HeroSection = () => {
  const { theme } = useContext(ThemeContext); // Get current theme

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          {/* Left Side */}
          <HeroLeftContainer id="Left">
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>

            {/* Updated Resume Button with Shadow + Icon */}
            <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
      <span style={{ fontSize: "18px", marginRight: "8px" }}>🗎</span>
      View Resume
    </ResumeButton>
          </HeroLeftContainer>

          {/* Right Side */}
          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
