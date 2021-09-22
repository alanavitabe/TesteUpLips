<template>
<section class="duvidasSingle">
  <h4 style="font-family: Oswald, sans-serif !important;color: rgb(0, 0, 0) !important;">Perguntas Frequentes</h4>
<br>
<div class="perguntasSingle">
    <div class="element">
        <div class="question">
            <h3>Como devo usar?</h3>
            <button>
            <i class="fa fa-caret-right"></i>
            </button>
        </div><!--question-->
        <div class="answer hideText">
        <p>            
            Aplique sobre os lábios deslizando o aplicador do centro para as laterais e aguarde 5 minutos para o efeito de aumento de volume.
        </p>
        </div>
    </div><!--element-->
    <div class="element">
    <div class="question">
    <h3>Quanto tempo dura o efeito de volume?
</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
        O efeito varia muito de pele para pele. Temos relatos que a sensação de volume chega até 2h e o efeito de hidratação a até 24h.
    </p>
    </div>
    </div>
    <div class="element">
    <div class="question">
    <h3>Qual a cor do Up Lips? Pode usar antes ou depois do batom matte?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
        Transparente. Aconselhamos utilizar antes do batom matte para evitar o ressecamento e desidratação dos lábios. O ideal é aplicar, aguardar 10 minutos para potencialização e efeito, retirar o excesso e aplicar o batom de sua preferência. Caso deseje um efeito de brilho intenso, sugerimos aplicar o Up Lips após o batom.
    </p>
    </div>
    </div>
    <div class="element">
    <div class="question">
    <h3>O que é o Ácido Hialurônico?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
        O Ácido Hialurônico é um ativo produzido naturalmente pelo corpo que possui propriedades hidratantes e estimulantes de colágeno. A partir dos 25 anos, a produção do ácido pelo corpo diminui, afetando diretamente os lábios (que ficam mais finos) e a pele, ocasionando o aparecimento das rugas, da flacidez e a perda do viço.
    </p>
    </div>
    </div>
    <div class="element">
    <div class="question">
    <h3>Pode ser utilizado por quem fez algum procedimento estético nos lábios?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
        Sim, inclusive ele é indicado para o pós-preenchimento labial (Ácido Hialurônico injetável) para potencializar o efeito e também para deixar os lábios hidratados.
    </p>
    </div>
    </div>

    <div class="element">
    <div class="question">
    <h3>Pode ser usado por quem faz tratamento de pele com Roacutan?</h3>
    <button>
    <i class="fa fa-caret-right"></i>
    </button>
    </div>
    <div class="answer hideText">
    <p>
        Sim, o Up Lips possui um alto poder de hidratação, regeneração da pele e sensação de alívio para os lábios, auxiliando no tratamento, que resseca muito a pele.</p>
    </div>
    </div>
</div>  
</section>
</template>
<script>
export default {
    name: 'DuvidasSingle',
    mounted(){
        
    const elements = document.querySelectorAll('.element');
        elements.forEach(element =>{
        let question = element.querySelector('.question');
        // let btn = element.querySelector('.question button');
        let icon = element.querySelector('.question button i');
        var answer = element.lastElementChild;
        var answers = document.querySelectorAll('.element .answer');
        // var elBorder = document.querySelectorAll('.element');
        question.addEventListener('click', ()=>{
        answers.forEach(ans =>{
        let ansIcon = ans.parentElement.querySelector('button i');
        if(answer !== ans){
        ans.classList.add('hideText');
        ansIcon.className = 'fa fa-caret-right';
        }
        });

        answer.classList.toggle('hideText');
        icon.className === 'fa fa-caret-right' ? icon.className = 'fa fa-caret-down' 
        : icon.className ='fa fa-caret-right';
        });
    });
    }
}
</script>
<style scoped>
.question{
display:flex;
justify-content:space-between;
cursor:pointer;
}
.question button{
    border:none;
    background-color:transparent;
    color:#000;
}
.element{
padding:7px 0px;
}
.element h3{
font-size:18px;
font-weight: 500;
font-family: 'Oswald';
color:#000;
}
.answer{
    margin: 10px 0px;
}
.answer p{
    font-size:13px;
}
.hideText{
display:none;
}
</style>