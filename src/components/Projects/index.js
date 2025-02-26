import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import PropTypes from "prop-types";

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Science' ?
            <ToggleButton active value="Data Science" onClick={() => setToggle('Data Science')}>Data Science</ToggleButton>
            :
            <ToggleButton value="Data Science" onClick={() => setToggle('Data Science')}>Data Science</ToggleButton>
          }
          <Divider />
          {toggle === 'DevOps' ?
            <ToggleButton active value="DevOps" onClick={() => setToggle('DevOps')}>DevOps</ToggleButton>
            :
            <ToggleButton value="DevOps" onClick={() => setToggle('DevOps')}>DevOps</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
        {toggle === "all" &&
  projects.map((project) => (
    <ProjectCard 
      key={project.id} // ✅ Add a unique key
      project={project} 
      openModal={openModal} 
      setOpenModal={setOpenModal} 
    />
  ))
}

{projects
  .filter((item) => item.category === toggle)
  .map((project) => (
    <ProjectCard 
      key={project.id} // ✅ Add a unique key
      project={project} 
      openModal={openModal} 
      setOpenModal={setOpenModal} 
    />
  ))
}

        </CardContainer>
      </Wrapper>
    </Container>
  )
}
Projects.propTypes = {
  openModal: PropTypes.object.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Projects