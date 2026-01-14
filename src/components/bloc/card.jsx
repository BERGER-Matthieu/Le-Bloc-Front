export default function CardBloc({name, cotation, spot, id}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{cotation}</p>
            <p>{spot}</p>
            <img src={`http://localhost:3001/LBB/getBlocImgById/${id}`} alt={name}/>
        </div>
    )
}