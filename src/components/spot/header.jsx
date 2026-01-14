import { GetSpotById } from "../../common/requests"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SpotHeader() {
    const [name, setName] = useState('easter-egg')
    const [description, setDescription] = useState('easter-egg')
    const [tag, setTag] = useState('easter-egg')
    const [region, setRegion] = useState('easter-egg')
    const [coord, setCoord] = useState('easter-egg')
    const [url, setUrl] = useState('easter-egg')

    const navigate = useNavigate()

    useEffect(() => {
        GetSpotById({id: new URLSearchParams(window.location.search).get('id')})
        .then((res) => {
            if (res.status !== 200) {
                navigate('../list-spot')
            }

            setName(res.data.name)
            setDescription(res.data.description)
            setTag(res.data.tag)
            setRegion(res.data.region)
            setCoord(res.data.coord)
            setUrl(res.data.url)
        }).catch((e) => {
            navigate('../list-spot')
        })
    }, [])
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{tag}</p>
            <p>{region}</p>
            <p>{coord}</p>
            <a href={url}>{url}</a>
        </div>
    )
}