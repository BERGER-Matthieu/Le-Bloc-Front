import { useNavigate } from "react-router-dom"

export default function PreviewSpot({id, name, description}) {
    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`../spot?id=${id}`)}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}