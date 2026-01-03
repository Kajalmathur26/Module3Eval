import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = login(email, password);
        if (user === "admin") navigate("/admin/dashboard");
        if (user === "customer") navigate("/customers/dashboard");
    };

    return (
        <div style={{ padding: 50 }}>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <br /><br />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <br /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
