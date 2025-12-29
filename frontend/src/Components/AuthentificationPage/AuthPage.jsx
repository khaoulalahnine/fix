import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../../services/axios";
import axios from "axios"; 
import { loginUser, fetchCurrentUser } from "../../features/auth/authSlice";
import "./AuthPage.css";

const roles = ["Traveler", "Artisan", "Restaurant", "Guide"];

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("Traveler");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // request CSRF cookie from the root (NOT /api)
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", { withCredentials: true });

      await api.post("/register", { name, email, password, role });
      await dispatch(fetchCurrentUser());
      navigate("/"); // redirect after login
    } catch (err) {
      alert("Registration failed: " + (err.response?.data.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // <-- fix: call the root csrf endpoint with axios and withCredentials
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", { withCredentials: true });

      await dispatch(loginUser({ email, password }));
      await dispatch(fetchCurrentUser());
      navigate("/");
    } catch (err) {
      alert("Login failed: " + (err.response?.data.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h3>{isLogin ? "Login" : "Register"}</h3>
        <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
          {!isLogin && (
            <>
              <div className="role-selector">
                {roles.map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={role === r ? "active-role" : ""}
                    onClick={() => setRole(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="toggle-form">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;