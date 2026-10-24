export default function Card({ descricao, imagem, numero }) {

    return (
        <>
        <div className="card">
            <img src={imagem} alt={descricao} />
            <span>{numero}</span>
            <p>{descricao}</p>
        </div>
        </>
    )
}