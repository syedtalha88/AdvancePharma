
const TopHeader = () => {
  return (
    <div style={styles.headerWrapper}>
    <div style={styles.headerContainer}>
      {/* Left Side: Location */}
      <div style={styles.location}>
        <span>📍 Im Prüfling 17 - 19, 60389 Frankfurt am Main</span>
      </div>

      {/* Right Side: Contact Details */}
      <div style={styles.contactDetails}>
        <span style={styles.contactItem}>📞 069 9563669-0</span>
        <span style={styles.contactItem}>✉️ info@groisman-laube.de</span>
        <button style={styles.messageButton}>Send a Message</button>
      </div>
    </div>
    </div>
  );
};


const styles = {

  headerWrapper:{
    backgroundColor:'#F7EED3',
  },

  headerContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
    backgroundColor: '#2A2D34', // Dark blue background to match the uploaded theme
    color: '#E0E0E0', // Light gray text color for contrast
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    flexWrap: 'wrap',
    overflow: 'hidden',
    margin:' 0 20px',
    // marginTop:'10px',
    borderBottomLeftRadius:"40px",
    borderBottomRightRadius:"40px"
  },
  location: {
    flex: 1,
    color: '#E0E0E0',
    textAlign: 'left',
  },
  contactDetails: {
    display: 'flex',
    alignItems: 'center',
    flex: 2,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  contactItem: {
    marginRight: '20px',
    color: '#E0E0E0', // Light text color for contact details
  },
  messageButton: {
    padding: '6px 12px',
    backgroundColor: '#1F3A93', // Darker blue for the button
    color: '#E0E0E0', // Light text color
    border: 'none',
    borderRadius: '20px', // Rounded button for a modern look
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },

  // Adding a custom wave shape using ::before
  '::before': {
    content: '""',
    position: 'absolute',
    bottom: '-10px', // Position slightly below the container
    left: '0',
    width: '100%',
    height: '40px', // Adjust height as needed
    backgroundColor: '#2A2D34', // Same color as the header for continuity
    borderRadius: '0 0 50% 50%', // Create a wave effect
    zIndex: '-1',
  },

  '@media (max-width: 768px)': {
    headerContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    contactDetails: {
      justifyContent: 'center',
      marginTop: '10px',
    },
    contactItem: {
      marginRight: '10px',
    },
    messageButton: {
      fontSize: '13px',
      padding: '5px 10px',
    },
  },
};

export default TopHeader;
