// File: LoginPage.jsx
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://insta-backend-764787928165.asia-south1.run.app/login", {
        username,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
    setLoading(false);
  };

  const handleFacebookLogin = () => {
    alert("Redirecting to Facebook login...");
  };

  const handleForgotPassword = () => {
    alert("Redirecting to Forgot Password page...");
  };

  const handleSignup = () => {
    alert("Redirecting to Sign Up page...");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Instagram</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...styles.input, marginBottom: "0px", width: "93%" }}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={styles.showButton}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <button
            type="submit"
            style={{ ...styles.button, opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <div style={styles.orContainer}>
          <div style={styles.line}></div>
          <div style={styles.orText}>OR</div>
          <div style={styles.line}></div>
        </div>

        <p onClick={handleForgotPassword} style={styles.forgotPassword}>
          Forgot password?
        </p>
      </div>

      <div style={styles.signupContainer}>
        Don't have an account?{" "}
        <span style={styles.signupLink} onClick={handleSignup}>
          Sign up
        </span>
      </div>

      <div style={styles.getApp}>
        <p>Get the app.</p>
        <div style={styles.appButtons}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            style={styles.appButton}
          />
          <img
            src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"
            alt="Microsoft Store"
            style={styles.appButton}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    color: "#fff",
  },
  container: {
    backgroundColor: "#000",
    border: "1px solid #262626",
    padding: "40px",
    width: "300px",
    textAlign: "center",
    marginBottom: "10px",
  },
  logo: {
    fontFamily: "'Grand Hotel', cursive",
    fontSize: "45px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#262626",
    border: "1px solid #262626",
    borderRadius: "3px",
    padding: "10px",
    marginBottom: "10px",
    color: "white",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    backgroundColor: "#0095f6",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px",
    fontWeight: "bold",
    marginTop: "10px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  orContainer: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  },
  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#262626",
  },
  orText: {
    margin: "0 10px",
    color: "#8e8e8e",
    fontWeight: "bold",
    fontSize: "12px",
  },
  facebookLogin: {
    color: "#0095f6",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    cursor: "pointer",
    fontSize: "14px",
    gap: "5px",
    transition: "opacity 0.3s",
  },
  fbIcon: {
    width: "20px",
    height: "20px",
  },
  forgotPassword: {
    color: "#8e8e8e",
    fontSize: "12px",
    cursor: "pointer",
    marginTop: "12px",
    transition: "text-decoration 0.2s",
  },
  signupContainer: {
    backgroundColor: "#000",
    border: "1px solid #262626",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    fontSize: "14px",
    color: "#8e8e8e",
  },
  signupLink: {
    color: "#0095f6",
    fontWeight: "bold",
    cursor: "pointer",
  },
  getApp: {
    textAlign: "center",
    marginTop: "20px",
  },
  appButtons: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  appButton: {
    width: "120px",
  },
  passwordContainer: {
    position: "relative",
  },
  showButton: {
    position: "absolute",
    top: "30%",
    right: "10px",
    color: "#8e8e8e",
    fontWeight: "bold",
    fontSize: "12px",
    cursor: "pointer",
  },
};
const mobileStyles = `
  @media (max-width: 500px) {
    .container {
      width: 100%;
      border: none;
      padding: 20px;
    }
    .signupContainer {
      width: 100%;
      border: none;
      margin-top: 10px;
    }
    .appButtons img {
      width: 100px;
    }
  }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = mobileStyles;
document.head.appendChild(styleTag);
