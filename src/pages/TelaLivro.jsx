import "./TelaLivro.css"

function TelaLivro() {
  return (

    <div className="container-mae">
      

      <div className="container-tela">

        <div className="parte-cima">

          <div className="parte-capa-livro">

            <div className="capa-livro"></div>

          </div>

          <div className="parte-textos">

            <div className="textos">

              <div className="titulo-livro">

                <h3>Título do livro</h3>

              </div>

              <div className="descricao-livro">

                <h4>#autor</h4>
                <h4>#editora</h4>
                <h4>#ano</h4>
                <h4>#volume</h4>

              </div>

              <div className="sinopse-livro">

                <h3>Sinopse:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla sapiente magni, ea non voluptates est dolorum vero aperiam necessitatibus tempora consectetur animi modi provident amet, deleniti qui. Quidem, corrupti.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla sapiente magni, ea non voluptates est dolorum vero aperiam necessitatibus tempora consectetur animi modi provident amet, deleniti qui. Quidem, corrupti.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla sapiente magni, ea non voluptates est dolorum vero aperiam necessitatibus tempora consectetur animi modi provident amet, deleniti qui. Quidem, corrupti.</p>

              </div>

              <div className="genero-livro">

                <div className="box-genero">#genero1</div>
                <div className="box-genero">#genero2</div>
                <div className="box-genero">#genero3</div>

              </div>

            </div>

          </div>

          <div className="parte-menus">

            <button className="botao-menu"><img src="./images/home.svg" alt="" className="icone-botao"/></button>
            <button className="botao-menu"><img src="./images/setting.svg" alt="" className="icone-botao"/></button>
            <button className="botao-menu"><img src="./images/pen.svg" alt="" className="icone-botao"/></button>

          </div>

        </div>

        <div className="parte-baixo">

          <button className="botao-resenha">Resenhas  |  02</button>
          <button className="botao-icone"><img src="./images/down.svg" alt="" className="icone-down"/></button>

        </div>

      </div>
      
    </div>

  )
}

export default TelaLivro
