<template>
    <section class="duvidasHome">
        <div class="container">
            <h1 style="text-align: center;">Dúvidas sobre o Up Lips</h1>
            <div class="row">
                <div class="col-sm-6">
                    <div class="element">
                        <div class="question">
                            <h3>Up Lips realmente funciona?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>
                                Sim. Após uma série de pesquisas e testes científicos foi comprovada a eficácia com mais de 99% de satisfação, garantindo o volume e dando mais forma ao contorno dos lábios.                             </p>
                        </div>
                    </div><!---element-->
                    <div class="element">
                        <div class="question">
                            <h3>Qual a cor do Up Lips?  Pode usar antes ou depois do batom matte?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>
                            Transparente. Aconselhamos utilizar antes do batom matte para evitar o ressecamento e desidratação dos lábios. O ideal é aplicar, aguardar 10 minutos para potencialização e efeito, 
                            retirar o excesso e aplicar o batom de sua preferência. Caso deseje um efeito de brilho intenso, sugerimos aplicar o Up Lips após o batom.                            </p>
                        </div>
                    </div><!---element-->
                    <div class="element">
                        <div class="question">
                            <h3>O que é o Ácido Hialurônico?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>
                            O Ácido Hialurônico é um ativo produzido naturalmente pelo corpo que possui propriedades hidratantes e estimulantes de colágeno. A partir dos 25 anos, a produção do ácido 
                            pelo corpo diminui, afetando diretamente os lábios (que ficam mais finos) e a pele, ocasionando o aparecimento das rugas, da flacidez e a perda do viço.                            </p>
                        </div>
                    </div><!---element-->
                    <div class="element">
                        <div class="question">
                            <h3>Como usar?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p> Aplique sobre os lábios deslizando o aplicador do centro para as laterais e aguarde 5 minutos para o efeito de aumento de volume.</p>
                        </div>
                    </div><!---element-->
                </div>


                <div class="col-sm-6">
                    <div class="element">
                        <div class="question">
                            <h3>Quanto tempo dura o efeito de volume?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>
                            O efeito varia muito de pele para pele. Temos relatos que a sensação de volume chega até 2h e o efeito de hidratação a até 24h.                            </p>
                        </div>
                    </div><!---element-->
                    <div class="element">
                        <div class="question">
                            <h3>Existe alguma contraindicação (grávida ou diabético)?</h3>
                                <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>
                           O Up Lips não tem nenhuma 
                           contraindicação para grávidas ou diabéticos. Sua formulação é balanceada, possui testes de eficácia comprovada e é dermatologicamente testado.             </p>
                        </div>
                    </div><!---element-->
                    <div class="element">
                        <div class="question">
                            <h3>Pode ser utilizado por quem fez algum procedimento estético nos lábios?</h3>                            
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>
                            Sim, inclusive ele é indicado para o pós-preenchimento labial (Ácido Hialurônico injetável) para potencializar o efeito e também para deixar os lábios hidratados.                            </p>
                        </div>
                    </div><!---element-->
                    <div class="element">
                        <div class="question">
                            <h3>Pode ser usado por quem faz tratamento de pele com Roacutan?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>Sim, o Up Lips possui um alto poder de hidratação, regeneração da pele e sensação de alívio para os lábios, 
                               auxiliando no tratamento, que resseca muito a pele.
                            </p>
                            </div>
                        </div><!---element-->
                    </div>
                </div>
            <div class="row">
                <a href="/produtos" class="facaSeuPedido my-4">FAÇA SEU PEDIDO</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
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
<style lang="scss" scoped>
.duvidasHome{
    .col-sm-6{
        .text-center{
            p{
                margin-bottom:40px;
            }
            h1{
                margin-bottom:20px;
            }
        }
        
    }
    .element{
        margin:10px 0px;
        .hideText{
            display:none;
        }
        .question{
            display:flex;
            justify-content:space-between;
            padding: 10px;
            border: 1px solid #d7d7d7;
            border-radius: 30px;
            padding-left: 40px;
            h3{
                font-family: 'Open Sans', sans-serif;
                font-size: 14px;
                text-align: left;
                margin: 0 !important;
                display: flex;
                align-content: center;
                align-self: center;
                font-weight: 500;
            }
            button{
                border:none;
                background-color:transparent;
                i{
                    color:#777777;
                    font-size:20px;
                }
            }
        }
        .answer{
            padding:10px 20px;
            p{
                font-family: 'Open Sans', sans-serif;
                color: #777777;
                text-align: justify;
                font-size: 13px;
            }
        }
    }
}
</style>