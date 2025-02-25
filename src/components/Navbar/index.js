import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Nav, NavbarContainer, NavLink, NavItems, GitHubButton, NavLogo } from './NavbarStyledComponent';
import { DiCssdeck } from "react-icons/di";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// Import sound effect
import clickSound from "../../assets/sounds/click.mp3"; 
const playClickSound = () => {
  const audio = new Audio(clickSound);
  audio.play();
};

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Nav>
      <NavbarContainer>
        {/* ✅ Clicking Portfolio Logo toggles theme with effect */}
        <NavLogo onClick={toggleTheme} style={{ cursor: "pointer", transition: "0.3s ease-in-out" }}>
          {theme === "dark" ? <FaSun size="24px" color="white" /> : <FaMoon size="24px" color="black" />}
          <span>Portfolio</span> {/* ✅ Ensure text remains visible */}
        </NavLogo>

        <NavItems>
          <NavLink href="#about" onClick= {playClickSound}>About</NavLink>
          <NavLink href="#skills" onClick= {playClickSound}>Skills</NavLink>
          <NavLink href="#experience" onClick= {playClickSound}>Experience</NavLink>
          <NavLink href="#projects" onClick= {playClickSound}>Projects</NavLink>
          <NavLink href="#education" onClick= {playClickSound}>Education</NavLink>
          <NavLink href="#certifications" onClick= {playClickSound}>Certifications</NavLink>
        </NavItems>

        <GitHubButton href="https://github.com/ManeeshwarMarpu" target="_blank" onClick={playClickSound}>
  <FaGithub size={18} style={{ marginRight: "8px" }} /> 
  Github
</GitHubButton>

      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
