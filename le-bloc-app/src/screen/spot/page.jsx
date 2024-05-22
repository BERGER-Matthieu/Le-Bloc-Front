import SpotHeader from "../../components/spot/header"
import BlocList from "../../components/bloc/list"

export default function PageSpot() {
    return (
        <>
            <SpotHeader />
            <BlocList filter="spot" data={new URLSearchParams(window.location.search).get('id')}/>
        </>
    )
}