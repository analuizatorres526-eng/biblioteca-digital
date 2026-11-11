import Button from '../components/Button.jsx'

function Contato() {
  return (
    <section>
      <h1>Contato</h1>
      <form className="formulario" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" />

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" rows="5"></textarea>

        <Button texto="Enviar" type="submit" />
      </form>
    </section>
  )
}

export default Contato