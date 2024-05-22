import { GetSpotById, GetBlocsBySpot} from "../../common/requests"
import { useEffect, useState } from "react"
import CardBloc from "../../components/bloc/card"

export default function BlocList() {
    const [blocs, setBlocs] = useState([])

    useEffect(async () => {
        GetSpotById({id: new URLSearchParams(window.location.search).get('id')})
        .then(({data}) => {
            GetBlocsBySpot({name: data.name})
            .then((res) => {
                console.log(res.data)
                res.data.forEach((bloc) => {
                    setBlocs([...blocs, <CardBloc name={bloc.name} cotation={bloc.cotation} spot={bloc.spot} id={bloc._id}/> ])
                })
            })
        })
        .catch((e) => {
            console.error(e)
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