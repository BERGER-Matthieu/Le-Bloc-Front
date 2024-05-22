import Form from '../../components/form';
import { useState, useEffect } from "react";
import { GetAllSpot } from '../../common/requests';

export default function CreateBloc() {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        GetAllSpot()
        .then((res) => {
            setSpots(res.data.map((spot) => {
                return spot.name;
            }))
        })
    }, [])
    
    const fields = [
        {
            type: "select",
            options: spots,
            placeholder: "non renseigné",
            key: "spot"
        },{
            type: "text",
            placeholder: "Nom",
            key: "name"
        },{
            type: "text",
            placeholder: "Cotation",
            key: "cotation"
        },{
            type: "text",
            placeholder: "Description",
            key: "description"
        },
        {
            type: "file",
            placeholder: "image",
            accept: "image/jpeg",
            key: "img"
        },
    ]

    return (
        <div>
            <h1>Create spot</h1>
            <Form fields={fields} button="Create" request="TryCreateBloc"/>
        </div>
    )
}