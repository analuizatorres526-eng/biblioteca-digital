function Card({ titulo, imagem, descricao, categoria }) {
  return (
    <article className="card">
      <img src={imagem} alt={titulo} />
      <div className="card-corpo">
        <span className="categoria">{categoria}</span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </article>
  )
}

export default Card