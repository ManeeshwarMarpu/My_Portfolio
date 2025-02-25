// import React from "react";
// import styled from "styled-components";
// import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
// import { certifications } from "../../data/constants";
// import { useTheme } from "styled-components";

// // Main Container
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 60px 0px 100px 0px;
//   background-color: ${({ theme }) => theme.bg}; /* Dynamic background */
// `;

// const Title = styled.div`
//   font-size: 38px;
//   text-align: center;
//   font-weight: 600;
//   margin-bottom: 20px;
//   color: ${({ theme }) => theme.text_primary}; /* Dynamic text color */
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 700px;
//   color: ${({ theme }) => theme.text_secondary}; /* Dynamic text color */
//   margin-bottom: 50px;
// `;

// // Timeline Wrapper
// const TimelineWrapper = styled.div`
//   width: 80%;
//   max-width: 1000px;
// `;

// // Styled Box for Certification Cards
// const StyledBox = styled.div`
//   background: ${({ theme }) => theme.card_light};  /* Dynamic card background */
//   padding: 20px;
//   border-radius: 12px;
//   color: ${({ theme }) => theme.text_primary}; /* Dynamic text color */
//   border: 1px solid ${({ theme }) => theme.border};  /* Dynamic border */
//   box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.05);
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.03);
//     box-shadow: 0px 10px 20px ${({ theme }) => theme.primary + "30"}; /* Subtle theme-based glow */
//   }
// `;

// const Certifications = () => {
//   const theme = useTheme(); // Get current theme

//   return (
//     <Container id="certifications">
//       <Title>Certifications</Title>
//       <Desc>Here are some of the certifications I have earned over the years.</Desc>
//       <TimelineWrapper>
//         <Timeline position="alternate">
//           {certifications.map((cert, index) => (
//             <TimelineItem key={index}>
//               <TimelineSeparator>
//                 <TimelineDot variant="outlined" style={{ borderColor: theme.primary }} />
//                 {index !== certifications.length - 1 && <TimelineConnector style={{ backgroundColor: theme.primary }} />}
//               </TimelineSeparator>
//               <TimelineContent>
//                 <StyledBox>
//                   <img src={cert.img} alt={cert.title} style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
//                   <h3 style={{ marginBottom: "5px" }}>{cert.title}</h3>
//                   <p style={{ fontSize: "14px", color: theme.text_secondary }}>
//                     {cert.organization} - {cert.date}
//                   </p>
//                   <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary, textDecoration: "none", fontWeight: "bold" }}>
//                     View Certification →
//                   </a>
//                 </StyledBox>
//               </TimelineContent>
//             </TimelineItem>
//           ))}
//         </Timeline>
//       </TimelineWrapper>
//     </Container>
//   );
// };

// export default Certifications;
import React, { useContext } from "react";
import styled from "styled-components";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { certifications } from "../../data/constants";
import { ThemeContext } from "../../contexts/ThemeContext";

// Main Container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0px 100px 0px;
  background: ${({ theme }) => (theme === "dark" ? "#121212" : "linear-gradient(to bottom, #E6E6FA, #F8F8FF)")};
  transition: background 0.3s ease-in-out;
`;

const Title = styled.div`
  font-size: 38px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  transition: color 0.3s ease-in-out;
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => (theme === "dark" ? "#b3b3b3" : "#555")};
  margin-bottom: 50px;
  transition: color 0.3s ease-in-out;
`;

// Timeline Wrapper
const TimelineWrapper = styled.div`
  width: 80%;
  max-width: 1000px;
`;

// Styled Box for Certification Cards
const StyledBox = styled.div`
  background: ${({ theme }) => (theme === "dark" ? "#1a1a1a" : "#ffffff")};  
  padding: 20px;
  border-radius: 12px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "#333")};
  border: ${({ theme }) => (theme === "dark" ? "1px solid #333" : "1px solid #ddd")};  
  box-shadow: ${({ theme }) =>
    theme === "dark"
      ? "0px 4px 10px rgba(255, 255, 255, 0.05)"
      : "0px 4px 10px rgba(0, 0, 0, 0.1)"};  
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) =>
      theme === "dark"
        ? "0px 10px 20px rgba(133, 76, 230, 0.3)"
        : "0px 10px 20px rgba(0, 0, 0, 0.2)"};
  }
`;

const Certifications = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container id="certifications" theme={theme}>
      <Title theme={theme}>Certifications</Title>
      <Desc theme={theme}>
        Here are some of the certifications I have earned over the years.
      </Desc>
      <TimelineWrapper>
        <Timeline position="alternate">
          {certifications.map((cert, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== certifications.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <StyledBox theme={theme}>
                  <img
                    src={cert.img}
                    alt={cert.title}
                    style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                  <h3 style={{ marginBottom: "5px" }}>{cert.title}</h3>
                  <p style={{ fontSize: "14px", color: theme === "dark" ? "#b3b3b3" : "#666" }}>
                    {cert.organization} - {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === "dark" ? "#854CE6" : "#0066CC",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    View Certification →
                  </a>
                </StyledBox>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineWrapper>
    </Container>
  );
};

export default Certifications;
