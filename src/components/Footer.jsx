export default function Footer() {
    const links = [
      "Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy",
      "Terms", "Locations", "Instagram Lite", "Threads", "Contact Uploading & Non-Users", "Meta Verified"
    ];
  
    return (
      <div style={styles.footerWrapper}>
        <div style={styles.linksContainer}>
          {links.map((link, index) => (
            <a key={index} href="#" style={styles.link}>
              {link}
            </a>
          ))}
        </div>
        <div style={styles.copyright}>
          © 2024 Instagram from Meta
        </div>
      </div>
    );
  }
  
  const styles = {
    footerWrapper: {
      marginTop: "40px",
      textAlign: "center",
      color: "#8e8e8e",
      fontSize: "12px",
    },
    linksContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    link: {
      textDecoration: "none",
      color: "#8e8e8e",
      cursor: "pointer",
      fontSize: "12px",
    },
    copyright: {
      marginBottom: "10px",
    },
  };