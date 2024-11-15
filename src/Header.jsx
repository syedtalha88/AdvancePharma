

const Header = () => {
  return (
    <div style={styles.headerContainer}>
      {/* Left Section: Logo and Company Name */}
      <div style={styles.leftSection}>
        <img
          src="your-logo-url.png" // Replace with your actual logo URL
          alt="Company Logo"
          style={styles.logo}
        />
        <span style={styles.companyName}>Your Company Name</span>
      </div>

      {/* Right Section: Navigation Links and Language Toggle */}
      <div style={styles.rightSection}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#services" style={styles.navLink}>Services</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
        <button style={styles.languageButton}>عربي</button>
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#F7EED3', // Cream background color
    borderBottom: '2px solid #E2DDD7', // Light border for elegance
    fontFamily: 'Arial, sans-serif',
    flexWrap: 'wrap',
    // margin:"0 20px",
    // borderBottomLeftRadius:"50px",
    // borderBottomRightRadius:"50px"
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  companyName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1F3A93', // Dark blue for the company name
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    flex: 2,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  navLink: {
    margin: '0 15px',
    color: '#1F3A93', // Dark blue for navigation links
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  languageButton: {
    padding: '8px 16px',
    backgroundColor: '#1F3A93', // Dark blue button
    color: '#F9F5EF', // Cream text color
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
    marginLeft: '15px',
  },
  '@media (max-width: 768px)': {
    headerContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    rightSection: {
      justifyContent: 'center',
      marginTop: '10px',
    },
    navLink: {
      fontSize: '14px',
      margin: '0 8px',
    },
    languageButton: {
      fontSize: '14px',
      padding: '6px 12px',
    },
  },
};

export default Header;
