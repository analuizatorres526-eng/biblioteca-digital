import Card from '../components/Card.jsx'
import livros from '../data/livros.js'

function Produtos() {
  return (
    <section>
      <h1>Catálogo de Livros</h1>
      <div className="grade">
        {livros.map((livro) => (
          <Card
            key={livro.id}
            titulo={livro.titulo}
            imagem={livro.imagem}
            descricao={livro.descricao}
            categoria={livro.categoria}
          />
        ))}
      </div>
    </section>
  )
}

export default Produtos