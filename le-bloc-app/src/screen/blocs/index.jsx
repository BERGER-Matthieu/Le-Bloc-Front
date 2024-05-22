import Form from "../../components/form";

export default function Bloc() {
    const fields = [
        {
            type: "text",
            value: "",
            placeholder: "Spot",
            key: "spot"
        },
        {
            type: "text",
            value: "",
            placeholder: "name",
            key: "name"
        },
        {
            type: "text",
            value: "",
            placeholder: "cotation",
            key: "cotation"
        },
        {
            type: "text",
            value: "",
            placeholder: "description",
            key: "description"
        },
        {
            type: "text",
            value: "",
            placeholder: "url",
            key: "url"
        },
        {
            type: "file",
            value: "",
            placeholder: "img",
            key: "img"
        },
        {
            type: "text",
            value: "",
            placeholder: "position",
            key: "position"
        },
    ]

    return (
        <div>
            <h1>Add Blocs</h1>
            <Form fields={fields} button="Bloc" request="tryCreateBloc" redirect="/home"/>
        </div>
    )
}

