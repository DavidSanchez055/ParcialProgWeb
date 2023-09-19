import React from 'react'
import '../styles/login.css'
import { LoginButton } from './LoginButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginForm = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const InicioSesion = async (e) => {
        e.preventDefault();
        console.log("Usuario: ", usuario);
        console.log("Password: ", password);

        const data = {
            usuario: usuario,
            password: password
        }

        //Consumo de servicio Login
        await axios.post('http://89.116.25.43:3500/api/login', data)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.jwt);
                localStorage.setItem('usuario', response.data.user);
                localStorage.setItem('username', response.data.user.usuario);
                navigate('/Home');
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    return (
        <div className="card_main">
            <h4 className="title">San Jorge Bakery Shop</h4>
            <a className="leyenda">Welcome back! Please login to your account.</a>
            <div className="input_user">
                <label className="labels">Username</label>
                <input className="inputs" type="text" placeholder="Username"
                    onChange={(e) => { setUsuario(e.target.value) }}
                />
            </div>
            <div className="input_password">
                <label className="labels">Password</label>
                <input className="inputs" type="password" placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />

            </div>
            <div className="option">
                <label><input type="checkbox" />     Remember me     </label>
                <a href="#">Forgot password?</a>
            </div>

            <form>
                <div className="lgnBtn">
                    <LoginButton fnInicioSesion={InicioSesion} />
                </div>
            </form>
        </div>
    )
}

