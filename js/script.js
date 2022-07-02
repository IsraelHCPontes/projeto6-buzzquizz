
//scripts thiago a baixo

let botao_criar_pergunta = document.querySelector(".primeiraParte").querySelector("button")

let botao_criar_niveis = document.querySelector(".segundaParte").querySelector("button")

function info_basica_quizz() {

    const titulo_info_basica_quizz = document.querySelector(".informacaoDoQuiz").querySelector(".tituloQuiz").value
    const caracteres = titulo_info_basica_quizz.split("")

    quant_niveis = document.querySelector(".informacaoDoQuiz").querySelector(".nivelQuiz").value

    const input_url = document.querySelector(".informacaoDoQuiz").querySelector(".imagemQuiz").value

    const quant_perg = document.querySelector(".informacaoDoQuiz").querySelector(".perguntasQuiz").value


    if (caracteres.length < 20 || caracteres.length > 65 || quant_perg < 3 || quant_niveis < 2) {
        alert("preencher os dados corretamente.")
    }

    try {
        let url = new URL(input_url)
    } catch (err) {
        alert("A URL da imagem esta incorreta")
    }
}

botao_criar_pergunta.addEventListener("click", info_basica_quizz)


/* tela Crie suas perguntas */

function crie_perguntas_quizz() {
    /*validação do título */
    const titulo_pergunta1 = document.querySelector(".segundaParte ").querySelector(".textoDaPergunta1").value

    const caracteres1 = titulo_pergunta1.split("")
    if (caracteres1.length < 20) {
        alert("preencher os dados corretamente.")
    }

    const titulo_pergunta2 = document.querySelector(".segundaParte ").querySelector(".textoDaPergunta2").value
    const caracteres2 = titulo_pergunta2.split("")
    if (caracteres2.length < 20) {
        alert("preencher os dados corretamente.")
    }

    const titulo_pergunta3 = document.querySelector(".segundaParte ").querySelector(".textoDaPergunta3").value
    const caracteres3 = titulo_pergunta3.split("")
    if (caracteres3.length < 20) {
        alert("preencher os dados corretamente.")
    }

    /*validação do título */

    /*filtro da cor de fundo */

    /*pergunda1 */
    const cor_de_fundo = document.querySelector(".segundaParte ").querySelector(".corDoFundo1").value
    const acdf = cor_de_fundo.split("")

    if (acdf[0] == "#" && acdf.length < 8) {
        let letras_que_passou = []
        for (let i = 1; i < acdf.length; i++) {
            if (acdf[i] == "A" || acdf[i] == "B" || acdf[i] == "C" || acdf[i] == "D" || acdf[i] == "E" || acdf[i] == "F" || acdf[i] == "a" || acdf[i] == "b" || acdf[i] == "c" || acdf[i] == "d" || acdf[i] == "e" || acdf[i] == "f" || acdf[i] == "0" || acdf[i] == "1" || acdf[i] == "2" || acdf[i] == "3" || acdf[i] == "4" || acdf[i] == "5" || acdf[i] == "6" || acdf[i] == "7" || acdf[i] == "8" || acdf[i] == "9") {
                letras_que_passou.push(acdf[i])
            }
        }
        if (letras_que_passou.length === 6) {

        } else {
            alert("preencher os dados corretamente.")
        }
    } else {
        alert("preencher os dados corretamente.")
    }
    /*pergunda1 */

    /*pergunda2 */

    const cor_de_fundo2 = document.querySelector(".pergunta2 ").querySelector(".corDoFundo2").value
    const acdf2 = cor_de_fundo2.split("")

    if (acdf2[0] == "#" && acdf2.length < 8) {

        let letras_que_passou2 = []
        for (let i = 1; i < acdf2.length; i++) {
            if (acdf2[i] == "A" || acdf2[i] == "B" || acdf2[i] == "C" || acdf2[i] == "D" || acdf2[i] == "E" || acdf2[i] == "F" || acdf2[i] == "a" || acdf2[i] == "b" || acdf2[i] == "c" || acdf2[i] == "d" || acdf2[i] == "e" || acdf2[i] == "f" || acdf2[i] == "0" || acdf2[i] == "1" || acdf2[i] == "2" || acdf2[i] == "3" || acdf2[i] == "4" || acdf2[i] == "5" || acdf2[i] == "6" || acdf2[i] == "7" || acdf2[i] == "8" || acdf2[i] == "9") {
                letras_que_passou2.push(acdf2[i])
            }
        }
        if (letras_que_passou2.length === 6) {

        } else {
            alert("preencher os dados corretamente.")
        }
    } else {
        alert("preencher os dados corretamente.")
    }

    /*pergunda2 */

    /*pergunda3 */

    const cor_de_fundo3 = document.querySelector(".pergunta3").querySelector(".corDoFundo3").value
    const acdf3 = cor_de_fundo3.split("")

    if (acdf3[0] == "#" && acdf3.length < 8) {

        let letras_que_passou3 = []
        for (let i = 1; i < acdf3.length; i++) {
            if (acdf3[i] == "A" || acdf3[i] == "B" || acdf3[i] == "C" || acdf3[i] == "D" || acdf3[i] == "E" || acdf3[i] == "F" || acdf3[i] == "a" || acdf3[i] == "b" || acdf3[i] == "c" || acdf3[i] == "d" || acdf3[i] == "e" || acdf3[i] == "f" || acdf3[i] == "0" || acdf3[i] == "1" || acdf3[i] == "2" || acdf3[i] == "3" || acdf3[i] == "4" || acdf3[i] == "5" || acdf3[i] == "6" || acdf3[i] == "7" || acdf3[i] == "8" || acdf3[i] == "9") {
                letras_que_passou3.push(acdf3[i])
            }
        }
        if (letras_que_passou3.length === 6) {

        } else {
            alert("preencher os dados corretamente.")
        }
    } else {
        alert("preencher os dados corretamente.")
    }

    /*pergunda3 */

    /*filtro da cor de fundo */

    /*validação do titulo das respostas corretas */
    /*pergunta 1 */
    const titulo_resp_correta1 = document.querySelector(".respostaCorreta").querySelector(".RespostaCorreta1").value
    const titulo_resp_incorreta1 = document.querySelector(".respostasIncorretas").querySelector(".respostaIncorreta1").value
    const titulo_resp_incorreta_1_2 = document.querySelector(".respostasIncorretas").querySelector(".respostaIncorreta2").value
    const titulo_resp_incorreta_1_3 = document.querySelector(".respostasIncorretas").querySelector(".respostaIncorreta3").value
    /*pergunta 1 */

    /*pergunta 2 */
    const titulo_resp_correta2 = document.querySelector(".caixa2").querySelector(".RespostaCorreta2").value
    const titulo_resp_incorreta2 = document.querySelector(".caixa2").querySelector(".respostaIncorreta01").value
    const titulo_resp_incorreta_2_2 = document.querySelector(".caixa2").querySelector(".respostaIncorreta02").value
    const titulo_resp_incorreta_2_3 = document.querySelector(".caixa2").querySelector(".respostaIncorreta03").value
    /*pergunta 2 */



    /*pergunta 3 */

    const titulo_resp_correta3 = document.querySelector(".caixa3").querySelector(".respostaCorreta3").value
    const titulo_resp_incorreta3 = document.querySelector(".caixa3").querySelector(".respostaIncorreta001").value
    const titulo_resp_incorreta_3_2 = document.querySelector(".caixa3").querySelector(".respostaIncorreta002").value
    const titulo_resp_incorreta_3_3 = document.querySelector(".caixa3").querySelector(".respostaIncorreta003").value

    /*pergunta 3 */

    if (titulo_resp_correta1 == "" || titulo_resp_correta2 == "" || titulo_resp_correta3 == "" || titulo_resp_incorreta1 == "" || titulo_resp_incorreta_1_2 == "" || titulo_resp_incorreta_1_3 == "" || titulo_resp_correta2 == "" || titulo_resp_incorreta_2_2 == "" || titulo_resp_incorreta_2_3 == "" || titulo_resp_correta3 == "" || titulo_resp_incorreta_3_2 == "" || titulo_resp_incorreta_3_3 == "") {
        alert("preencher os dados corretamente.")
    }

    /*validação do titulo das respostas corretas */

    /*URL das imagens de resposta: deve ter formato de URL */

    /*pergunta 1 */

    const url_img1 = document.querySelector(".caixa1 .respostaCorreta").querySelector(".urlDaImagem1").value
    try {
        let url1 = new URL(url_img1)
    } catch (err1) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img2 = document.querySelector(".urlDaImagem1").value
    try {
        let url2 = new URL(url_img2)
    } catch (err2) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img3 = document.querySelector(".urlDaImagem2").value
    try {
        let url3 = new URL(url_img3)
    } catch (err3) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img4 = document.querySelector(".urlDaImagem3").value
    try {
        let url4 = new URL(url_img4)
    } catch (err4) {
        alert("A URL da imagem esta incorreta")
    }

    /*pergunta1 */

    /*pergunta2 */

    const url_img5 = document.querySelector(".urlDaImagem2").value
    try {
        let url5 = new URL(url_img5)
    } catch (err5) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img6 = document.querySelector(".urlDaImagem01").value
    try {
        let url6 = new URL(url_img6)
    } catch (err6) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img7 = document.querySelector(".urlDaImagem02").value
    try {
        let url7 = new URL(url_img7)
    } catch (err7) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img8 = document.querySelector(".urlDaImagem03").value
    try {
        let url8 = new URL(url_img8)
    } catch (err8) {
        alert("A URL da imagem esta incorreta")
    }

    /*pergunta2 */

    /*pergunta3 */

    const url_img9 = document.querySelector(".urlDaImagem3").value
    try {
        let url9 = new URL(url_img9)
    } catch (err9) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img10 = document.querySelector(".urlDaImagem001").value
    try {
        let url10 = new URL(url_img10)
    } catch (err10) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img11 = document.querySelector(".urlDaImagem002").value
    try {
        let url11 = new URL(url_img11)
    } catch (err11) {
        alert("A URL da imagem esta incorreta")
    }

    const url_img12 = document.querySelector(".urlDaImagem003").value
    try {
        let url12 = new URL(url_img12)
    } catch (err12) {
        alert("A URL da imagem esta incorreta")
    }

    /*pergunta3 */

    /*URL das imagens de resposta: deve ter formato de URL */
}


botao_criar_niveis.addEventListener("click", crie_perguntas_quizz)


/* tela Crie suas perguntas */



/****************************************************************************************************/

//scripts israel a baixo
let quantidadeNivel

//função slide niveis 
//botao_criar_Nivel.addEventListener("click", info_basica_Nivel)

function editaNivel(elemento) {
    elemento.parentNode.classList.toggle('toggleNivel')
    elemento.parentNode.querySelector('.caixaNivel').classList.toggle('opacidade')
    elemento.parentNode.querySelector('.buttonEditar').classList.toggle('invisivel')
}

let botao_criar_Pergunta = document.querySelector(".prmeiraParte .botao1")
function  renderizaPergunta(){
    console.log('passou pergunta')
    quantidadePergunta = document.querySelector('.perguntasQuiz').value
    document.querySelector('.perguntas').innerHTML = ""
    for (let i = 0; i < quantidadePergunta; i++) {
        newPergunta = i + 1
        template_caixaPergunta = ` 
        <div class="caixa1">
        <div class="pergunta1">
            <div class="pergunta01">
            <h1>Pergunta ${newPergunta}</h1>
            <img src="./images/img1.svg"/>
            </div>
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
        </div>
        <!--Fecha caixa pergunta 1-->

        <div class="respostaCorreta">
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
        <div class="respostasIncorretas">
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
    <!--Fecha caixa caixa 1-->
                   `
        document.querySelector('.perguntas').innerHTML += template_caixaPergunta
    }
}
botao_criar_pergunta.addEventListener("click", renderiza)

function renderiza(){
    renderizaPergunta()
    renderizaNivel() 
}

// função cria quantidade de niveis passadas 
function renderizaNivel(elemento) {
    quantidadeNivel = document.querySelector('.nivelQuiz').value
    document.querySelector('.niveis').innerHTML = ""
    console.log(quantidadeNivel)
    for (let i = 0; i < quantidadeNivel; i++) {
        newNivel = i + 1
        template_caixaNivel = ` 
           <div class="container nivel${newNivel} toggleNivel">
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
   

 
