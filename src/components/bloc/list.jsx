import { GetBlocsBySpot, GetSpotById, GetBlocsByUser } from "../../common/requests"
import { useEffect, useState } from "react"
import CardBloc from "./card"

export default function BlocList({filter, data}) {
    const [blocs, setBlocs] = useState([])

    

    useEffect(async () => {
        GetSpotById({id : data})
        .then((res) => {
            const name = res.data.name

            switch (filter) {
                case 'spot':
                    GetBlocsBySpot(name)
                    .then((res) => {
                        let tempBlocList = res.data.map((spot) => {
                            return <CardBloc id={spot._id} name={spot.name} description={spot.description}/>
                        })
                        setBlocs(tempBlocList)
                    })
                    break
                case 'userId':
                    console.log("caca")
                    GetBlocsByUser(data)
                    .then((res) => {
                        console.log(res)
                        let tempSpotList = res.data.map((spot) => {
                            return <CardBloc id={spot._id} name={spot.name} description={spot.description}/>
                        })
                        setBlocs(tempSpotList)
                    })
                    break
                default:
                    break
            }
        })

    }, [])

    return (
        <div>
            {blocs.map((bloc) => {
                return bloc
            })}
        </div>
    )
}