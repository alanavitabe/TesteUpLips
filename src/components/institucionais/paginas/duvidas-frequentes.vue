<template lang="html">
  <section>
    <div class="duvidasContainer-topo">
      <h1 class="vitabe-t1"> Perguntas Frequentes </h1>
      <p class="vitabe-t2"> Veja as principais dúvidas dos nossos clientes. </p>
      <p class="vitabe-t2"> Caso ainda tenha alguma pergunta que não apontamos aqui, fale com um de nossos canais de atendimento. </p>
    </div>
    <div class="duvidasContainer">
      <div class="duvidasContainer-item" v-for=" (item, i) in itens " :key=" i ">
        <p class="institucional-t1" @click=" $slideToggle($refs[`faq${i}`][0]); $event.target.classList.toggle('ativo') ">
          {{ item.pergunta }}
          <i class="fa fa-caret-right"></i>
        </p>
        <div :ref=" `faq${i}` " class="duvidasContainer-item-text">
          <p v-html="item.resposta"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { 
      itens: [
        {
          pergunta: "Up Lips realmente funciona?",
          resposta:
            "Sim. Após uma série de pesquisas e testes científicos foi comprovada a eficácia com mais de 99% de satisfação, garantindo o volume e dando mais forma ao contorno dos lábios."
        },
        {
          pergunta: "Qual a cor do Up Lips? Pode usar antes ou depois do batom matte?",
          resposta:
            "Transparente. Aconselhamos utilizar antes do batom matte para evitar o ressecamento e desidratação dos lábios. O ideal é aplicar, aguardar 10 minutos para potencialização e efeito, retirar o excesso e aplicar o batom de sua preferência. Caso deseje um efeito de brilho intenso, sugerimos aplicar o Up Lips após o batom.",
        },
        {
          pergunta: "O que é o Ácido Hialurônico?",
          resposta:
            "O Ácido Hialurônico é um ativo produzido naturalmente pelo corpo que possui propriedades hidratantes e estimulantes de colágeno. A partir dos 25 anos, a produção do ácido pelo corpo diminui, afetando diretamente os lábios (que ficam mais finos) e a pele, ocasionando o aparecimento das rugas, da flacidez e a perda do viço.",
        },
        {
          pergunta: "Como usar?",
          resposta:
            "Aplique sobre os lábios deslizando o aplicador do centro para as laterais e aguarde 5 minutos para o efeito de aumento de volume.",
        },
        {
          pergunta: "Quanto tempo dura o efeito de volume?",
          resposta:
            "O efeito varia muito de pele para pele. Temos relatos que a sensação de volume chega até 2h e o efeito de hidratação a até 24h.",
        },
        {
          pergunta: "Existe alguma contraindicação (grávida ou diabético)?",
          resposta:
            "O Up Lips não tem nenhuma contraindicação para grávidas ou diabéticos. Sua formulação é balanceada, possui testes de eficácia comprovada e é dermatologicamente testado.",
        },
        {
          pergunta: "Pode ser utilizado por quem fez algum procedimento estético nos lábios?",
          resposta:
            "Sim, inclusive ele é indicado para o pós-preenchimento labial (Ácido Hialurônico injetável) para potencializar o efeito e também para deixar os lábios hidratados.",
        },
        {
          pergunta: "Pode ser usado por quem faz tratamento de pele com Roacutan?",
          resposta:
            "Sim, o Up Lips possui um alto poder de hidratação, regeneração da pele e sensação de alívio para os lábios, auxiliando no tratamento, que resseca muito a pele.",
        },
        {
          pergunta: "Qual prazo de entrega do Up lips?",
          resposta:
            "O Up Lips é despachado em média de 24h úteis após aprovação do pagamento, mas dependemos da agilidade dos Correios para que as entregas sejam feitas até o seu endereço. <br>Abaixo os prazos médios:<br> Região Sudeste - de 3 a 5 dias<br> Região Sul - de 4 a 6 dias<br> Região Centro-Oeste - de 4 a 6 dias<br> Região Nordeste - de 5 a 10 dias<br> Região Norte - de 7 a 17 dias<br>",
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
section {
  margin-bottom: 90px;
}
.duvidasT1 {
  display: block;
  color: #444;
  font-size: 14px;
}
.duvidasContainer-topo {
  margin: 40px 0 0;
}
.institucional-t1 {
  border-bottom: 1px solid #dbdbdb;
}
.duvidasContainer {
  overflow: hidden;
  border-radius: 4px;
}
.duvidasContainer-item {
  padding: 10px 0 0;
  border-bottom: none;
}
.duvidasContainer-item-text {
  overflow: hidden;
  display: none;
}
.duvidasContainer-item-text p {
  font-size: 14px;
  display: block;
  color: #828282;
  text-align: justify;
  padding: 10px;
}
.institucional-t1 i {
  transition: 200ms;
}
.institucional-t1.ativo i {
  transform: rotate(90deg);
}
@media (max-width: 767px) {
  .institucional-t1 {
    font-size: 14px;
  }
  .duvidasContainer-topo {
    margin: 0;
  }
}
</style>