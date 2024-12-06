import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      navigate("/");
    } else {
      setUsername(storedUsername);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div style={styles.pageContainer}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>LMS</h2>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>Dashboard</li>
            <li style={styles.navItem}>Profile</li>
            <li style={styles.navItem}>Settings</li>
            <li style={styles.navItem}>Help</li>
          </ul>
        </nav>
      </aside>
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <span style={styles.welcomeMessage}>Welcome, {username}!</span>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </header>
        <main style={styles.content}>
          <div style={styles.card}>
            <h1 style={styles.title}>Student Dashboard</h1>
            <p style={styles.description}>
              Manage your profile, view notifications, and track your progress.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh", // Use full viewport height
    width: "100vw", // Use full viewport width
    margin: 0,
    padding: 0,
    overflow: "hidden", // Prevent extra scrollbars
    boxSizing: "border-box",
    backgroundColor: "#f9fafc",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#004085",
    color: "white",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    height: "100%", // Sidebar stretches fully
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
  },
  navItem: {
    margin: "15px 0",
    fontSize: "18px",
    cursor: "pointer",
    textAlign: "center",
    padding: "10px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  },
  mainContent: {
    flex: 1, // Fills the rest of the screen
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  welcomeMessage: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  content: {
    flex: 1, // Occupies available space
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto", // Allow scrolling for long content
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "18px",
    color: "#666",
    marginTop: "20px",
  },
};

export default StudentDashboard;
