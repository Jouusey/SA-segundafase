import "./LivroParteDois.css"

function LivroParteDois() {
  return (
    <div className="container-mae-resenhas">

        <div className="container-resenhas">

            <div className="container-resenha-usuarios">

                <div className="box-resenha">

                    <div className="parte-foto-nome">

                        <div className="foto-perfil">

                            <img src="./images/perfil.png" alt="" className="imagem-perfil"/>

                        </div>

                        <h3>nome do perfil</h3>

                    </div>

                    <div className="parte-resenha">

                        <label htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus placeat in laborum quia distinctio fugiat numquam ipsam mollitia praesentium culpa, unde quos natus necessitatibus eveniet dolorem? Quam, quas repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus placeat in laborum quia distinctio fugiat numquam ipsam mollitia praesentium culpa, unde quos natus necessitatibus eveniet dolorem? Quam, quas repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus placeat in laborum quia distinctio fugiat numquam ipsam mollitia praesentium culpa, unde quos natus necessitatibus eveniet dolorem? Quam, quas repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus placeat in laborum quia distinctio fugiat numquam ipsam mollitia praesentium culpa, unde quos natus necessitatibus eveniet dolorem? Quam, quas repellat!Architecto accusamus placeat in laborum quia distinctio fugiat numquam ipsam mollitia praesentium culpa, unde quos natus necessitatibus eveniet dolorem? Quam, quas repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>

                    </div>

                    <div className="parte-curtida">

                        <button className="botao-curtida"><img src="./images/like.svg" alt="" className="icone-curtida"/></button>
                        <label htmlFor="" className="label-curtidas">X CURTIDAS</label>

                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default LivroParteDois
