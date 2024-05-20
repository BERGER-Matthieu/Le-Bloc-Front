import { useState, useEffect } from "react";
import axios from 'axios';
import PreviewSpot from "../../components/spot/preview";

export default function ListSpot() {
    const [spotList, setSpotList] = useState('easter-egg');
    const queryParameters = new URLSearchParams(window.location.search)

    useEffect(() => {
        const url = queryParameters.get('region') ? `http://localhost:3001/LBB/getSpotsByRegion/${queryParameters.get('region')}` : `http://localhost:3001/LBB/getAllSpot`
        axios.get(url)
        .then((res) => {
            return res.data
        })
        .then((res) => {
            let tempSpotList = res.map((spot) => {
                return <PreviewSpot id={spot._id} name={spot.name} description={spot.description}/>
            })
            console.log(res)
            setSpotList(tempSpotList)
        })
        .catch((e) => {
            console.log(e)
        })
    }, [])


    return(
        <div>
            {spotList}
        </div>
    )
}