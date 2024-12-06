import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("STUDENT");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                username,
                password,
                role,
            });

            if (response.data.success) {
                // Store username in localStorage
                localStorage.setItem("username", username);

                // Navigate to the respective dashboard
                if (role === "STUDENT") {
                    window.location.href = "/student-dashboard";
                } else if (role === "TEACHER") {
                    window.location.href = "/teacher-dashboard";
                } else if (role === "ADMIN") {
                    window.location.href = "/admin-dashboard";
                }
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            setError("Server error. Please try again later.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-image">
                {/* Image remains unchanged */}
                <img
                    src="https://www.uaecentral.com/wp-content/uploads/2020/08/University-Education-1536x864.jpg"
                    alt="Graduation"
                />
            </div>
            <div className="login-form">
                <h1>Login page</h1>
                <p className="login-subtitle">Log in to access your dashboard</p>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="login-select"
                >
                    <option value="STUDENT">Student</option>
                    <option value="TEACHER">Teacher</option>
                    <option value="ADMIN">Admin</option>
                </select>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button onClick={handleLogin} className="login-button">
                    Login
                </button>
                {error && <p className="login-error">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
