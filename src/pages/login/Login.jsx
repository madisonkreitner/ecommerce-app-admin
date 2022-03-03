import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../../redux/apiCalls';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <Container>
            <input style={{ padding: 10, marginBottom: 20 }}type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
            <input style={{ padding: 10, marginBottom: 20 }}type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
            <button style={{ padding: 10, width: 100, border: "none", backgroundColor: "darkblue", color: "white", cursor: "pointer" }} onClick={handleClick}>Login</button>
        </Container>
    )
}

export default Login