import { useState, useEffect } from "react";
import PreviewSpot from "../../components/spot/preview";
import { GetSpotsByRegion, GetAllSpot, GetSpotsByUserId } from "../../common/requests";

export default function SpotList({filter, data}) {
    const [spotList, setSpotList] = useState('easter-egg');

    useEffect(async () => {
        switch (filter) {
            case 'region':
                GetSpotsByRegion(data)
                .then((res) => {
                    let tempSpotList = res.map((spot) => {
                        return <PreviewSpot id={spot._id} name={spot.name} description={spot.description}/>
                    })
                    setSpotList(tempSpotList)
                })
                break
            case 'none':
                GetAllSpot()
                .then((res) => {
                    let tempSpotList = res.map((spot) => {
                        return <PreviewSpot id={spot._id} name={spot.name} description={spot.description}/>
                    })
                    setSpotList(tempSpotList)
                })
                break
                case 'userId':
                    GetSpotsByUserId(data)
                    .then((res) => {
                        console.log(res)
                        res = (typeof res === 'object') ? [res] : res
                        console.log(res)
                        let tempSpotList = res.map((spot) => {
                            return <PreviewSpot id={spot._id} name={spot.name} description={spot.description}/>
                        })
                        setSpotList(tempSpotList)
                    })
                    break
            default:
                break
        }
    }, [])
    return(
        <div>
            {spotList}
        </div>
    )
}