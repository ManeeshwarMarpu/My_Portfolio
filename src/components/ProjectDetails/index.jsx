
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";


// 1) Container for the modal overlay
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.65);
  display: flex;
  align-items: flex-start; /* so modal doesn't center vertically, if you prefer top align */
  justify-content: center;
  overflow-y: auto;
  transition: all 0.5s ease;
`;

// 2) Wrapper for the modal content
const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  /* Force modal background to dark, text to white */
  background-color: #111; 
  color: #fff; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// 3) Title block
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

// 4) Date block
const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: #ccc; /* subtle gray for date */
  @media only screen and (max-width: 768px){
      font-size: 12px;
  }
`;

// 5) Description text
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 8px 6px;
  color: #fff;
  @media only screen and (max-width: 600px) {
      font-size: 14px;
      margin: 6px 6px;
  }
`;

// 6) Project Image
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

// 7) Label, for headings like "Members"
const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 8px 6px;
  color: #fff;
  @media only screen and (max-width: 600px) {
      font-size: 16px;
      margin: 8px 6px;
  }
`;

// 8) Tags container
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
      margin: 4px 0px;
  }
`;

// 9) Individual Tag
const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  /* text is white, background is partial purple for contrast */
  background-color: rgba(133,76,230,0.3);
  color: #fff;
  @media only screen and (max-width: 600px) {
      font-size: 12px;
  }
`;

// 10) Members container
const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
      margin: 4px 6px;
  }
`;

// 11) Single member row
const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// 12) Member image
const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
  @media only screen and (max-width: 600px) {
      width: 32px;
      height: 32px;
  }
`;

// 13) Member name
const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: #fff;
  @media only screen and (max-width: 600px) {
      font-size: 14px;
  }
`;

// 14) Group for buttons
const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

// 15) Big purple button with white text
const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #854CE6;
  padding: 14px 18px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;
  &:hover {
    background-color: #6b39c7;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

// 16) The popup message above the button
const Popup = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #854CE6;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);

  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  ${({ show }) => !show && 'transform: translateX(-50%) translateY(10px);'}
`;

// 17) The main modal component
const Index = ({ openModal = {}, setOpenModal }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Safely handle project data
  const project = openModal.project || {};

  // If the modal isn't supposed to show, bail out
  if (!openModal.state) {
    return null;
  }

  // If user clicks "View Code" but there's no link
  const handleGithubClick = (e) => {
    if (!project.github) {
      e.preventDefault();
      setPopupMessage(
        project.title
          ? `The code for "${project.title}" is not yet pushed to GitHub`
          : 'The code is not pushed to GitHub'
      );
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          {/* Always white cross symbol */}
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
              color: '#fff',
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />

          {/* Project image */}
          <Image src={project.image || ''} alt={project.title || 'No project'} />

          <Title>{project.title}</Title>
          <Date>{project.date}</Date>

          <Tags>
            {(project.tags || []).map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </Tags>

          <Desc>{project.description}</Desc>

          {/* Members section */}
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project.member.map((m, idx) => (
                  <Member key={idx}>
                    <MemberImage src={m.img} />
                    <MemberName>{m.name}</MemberName>
                    <a href={m.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <GitHub />
                    </a>
                    <a href={m.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}

          <ButtonGroup>
            {/* Position relative so popup can appear above button */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Button href={project.github || '#'} onClick={handleGithubClick}>
                View Code
              </Button>
              <Popup show={showPopup}>{popupMessage}</Popup>
            </div>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};
Index.propTypes = {
    openModal: PropTypes.object.isRequired,
    setOpenModal: PropTypes.func.isRequired,
  };
  

export default Index;
