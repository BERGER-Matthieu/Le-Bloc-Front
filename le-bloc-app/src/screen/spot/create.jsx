import ComplementAdresse from "../../components/complementAdress";
import Form from '../../components/form';
import { useState } from "react";

export default function CreateSpot() {
    const [gpsCoord, setGpsCoord]   = useState('');

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
            value: gpsCoord,
            display : "none",
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
            <ComplementAdresse gpsCoord={setGpsCoord} />
            <Form fields={fields} button="Create" request="TryCreateSpot" isCoord="True"/>
        </div>
    )
}