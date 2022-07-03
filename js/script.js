// Globais israel 
 
let quantidadeNivel

let botao_criar_pergunta = document.querySelector(".primeiraParte").querySelector("button") 
   
let botao_criar_niveis = document.querySelector(".segundaParte").querySelector("button")

let botao_voltar_home = document.querySelector(".quartaParte").querySelector(".botao5") 

let botao_criar_quizz = document.querySelector(".primeiraTela").querySelector(".botaoCriarQuizz") 


function enviaQuizz(){
    let titulo, cor_de_fundo, resposta_correta, url_img, resposta_incorreta
    const caixa1 = document.querySelectorAll(".caixa1")
    const obj = {
        title: document.querySelector(".tituloQuiz").value,
        image: document.querySelector(".imagemQuiz").value,
        questions:[],
        levels:[]
    }
    for(let i = 0; i < caixa1.length; i++){
        const element = caixa1[i]
        const texto_pergunta = element.querySelector(".textoDaPergunta").value
        const cor_fundo = element.querySelector(".corDoFundo").value
        const resp_correta = element.querySelector(".RespostaCorreta").value
        const url_img_correta = element.querySelector(".urlDaImagemCorreta").value
        const obj_pergunta = {
            title: texto_pergunta,
			color: cor_fundo,
            answers: [
				{
					text: resp_correta,
					image: url_img_correta,
					isCorrectAnswer: true
				},
			]
        }

        const texto_resp_incorretas = element.querySelectorAll(".respostaIncorreta")
        const url_resp_incorretas = element.querySelectorAll(".urlDaImagem")
        for(let i = 0; i <texto_resp_incorretas.length; i++){
            const texto_resp_incorreta = texto_resp_incorretas[i].value
            const url_resp_incorreta = url_resp_incorretas[i].value

            const obj_resp = {
                text: texto_resp_incorreta,
                image: url_resp_incorreta,
                isCorrectAnswer: false
            }
            obj_pergunta.answers.push(obj_resp)
        }
        obj.questions.push(obj_pergunta)

    }
    const niveis = document.querySelectorAll(".caixaNivel")
    for(let i = 0; i < niveis.length; i++){
        const element = niveis[i]
        const titulo_nivel = element.querySelector(".tituloNivel").value
        const porcentagem_acerto = element.querySelector(".porcentagemAcerto").value
        const url_nivel = element.querySelector(".urlNivel").value
        const descricao_nivel = element.querySelector(".descricaoNivel").value
        
        const obj_nivel = {
            title: titulo_nivel,
			image: url_nivel,
			text: descricao_nivel,
			minValue: Number(porcentagem_acerto)
        }
        obj.levels.push(obj_nivel)
    }

    /*pegar os titulos das perguntas */
    //console.log(obj)

    const promessa = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", obj)
    promessa.then((res)=>{
        const quizes_usuarios = JSON.parse(localStorage.getItem("quizes_usuarios"))
        if(quizes_usuarios){
            localStorage.setItem("quizes_usuarios", JSON.stringify([res.data.id, ...quizes_usuarios]))
        }else{
            localStorage.setItem("quizes_usuarios", JSON.stringify([res.data.id]))
        }
        
    })
    
}

/*função para enviar o quiz pro servidor */

function atualizar_seus_quizes(){
    let minha_galeria = document.querySelector(".minhaGaleria")
    const quizes_usuarios = JSON.parse(localStorage.getItem("quizes_usuarios"))
    for(let i = 0; i < quizes_usuarios.length; i++){
        //console.log(quizes_usuarios[i])
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizes_usuarios[i]}`)
        promessa.then((res)=>{
            // console.log(`id:${quizes_usuarios[i]}`)
            // console.log(res.data.title)
            // console.log(res.data.image)
            // console.log("****************************")
            minha_galeria.innerHTML += `
            <div class="meuQuiz meuQuiz${i + 1}">
                <img src="${res.data.image}"/>
                <p>${res.data.title}</p>
            </div>
            `
        })
    }
}

atualizar_seus_quizes()
//scripts thiago a baixo

/*function info_basica_quizz() {
   
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
}*/

/* tela Crie suas perguntas */

/*function crie_perguntas_quizz(){
    /*validação do título 
    
    const titulo_perguntas = document.querySelectorAll(".textoDaPergunta")
    for(let i = 0; i < titulo_perguntas.length; i++){
        const titulo = titulo_perguntas[i].value
        const caracteres1 = titulo.split("")
        if(caracteres1.length < 20){
            alert("preencher os dados corretamente.")
        }
    }

  // validação do título  

}*/
   

/* tela Crie suas perguntas */


/*função para enviar o quiz pro servidor */

function enviaQuizz(){
    let titulo, cor_de_fundo, resposta_correta, url_img, resposta_incorreta
    const caixa1 = document.querySelectorAll(".caixa1")
    const obj = {
        title: document.querySelector(".tituloQuiz").value,
        image: document.querySelector(".imagemQuiz").value,
        questions:[],
        levels:[]
    }
    for(let i = 0; i < caixa1.length; i++){
        const element = caixa1[i]
        const texto_pergunta = element.querySelector(".textoDaPergunta").value
        const cor_fundo = element.querySelector(".corDoFundo").value
        const resp_correta = element.querySelector(".RespostaCorreta").value
        const url_img_correta = element.querySelector(".urlDaImagemCorreta").value
        const obj_pergunta = {
            title: texto_pergunta,
			color: cor_fundo,
            answers: [
				{
					text: resp_correta,
					image: url_img_correta,
					isCorrectAnswer: true
				},
			]
        }

        const texto_resp_incorretas = element.querySelectorAll(".respostaIncorreta")
        const url_resp_incorretas = element.querySelectorAll(".urlDaImagem")
        for(let i = 0; i <texto_resp_incorretas.length; i++){
            const texto_resp_incorreta = texto_resp_incorretas[i].value
            const url_resp_incorreta = url_resp_incorretas[i].value

            const obj_resp = {
                text: texto_resp_incorreta,
                image: url_resp_incorreta,
                isCorrectAnswer: false
            }
            obj_pergunta.answers.push(obj_resp)
        }
        obj.questions.push(obj_pergunta)

    }
    const niveis = document.querySelectorAll(".caixaNivel")
    for(let i = 0; i < niveis.length; i++){
        const element = niveis[i]
        const titulo_nivel = element.querySelector(".tituloNivel").value
        const porcentagem_acerto = element.querySelector(".porcentagemAcerto").value
        const url_nivel = element.querySelector(".urlNivel").value
        const descricao_nivel = element.querySelector(".descricaoNivel").value
        
        const obj_nivel = {
            title: titulo_nivel,
			image: url_nivel,
			text: descricao_nivel,
			minValue: Number(porcentagem_acerto)
        }
        obj.levels.push(obj_nivel)
    }

    /*pegar os titulos das perguntas */
    //console.log(obj)

    const promessa = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", obj)
    promessa.then((res)=>{
        const quizes_usuarios = JSON.parse(localStorage.getItem("quizes_usuarios"))
        if(quizes_usuarios){
            localStorage.setItem("quizes_usuarios", JSON.stringify([res.data.id, ...quizes_usuarios]))
        }else{
            localStorage.setItem("quizes_usuarios", JSON.stringify([res.data.id]))
        }
        
    })
    
}

/*função para enviar o quiz pro servidor */

function atualizar_seus_quizes(){
    let minha_galeria = document.querySelector(".minhaGaleria")
    const quizes_usuarios = JSON.parse(localStorage.getItem("quizes_usuarios"))
    for(let i = 0; i < quizes_usuarios.length; i++){
        //console.log(quizes_usuarios[i])
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizes_usuarios[i]}`)
        promessa.then((res)=>{
            // console.log(`id:${quizes_usuarios[i]}`)
            // console.log(res.data.title)
            // console.log(res.data.image)
            // console.log("****************************")
            minha_galeria.innerHTML += `
            <div class="meuQuiz meuQuiz${i + 1}">
                <img src="${res.data.image}"/>
                <p>${res.data.title}</p>
            </div>
            `
        })
    }
}

atualizar_seus_quizes()
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
    document.querySelector('.primeiraParte').classList.add('desligado')
    document.querySelector('.segundaParte').classList.remove('desligado')
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
        <!--Fecha caixa pergunta 1-->

        <div class="respostaCorreta">
            <h1>Resposta Correta</h1>
            <input
                class="RespostaCorreta"
                type="text"
                placeholder="Resposta Correta"
            />
            <input
                class="urlDaImagemCorreta"
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
 //botao 1 ativa redenriza perguntas       
 botao_criar_pergunta.addEventListener("click", renderizaPergunta)

function renderiza(){
    renderizaPergunta()
    renderizaNivel() 
}

// função cria quantidade de niveis passadas 
function renderizaNivel(elemento) {
    const quantidadeNivel = document.querySelector('.nivelQuiz').value
    document.querySelector('.niveis').innerHTML = ""
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



let botao_finalizar_quizz = document.querySelector(".terceiraParte .botaoNivel")

function info_basica_Nivel() {
    //console.log(quantidadeNivel)
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
    enviaQuizz()
}



botao_finalizar_quizz.addEventListener("click", info_basica_Nivel)
   

function voltar_home(){
    document.querySelector('.quartaParte').classList.add('desligado')
    document.querySelector('.primeiraTela').classList.remove('desligado')
}
botao_voltar_home.addEventListener("click", voltar_home)


function cria_quizzes(){
    document.querySelector('.primeiraTela').classList.add('desligado')
    document.querySelector('.primeiraParte').classList.remove('desligado')
}

botao_criar_quizz.addEventListener("click", cria_quizzes)
