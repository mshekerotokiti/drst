import React from "react";

const Calltoaction = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "rgb(232, 202, 10)",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    Width: "100%",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const buttonLinkStyle = {
    textDecoration: "none",
    color: "#fff",
  };

  const partnersContainerStyle = {
    marginTop: "40px",
  };

  const partnersHeadingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const partnersListStyle = {
    listStyle: "none",
    padding: 0,
    display: "flex", // Display as flex container
    flexDirection: "row", // Stack items vertically
    // alignItems: "center", // Center items horizontally
  };

  const partnerListItemStyle = {
    marginBottom: "20px",
    width: "100%", // Take full width of container
  };

  const partnerLinkStyle = {
    textDecoration: "none",
    color: "#007bff",
    display: "flex",
    alignItems: "center",
  };

  const partnerImageStyle = {
    width: "100px",
    height: "100px",
    marginRight: "10px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Join Hands with DRS Tanzania to Empower Vulnerable Communities</h2>
      <p style={paragraphStyle}>Together, Let's Build a Brighter Future for All!</p>
      <button style={buttonStyle}>
        <a href="contact" style={buttonLinkStyle}>
          Call to Action
        </a>
      </button>
      <div style={partnersContainerStyle}>
        <h2 style={partnersHeadingStyle}>Our Partners</h2>
        <p>
          Disability Relief Services (DRS) Tanzania is proud to work alongside our esteemed partners who share our
          vision of creating an inclusive and barrier-free society for people with disabilities in Tanzania.
        </p>
        <ul style={partnersListStyle}>
          <li style={partnerListItemStyle}>
            <a href="https://drc.ngo/" style={partnerLinkStyle}>
              <img src="./assets/drc-logo-1.jpg" alt="DRC" style={partnerImageStyle} />
            </a>
          </li>
          <li style={partnerListItemStyle}>
            <a href="https://www.helpage.org/" style={partnerLinkStyle}>
              <img src="./assets/helpage.png" alt="Help Age International" style={partnerImageStyle} />
            </a>
          </li>
          <li style={partnerListItemStyle}>
            <a href="https://www.oxfam.org.uk/" style={partnerLinkStyle}>
              <img src="./assets/Oxfam-Logo.svg" alt="Oxfam International" style={partnerImageStyle} />
             
            </a>
          </li>
          <li style={partnerListItemStyle}>
            <a href="https://www.unrefugees.org/" style={partnerLinkStyle}>
              <img src="./assets/unhcr-logo.png" alt="UNHCR International" style={partnerImageStyle} />
             
            </a>
          </li>
          <li style={partnerListItemStyle}>
            <a href="https://www.medicalteams.org/" style={partnerLinkStyle}>
              <img src="./assets/medicalteamlogo.png" alt="Medical Teams International" style={partnerImageStyle} />
             
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calltoaction;
