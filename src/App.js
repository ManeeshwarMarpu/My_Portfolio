import { ThemeProvider } from "styled-components";
import { useContext, useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certificates";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext"; 
import React from "react";


// ✅ Ensures content is pushed below fixed navbar
const PageContent = styled.div`
  margin-top: 90px;  /* ✅ Prevents overlapping */
`;

// ✅ Theme Background
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

// ✅ Section Styling
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const { theme } = useContext(ThemeContext);  // ✅ Get Theme from Context
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}> {/* ✅ Dynamic Theme */}
      <Router>
        <Navbar />
        <PageContent>  {/* ✅ Push Content Below Navbar */}
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Certifications />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
          </Body>
        </PageContent>
      </Router>
    </ThemeProvider>
  );
}

export default App;
