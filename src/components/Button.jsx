function Button({ texto, type = 'button' }) {
  return <button type={type} className="botao">{texto}</button>
}

export default Button