// HeroSection.js
import styled from 'styled-components';
import mainImage from './assets/pic2.jpg'; // replace with your main image path
import overlayImage from './assets/pic1.jpg'; // replace with overlay image path
const HeroSection = () => {
    return (
      <HeroContainer>
        <TextContent>
          <Subtitle>Welcome to Dental Centrum Nordwest</Subtitle>
          <Title>Where Everyone Walks Out with a Great Smile</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Description>
          <ServiceSelector>
            <select>
              <option>Select a Service</option>
              {/* Additional options */}
            </select>
            <BookButton>Book an Appointment</BookButton>
          </ServiceSelector>
        </TextContent>
        <ImageWrapper>
          <BackgroundShape />
          <MainImage src={mainImage} alt="Main Hero" />
          <OverlayImage src={overlayImage} alt="Overlay" />
        </ImageWrapper>
      </HeroContainer>
    );
  };
  
  export default HeroSection;
  
  // Styled Components
  
  const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
  
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  `;
  
  const TextContent = styled.div`
    flex: 1;
    padding: 1rem;
    width:30%;
  `;
  
  const Subtitle = styled.h2`
    font-size: 1rem;
    color: #006A67;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  `;
  
  const Title = styled.h1`
    font-size: 2rem;
    color: #000B58;
    margin-bottom: 1rem;
  
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  `;
  
  const Description = styled.p`
    font-size: 1rem;
    color: #333;
    margin-bottom: 1.5rem;
  `;
  
  const ServiceSelector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    select, button {
      padding: 0.8rem;
      font-size: 1rem;
      margin: 0.5rem 0;
      border-radius: 8px;
      border: none;
    }
  
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
  
      select {
        margin-right: 1rem;
      }
    }
  `;
  
  const BookButton = styled.button`
    background-color: #003161;
    color: white;
    cursor: pointer;
  `;
  
  const ImageWrapper = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  
    @media (min-width: 768px) {
      margin-top: 0;
    }
  `;
  
  // Background Shape positioned behind the images
  const BackgroundShape = styled.div`
    position: absolute;
    top: 10%;
    right: -10%;
    width: 300px;
    height: 300px;
    background-color: #FFF4B7; /* Shape background color */
    border-radius: 50%;
    clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 75%); /* Custom shape */
    z-index: -1;
  
    @media (min-width: 768px) {
      width: 400px;
      height: 400px;
      top: 20%;
      right: -5%;
    }
  `;
  
  const MainImage = styled.img`
    width: 500px;
    height: 400px;
    border-radius:30%;
    background-size:cover
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  
    @media (min-width: 768px) {
    //   width: 70%;
    }
  `;
  
  const OverlayImage = styled.img`
    position: absolute;
    top: 10%;
    width: 200px;
    height: 200px;
    border-radius: 30%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    
    @media (min-width: 768px) {
        top: 20%;
        right:10px;

    //   width: 30%;
    }
  `;
