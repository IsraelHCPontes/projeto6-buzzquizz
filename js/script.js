// Globais israel 
 
let quantidadeNivel

//scripts thiago a baixo

let botao_criar_pergunta = document.querySelector(".primeiraParte").querySelector("button") 
   
let botao_criar_niveis = document.querySelector(".segundaParte").querySelector("button")
   
function info_basica_quizz() {
   
    const titulo_info_basica_quizz = document.querySelector(".informacaoDoQuiz").querySelector(".tituloQuiz").value
    const caracteres = titulo_info_basica_quizz.split("")
           
    const quant_niveis = document.querySelector(".informacaoDoQuiz").querySelector(".nivelQuiz").value
        
    const input_url = document.querySelector(".informacaoDoQuiz").querySelector(".imagemQuiz").value
           
    const quant_perg = document.querySelector(".informacaoDoQuiz").querySelector(".perguntasQuiz").value
           
   
    if(caracteres.length < 20 || caracteres.length > 65 || quant_perg < 3 || quant_niveis < 2){
        alert("preencher os dados corretamente.")
    }

    try {
        let url = new URL(input_url)
    } catch(err) {
        alert("A URL da imagem esta incorreta")
    }
}

botao_criar_pergunta.addEventListener("click", info_basica_quizz)


/* tela Crie suas perguntas */

function crie_perguntas_quizz(){
    /*validação do título */
    
    const titulo_perguntas = document.querySelectorAll(".textoDaPergunta")
    for(let i = 0; i < titulo_perguntas.length; i++){
        const titulo = titulo_perguntas[i].value
        const caracteres1 = titulo.split("")
        if(caracteres1.length < 20){
            alert("preencher os dados corretamente.")
        }
    }

  // validação do título  

}
   




/* tela Crie suas perguntas */


/****************************************************************************************************/

//scripts israel a baixo

//função slide niveis 
function editaNivel(elemento) {
    elemento.parentNode.classList.toggle('toggle')
    elemento.parentNode.querySelector('.caixaNivel').classList.toggle('opacidade')
    elemento.parentNode.querySelector('.buttonEditar').classList.toggle('desligado')
}

//função slide perguntas
function editaPergunta(elemento) {
    elemento.parentNode.classList.toggle('toggle')
    elemento.parentNode.querySelector('.pergunta1').classList.toggle('opacidade')
    elemento.parentNode.querySelector('.buttonEditar').classList.toggle('desligado')
}

//funcao renderiza perguntas
function  renderizaPergunta(){
    quantidadeNivel = document.querySelector('.nivelQuiz').value
    console.log(quantidadeNivel)
    quantidadePergunta = document.querySelector('.perguntasQuiz').value
    document.querySelector('.perguntas').innerHTML = ""
    for (let i = 0; i < quantidadePergunta; i++) {
        newPergunta = i + 1
        template_caixaPergunta = ` 
        <div class="containerPerguntas toggle">
        <div class="topCaixas" onclick="editaPergunta(this)" > </div>
        <h1 class="numeroPergunta">Pergunta ${newPergunta}</h1>
        <img class="buttonEditar" src="./images/img1.svg"/>
        <div class="pergunta1">
            <!--Fecha caixa pergunta 01-->
            <input
                class="textoDaPergunta"
                type="text"
                placeholder="Texto da pergunta"
            />
            <input
                class="corDoFundo"
                type="text"
                placeholder="Cor de fundo da pergunta"
            />
         <!--Fecha caixa pergunta 1-->
            <div class="respostaCorreta ">
                <h1>Resposta Correta</h1>
                <input
                    class="RespostaCorreta"
                    type="text"
                    placeholder="Resposta Correta"
                />
                <input
                    class="urlDaImagem"
                    type="text"
                    placeholder="URL da imagem"
                />
            </div>
            <!--Fecha caixa Resposta Correta-->
            <div class="respostasIncorretas ">
                <h1>Respostas incorretas</h1>
                <input
                    class="respostaIncorreta"
                    type="text"
                    placeholder="Resposta incorreta 1"
                />
                <input
                    class="urlDaImagem"
                    type="text"
                    placeholder="URL da imagem 1"
                />
                <input
                    class="respostaIncorreta"
                    type="text"
                    placeholder="Resposta incorreta 2"
                />
                <input
                    class="urlDaImagem"
                    type="text"
                    placeholder="URL da imagem 2"
                />
                <input
                    class="respostaIncorreta"
                    type="text"
                    placeholder="Resposta incorreta 3"
                />
                <input
                    class="urlDaImagem"
                    type="text"
                    placeholder="URL da imagem 3"
                />
            </div>
            <!--Fecha caixa Respostas Incorretas-->
        </div>
    </div>`
        document.querySelector('.perguntas').innerHTML += template_caixaPergunta
    }
}
 //botao 1 ativa redenre perguntas       
 botao_criar_pergunta.addEventListener("click", renderizaPergunta)

//funcao renderiza perguntas
function renderizaNivel() {
    document.querySelector('.niveis').innerHTML = ""
    console.log("passou pro render nivel")
    console.log(quantidadeNivel)
    for(let i = 0; i < quantidadeNivel; i++){   
       newNivel = i + 1
       template_caixaNivel = ` 
           <div class="container toggle">
                       <div class="topCaixas" onclick="editaNivel(this)" ></div>
                       <img class="buttonEditar" src="./images/img1.svg">
                       <h1>Nível ${newNivel}</h1>
                       <div class="caixaNivel">
                               <input
                                   class="tituloNivel"
                                   type="text"
                                   placeholder="Título do nível"
                               />
                               <input
                                   class="porcentagemAcerto"
                                   type="text"
                                   placeholder="% de acerto mínima"
                           />
                               <input
                                   class="urlNivel"
                                   type="text"
                                   placeholder="URL da imagem do nível"
                               />
                               <input
                                   class="descricaoNivel"
                                   type="text"
                                   placeholder="Descrição do nível"
                               />
                       
                       </div>
                   </div>
                   `
        document.querySelector('.niveis').innerHTML += template_caixaNivel
    }
}

 //botao  ativa redenre niveis      
botao_criar_niveis.addEventListener("click", renderizaNivel)


// função cria quantidade de niveis passadas 


//tratamento de paramentros 

let botao_finalizar_quizz = document.querySelector(".terceiraParte .botaoNivel")
function info_basica_Nivel() {
    console.log(quantidadeNivel)
    titulo = document.querySelectorAll(".terceiraParte .tituloNivel")
    url = document.querySelectorAll(".terceiraParte .urlNivel")
    descricaoNivel = document.querySelectorAll(".terceiraParte .descricaoNivel")
    porcentagemAcerto = document.querySelectorAll(".terceiraParte .porcentagemAcerto")

    for(let i = 0; i < titulo.length; i++){
        console.log(titulo[i].value.length ,descricaoNivel[i].value.length , porcentagemAcerto[i].value)
        if(titulo[i].value.length < 20 || descricaoNivel[i].value.length < 30 || porcentagemAcerto[i].value < 0){
            alert("preencher os dados corretamente.")
         }
        try {let url = new URL(url[i].value)       
             } catch(err) {
            alert("A URL da imagem esta incorreta")
            }
    }
          
}
botao_finalizar_quizz.addEventListener("click", info_basica_Nivel)
   

 
