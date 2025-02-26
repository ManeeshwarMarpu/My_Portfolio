 
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
 
const floatUp = keyframes`
  0% {
    transform: translateY(100vh) scale(0.5);
    opacity: 0;
  }
  30% {
    opacity: 0.6;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateY(-120px) scale(1.5);
    opacity: 0;
  }
`;

/* 
   2) Container for the animated bubbles 
   - big height to ensure they float from bottom to top
*/
const BubblesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh; /* big so you see them floating up for a while */
  overflow: hidden;
  z-index: 0; /* behind your timeline content */
`;

/*
   3) Each bubble has a bright pink color. 
   For dark theme -> near-magenta with 0.4 alpha
   For light theme -> near-magenta with 0.2 alpha 
   => Very visible on both themes
*/
const Bubble = styled.div`
  position: absolute;
  bottom: -120px; /* start well below the visible area */
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  opacity: 0;

  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(255, 0, 255, 0.4)'
      : 'rgba(255, 0, 255, 0.2)'};

  animation: ${floatUp} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

/* 4) Your original container code, made position: relative */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

/* 5) Main Experience component */
const Experience = () => {
  // Generate 30 large, bright bubbles with random positions & speeds
  const bubbles = Array.from({ length: 30 }, (_, i) => {
    const left = Math.floor(Math.random() * 101);    // horizontal position: 0-100%
    const size = Math.floor(Math.random() * 60) + 60; // bubble size: 60-120px
    const duration = Math.random() * 8 + 5;          // float speed: 5-13s
    const delay = Math.random() * 3;                 // start delay: 0-3s
    return { left, size, duration, delay, key: i };
  });

  return (
    <Container id="experience">
      {/* 6) Bubbles behind the content */}
      <BubblesBackground>
        {bubbles.map(({ left, size, duration, delay, key }) => (
          <Bubble
            key={key}
            left={left}
            size={size}
            duration={duration}
            delay={delay}
          />
        ))}
      </BubblesBackground>

      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a software engineer and working on different companies and projects.
        </Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
