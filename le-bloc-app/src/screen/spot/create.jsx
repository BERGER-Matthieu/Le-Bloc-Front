import Form from '../../components/form';

export default function CreateSpot() {
    const fields = [
        {
            type: "text",
            value: "",
            placeholder: "Region",
            key: "region"
        },{
            type: "text",
            value: "",
            placeholder: "Nom",
            key: "name"
        },{
            type: "text",
            value: "",
            placeholder: "Tags",
            key: "tag"
        },{
            type: "text",
            value: "",
            placeholder: "Description",
            key: "description"
        },{
            type: "text",
            value: "",
            placeholder: "Coordonnées gps",
            key: "coord"
        },
        {
            type: "text",
            value: "",
            placeholder: "Site web",
            key: "url"
        },
    ]

    return (
        <div>
            <h1>Create spot</h1>
            <Form fields={fields} button="Create" request="TryCreateSpot"/>
        </div>
    )
}