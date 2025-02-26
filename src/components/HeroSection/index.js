
import React from "react";
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


const HeroSection = () => {
  

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
