// src/App.js
import styled, { keyframes } from 'styled-components';
import { FaTooth, FaMoneyCheckAlt, FaUserFriends, FaLaptopMedical } from 'react-icons/fa'; // Example icons

const Experience = () => {
  return (
    <Container>
      <Header>What Makes Us Different</Header>
      <Title>Experience Our Unique Approach</Title>
      <Line />
      <CardContainer>
        <Card>
          <IconWrapper>
            <FaTooth />
          </IconWrapper>
          <CardTitle>Proactive Prevention</CardTitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
        </Card>
        <Card>
          <IconWrapper>
            <FaMoneyCheckAlt />
          </IconWrapper>
          <CardTitle>Payment Plans</CardTitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Description>
        </Card>
        <Card>
          <IconWrapper>
            <FaUserFriends />
          </IconWrapper>
          <CardTitle>Welcoming New Patients</CardTitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
        </Card>
        <Card>
          <IconWrapper>
            <FaLaptopMedical />
          </IconWrapper>
          <CardTitle>30+ Combined Years Experience</CardTitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
        </Card>
      </CardContainer>
      <ActionButton>Termin buchen ➜</ActionButton>
    </Container>
  );
};

export default Experience;

// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f9f4ed;
  color: #3d4b70;
`;

const Header = styled.h5`
  color: #f5bd41;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
  animation: ${fadeIn} 1s ease;
`;

const Title = styled.h2`
  font-size: 2em;
  margin: 0;
  color: #3d4b70;
  animation: ${fadeIn} 1.2s ease;
`;

const Line = styled.div`
  width: 60px;
  height: 3px;
  background-color: #f5bd41;
  margin: 20px auto;
  animation: ${fadeIn} 1.4s ease;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Card = styled.div`
  background-color: #ffffff;
  width: 200px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 2em;
  color: #f5bd41;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.2em;
  color: #3d4b70;
  font-weight: 600;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #6c757d;
  margin: 0;
`;

const ActionButton = styled.button`
  background-color: #003161;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: ${fadeIn} 1.6s ease;

  &:hover {
    background-color: #006a67;
    transform: scale(1.05);
  }
`;
