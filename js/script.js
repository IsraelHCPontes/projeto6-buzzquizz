
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
    const titulo_crie_perguntas_quizz = document.querySelector(".segundaParte ").querySelector(".").value
}
   

botao_criar_niveis.addEventListener("click", crie_perguntas_quizz)


/* tela Crie suas perguntas */



/****************************************************************************************************/

//scripts israel a baixo

//função slide niveis 
//botao_criar_Nivel.addEventListener("click", info_basica_Nivel)
botao_criar_pergunta.addEventListener("click", renderizaNivel)
function editaNivel(elemento){
    elemento.parentNode.classList.toggle('toggleNivel')
    elemento.parentNode.querySelector('.caixaNivel').classList.toggle('opacidade')
    elemento.parentNode.querySelector('.buttonEditar').classList.toggle('invisivel')
    nivel = elemento.parentNode.querySelector('h1').innerHTML
   }
   
   // função cria quantidade de niveis passadas 
   function renderizaNivel(elemento){
    let quantidadeNivel = document.querySelector('.nivelQuiz').value
    console.log(quantidadeNivel)
    for(let i = 0; i < quantidadeNivel; i++){   
       newNivel = i + 1
       template_caixaNivel = ` 
           <div class="container toggleNivel">
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
   
   //tratamento de paramentros 
   let botao_criar_Nivel = document.querySelector(".terceiraParte").querySelector(".botaoNivel") 
   function info_basica_Nivel() {
   
     const titulo = document.querySelector(".terceiraParte").querySelector(".tituloNivel").value
     const caracteres = titulo.split("")
           
     const url_niveis = document.querySelector(".terceiraParte").querySelector(".urlNivel").value
           
     const descricaoNivel_Nivel = document.querySelector(".terceiraParte").querySelector(".descricaoNivel").value
           
     const porcentagemAcerto_Nivel = document.querySelector(".terceiraParte").querySelector(".porcentagemAcerto").value
           
   
     if(caracteres.length < 20 || descricaoNivel_Nivel < 30 || porcentagemAcerto_Nivel != 0){
        alert("preencher os dados corretamente.")
     }
    try {
      let url = new URL(url_niveis)
        } catch(err) {
        alert("A URL da imagem esta incorreta")
        }
   }
   
