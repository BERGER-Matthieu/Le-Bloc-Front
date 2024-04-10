import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Form from "../../components/form";

export default function Register() {
    const fields = [
        {
            type: "text",
            value: "",
            placeholder: "Username",
            key: "username"
        },
        {
            type: "password",
            value: "",
            placeholder: "Password",
            key: "password"
        },
        {
            type: "password",
            value: "",
            placeholder: "Confirm password",
            key: "confirm_password"
        },
        {
            type: "mail",
            value: "",
            placeholder: "Mail",
            key: "mail"
        }
    ]

    return (
        <div>
            <h1>Register</h1>
            <Form fields={fields} button="Register" request="tryRegister" redirect="/login"/>
        </div>
    )
}