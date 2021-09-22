<template lang="html">
  <div id="vitabe-chat"> 
      <img class="animate__pulse" width="70%" src="@/assets/img/chat-vitabe.png" rel="preload" alt="">
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<script> 

  (function(){

  function parse(val) {
      var result = undefined,
          tmp = [],
          items = location.search.substr(1).split("&");
      for (var index = 0; index < items.length; index++) {
          tmp = items[index].split("=");
          if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
      }
      return result;
  }

  var randomNum = Math.floor(3 * Math.random() + 1);
  var message = parse("mensagem");
  var template = parse("template");
  var botVersion;
  if (message) { 
      botVersion = template;
  }

  var url = "https://dtbot.directtalk.com.br/1.0/staticbot/dist/js/dtbot.js?token=d3b67150-ac8b-46be-a9b6-202547e0086e&widget=true&top=40&text=Alguma%20d%C3%BAvida%3F&textcolor=ffffff&bgcolor=4E1D3A&from=bottomRight";
  
  var link = document.createElement("link");
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://www5.directtalk.com.br/clientes/custom/VitabeGroup/style.css';
  // link.href = 'style.css';
  document.body.appendChild(link);
  console.log(document.body);

  var script = document.createElement("script");
  script.setAttribute("id", "dtbot-script"),
  script.src = url,
  document.body.appendChild(script);
  
  var src;
  var params;
  var customLauncher;
  var isBotLoaded = function() {
      if (window.DTBOT && window.DTBOT.loaded) {
          
          var firstopen = false;
          document.body.insertAdjacentHTML('beforeend', "<div stylesheet='visibility:hidden!important' id='bot'><span id='bot-span'>Como podemos ajudar?</span></div><div style='display: none' id='fechar'><span id='bot-fechar'>x</span></div>");

          customLauncher = document.querySelector("#bot"),
          customLauncher.addEventListener("click", function() {

              src = document.querySelector("#dt-widget").src;

              if(src.split('?').length == 2){
                  var testeSplit = src.split('?');
                  testeSplit = testeSplit[1];
                  window.DTBOT.start('&' + testeSplit);     
              }else{
                  window.DTBOT.start();
              }
          });

          window.DTBOT.onShow = function() {
              customLauncher.style.visibility = 'hidden';
              firstopen = true;
          };

          window.DTBOT.onHide = function() {
              //MUDAR AQUI PARA O ANTIGO E NOVO!
              customLauncher.style.visibility = 'visible';
          };

          closeWidget = document.querySelector("#bot-fechar");
          
          closeWidget.addEventListener("click", function(e) {
              customLauncher.style.display = 'none';
              closeWidget.style.display = 'none';
          });

          window.DTBOT.onShow = function() {
              customLauncher.style.visibility = 'hidden';
              closeWidget.style.visibility = 'hidden';
              firstopen = true;
          };

          window.DTBOT.onHide = function() {
              //MUDAR AQUI PARA O ANTIGO E NOVO!
              customLauncher.style.visibility = 'visible';
              closeWidget.style.visibility = 'visible';
          };

          clearInterval(refreshIntervalId);
      }
  }

  var refreshIntervalId = setInterval(isBotLoaded, 120);
})();



  $(function(){
    $("#vitabe-chat").click(function(){
      $("#dtbot-iframe").css('visibility', 'visible').css('opacity', 1).css('right', '0px').css('left', 'auto');
    }); 
  });
import "animate.css"
import Comunicacao from '@/comunicacao';
export default {
  data() {
    return {
      config: false
    }
  },
  created() {
    Comunicacao.$on('configCarregada', response => {
      this.config = response.configuracoes
    });
  }
}
</script>

<style lang="css" scoped>
#vitabe-chat{
  bottom: 15px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  right: 15px;
  border-radius: 50%;
  position: fixed;
  cursor: pointer;
  z-index: 10;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* width: 236px !important; */
  /* height: 150px !important; */
  visibility: visible;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-align: center;
  background-color: #18c161;
  height: 75px;
  width: 75px;
  box-shadow: 0 0 35px green;
  animation: pulsate 1s ease-out infinite;
}
#vitabe-chat img{
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
@-webkit-keyframes pulsate {
  0%   { box-shadow: 0 0 0 black; }
  50%  { box-shadow: 0 0 35px green; }
  100% { box-shadow: 0 0 0 green; }
}
</style>
