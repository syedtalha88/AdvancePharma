// src/App.js
import styled from 'styled-components';
import mainImage from "./assets/pic1.jpg"; // Add main image path
import overlayImage from './assets/pic1.jpg'; // Add overlay image path

const OurTrust = () => {
  return (
    <Container>
      <Content>
        <Header>Welcome to Dental Centrum Nordwest</Header>
        <Title>Bringing Comfort & to the Dentist Chair</Title>
        <Line />
        <Text>
          Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </Text>
        <List>
          <li> Sunt in culpa qui officia deserunt mollit anim id est laborum</li>
          <li> Sed ut perspiciatis unde omnis iste natus error</li>
          <li> Totam rem aperiam, eaque ipsa quae ab illo inventore</li>
        </List>
        <Button>Termin buchen ➜</Button>
      </Content>
      <ImageContainer>
        <MainImage src={mainImage} alt="Main" />
        <OverlayImage src={overlayImage} alt="Overlay" />
      </ImageContainer>
    </Container>
  );
};

export default OurTrust;

// Styled Components
const Container = styled.div`
  display: flex;
  margin-top: 60px;
  align-items: center;
  justify-content: space-between;
  background-color: #3d4b70; /* Background color matching your image */
  padding: 50px;
  color: #ffffff;
`;

const Content = styled.div`
  max-width: 50%;
  color: #ffffff;
`;

const Header = styled.h5`
  color: #f5bd41;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const Line = styled.div`
  width: 50px;
  height: 3px;
  background-color: #f5bd41;
  margin: 20px 0;
`;

const Text = styled.p`
  color: #d3d7e0;
  line-height: 1.6;
`;

const List = styled.ul`
  color: #d3d7e0;
  list-style-type: none;
  padding: 0;
  li {
    margin: 8px 0;
    position: relative;
    padding-left: 20px;
    &:before {
      content: '•';
      color: #f5bd41;
      position: absolute;
      left: 0;
    }
  }
`;

const Button = styled.button`
  background-color: #003161;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1em;
  &:hover {
    background-color: #006a67;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const OverlayImage = styled.img`
  position: absolute;
  bottom: -20px;
  left: 10%;
  width: 35%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;
