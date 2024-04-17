import Form from "../../components/form";

export default function Login() {
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
    ]

    return (
        <div>
            <h1>Login</h1>
            <Form fields={fields} button="Login" request="TryLogin" redirect="/home"/>
        </div>
    )
}