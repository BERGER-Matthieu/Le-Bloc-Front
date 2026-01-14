import SpotList from "../../components/spot/list";

export default function ListSpot() {
    const queryParameters = new URLSearchParams(window.location.search)
    const region = queryParameters.get('region')
    
    return(
        <div>
            <h1>Spot list</h1>
            <SpotList filter={region === "" ? 'none' : 'region'} data={region}/>
        </div>
    )
}
