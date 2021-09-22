<template>
    <section class="kitProdutos">
        <div class="container">
            <div class="titleSection text-center">
                <h1>Escolha seu tratamento</h1>
                <p style="    color: #777777;">Compre agora e garanta volume e preenchimento labial</p>
            </div>
            <div class="row">

                <div class="col-sm-4 order-2 order-sm-1 bloco1" id="bloco1">
                    <div class="col-sm-12 mainContent"
                    style="
                        border-radius:25px;
                        border: 1px solid #000;
                        text-align:center;
                         ">
                        <div class="col-sm-12 colTitulo"
                        style="
                            border-top-left-radius:20px;
                            border-top-right-radius:20px;
                            background-color:#f4546a;
                            ">
                            <p style="font-size: 20px;">COMPRE 1 LEVE 2</p>
                            <p>Up lips em dobro</p>
                        </div><!--col--titulo-->
                        <div class="col-sm-12 colImagem">
                            <img class="imgResponsive" :src="require('@/assets/img/upLips_img/uplips1-1.png')" alt="Renova Be 1 Pote - Vitabe" id="param">
                           <div class="flag-frete">
                            <img src="@/assets/img/upLips_img/flag-frete-gratis-renova.gif" alt="Frete Grátis Renova Be" style="position:absolute; top:10%; left:5%;">
                        </div>
                        </div><!--col-da-imagem-->
                        <div class="col-sm-12">
                            <p style="font-size: 15px; color: #888"><s>De: R$ 99,90</s></p>
                            <p style="font-size: 15px; color: #888; margin-top: -15px"> <br>
                                Por apenas:
                                <span style="color: #000; font-weight: bold; font-size: 15px">R$ 89,70</span>
                            </p>
                            <img src="@/assets/renova/img-ou.png" class="imgResponsive" alt="">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">12x sem juros de</p>
                            <span style="color:#000;font-weight:700;font-size:45px;font-family: 'Helvetica',sans-serif;">R$ 7,48</span>
                            <!--option-->
                            <div class="custom-select1" style="width:200px;">
                              <select class="uplips1 optionRenova" id="variation_1" name="variation[0]" required="">
                                  <option selected="selected">SELECIONE A COR:</option>
                                  <option value="Nude" data-param="2">Nude</option>
                                  <option value="Vermelho"  data-param="3">Vermelho</option>
                                  <option value="Incolor"  data-param="1">Incolor</option>
                                  <option value="Multicolor 1"  data-param="5">Multicolor 1</option>
                                  <option value="Multicolor 2" data-param="6">Multicolor 2</option>
                                  <option value="Multicolor 3" data-param="7">Multicolor 3</option>
                              </select>
                            </div>
                            <br class="mob">

                            <!--option-->

                            <input id="BtnComprarV1-1" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes btnComprarAtivo" @click="addCartBoxCompra1Inc()">
                            <input id="BtnComprarV1-2" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes" @click="addCartBoxCompra1Nud()">
                            <input id="BtnComprarV1-3" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes" @click="addCartBoxCompra1Ver()">
                            <input id="BtnComprarV1-5" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes" @click="addCartBoxCompra1Mult1()">
                            <input id="BtnComprarV1-6" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes" @click="addCartBoxCompra1Mult2()">
                            <input id="BtnComprarV1-7" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes" @click="addCartBoxCompra1Mult3()">
                            <img class="imgResponsive ico-frete" src="@/assets/renova/ico-frete-gratis.png" alt="">
                        </div><!--col-do-preço-->
                    </div><!--container--geral-->
                </div><!--bloco1-->
                <div class="col-sm-4 bloco2 order-1 order-sm-2" id="bloco2">
                    <div class="col-sm-12 mainContent"
                    style="
                        border-radius:25px;
                        border: 1px solid #000;
                        border:1px solid #000;
                        text-align:center;
                        ">
                        <div class="col-sm-12 colTitulo"
                        style="
                            border-top-left-radius:20px;
                            border-top-right-radius:20px;
                            background-color:#000;
                            text-align: center;
                            justify-content: center;
                            height: 86px;">

                           <div class="black libre" style="font-size: 20px;">
                                <font style="color: #fff; font-weight: 700">COMPRE 2</font>
                                <font style="color: #f4546a; font-weight: 700"> LEVE 4</font>
                            </div>
                            <div style="color: #fff; font-size: 16px;display: flex; justify-content: center; align-items: center;">
                            Up lips em dobro </div>
                        </div><!--col--titulo-->
                        <div class="col-sm-12 colImagem">
                            <img class="imgResponsive" src="@/assets/img/upLips_img/uplips222-Multicolor.jpg" alt="Renova Be 1 Pote - Vitabe" id="param2">
                           <div class="flag-frete">
                            <img src="@/assets/img/upLips_img/flag-frete-gratis-renova.gif" alt="Frete Grátis Renova Be" style="position:absolute; top:10%; left:5%;">
                        </div>
                        </div><!--col-da-imagem-->
                        <div class="relogio" style="background-color:#f4546a;margin-bottom:15px;">
                            <div class="col-12 d-flex align-items-center" style="padding:7px 0px 2px 0px;">
                                <div class="col-4 relogio" style="position:relative;right:-13%;">
                                    <img src="@/assets/renova/relogio.png" alt="" style="top:-3px;position: relative;">
                                </div>
                                <div class="col-8 oferta" style="color:#fff;position:relative;left:-10%;">
                                    <p style="margin-bottom:0px;font-weight:bold;font-size:14px;">OFERTA EXPIRA EM:</p>
                                    <p id="crono" style="margin-bottom:0px;font-size:34px;font-weight:bold;"></p>
                                </div>
                            </div>
                        </div><!--div do relógio-->
                        <div class="col-sm-12">
                            <p style="font-size: 15px; color: #888"><s>De: R$ 239,70</s></p><br>
                            <p style="font-size: 15px; color: #888; margin-top: -15px">
                            Por apenas:
                            <span style="color: #000; font-weight: bold; font-size: 15px">R$ 149,70</span>
                            </p>
                            <img src="@/assets/renova/img-ou.png" class="imgResponsive" alt="">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">12x sem juros de</p>
                            <span style="color:#000;font-weight:700;font-size:45px;font-family: 'Helvetica',sans-serif;">R$ 12,48</span>
                            <br class="mob">
                            <!--option-->
                            <div class="custom-select2" style="width:200px;">
                              <select class="uplips2 optionRenova" id="variation_2" name="variation[0]" required="">
                              <option selected="selected">SELECIONE A COR:</option>
                                  <option value="Nude" data-param="2">Nude</option>
                                  <option value="Vermelho"  data-param="3">Vermelho</option>
                                  <option value="Incolor"  data-param="1">Incolor</option>
                                  <option value="Multicolor 1"  data-param="5">Multicolor 1</option>
                                  <option value="Multicolor 2" data-param="6">Multicolor 2</option>
                                  <option value="Multicolor 3" data-param="7">Multicolor 3</option>
                                  <option value="Multicolor" data-param="4">Multicolor</option>
                              </select>
                            </div>

                            <!--option-->

                            <input id="BtnComprarV2-4" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes2 btnComprarAtivo2" @click="addCartBoxCompra2Mult()">
                            <input id="BtnComprarV2-5" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes2" @click="addCartBoxCompra2Mult1()">
                            <input id="BtnComprarV2-6" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes2" @click="addCartBoxCompra2Mult2()">
                            <input id="BtnComprarV2-7" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes2" @click="addCartBoxCompra2Mult3()">
                            <input id="BtnComprarV2-1" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes2" @click="addCartBoxCompra2Inc()">
                            <input id="BtnComprarV2-2" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes2" @click="addCartBoxCompra2Nud()">
                            <input id="BtnComprarV2-3" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes2" @click="addCartBoxCompra2Ver()">
                            <img class="imgResponsive ico-frete" src="@/assets/renova/ico-frete-gratis.png" alt="">
                        </div><!--col-do-preço-->
                    </div><!--container--geral-->
                </div><!--bloco2-->


                <div class="col-sm-4 bloco3 order-3 order-sm-3" id="bloco3">
                    <div class="col-sm-12 mainContent"
                    style="
                        border-radius:25px;
                        border: 1px solid #000;
                        border:1px solid #000;
                        text-align:center;
                        ">

                        <div class="col-sm-12 colTitulo"
                        style="
                            border-top-left-radius:20px;
                            border-top-right-radius:20px;
                            background-color:#000;
                        ">
                            <div class="col-sm-12 colTitulo"
                        style="
                            border-top-left-radius:20px;
                            border-top-right-radius:20px;
                            background-color:#000;">
                           <p class="black libre" style="font-size: 20px; margin-top: -10px">
                                <font style="color: #fff; font-weight: 700">COMPRE 3</font>
                                <font style="color: #f4546a; font-weight: 700"> LEVE 6</font>
                            </p>>
                            <p style="color: #fff; font-size: 16px; margin-top: -20px">
                            Up lips em dobro </p>
                        </div><!--col--titulo-->
                        </div><!--col--titulo-->

                        <div class="col-sm-12 colImagem">
                            <img class="imgResponsive" src="@/assets/img/upLips_img/uplips333-Multicolor.png" alt="Renova Be 1 Pote - Vitabe" id="param3">
                        <div class="flag-frete">
                            <img src="@/assets/img/upLips_img/flag-frete-gratis-renova.gif" alt="Frete Grátis Renova Be" style="position:absolute; top:10%; left:5%;">
                        </div>
                        </div><!--col-da-imagem-->
                        <div class="relogio" style="background-color:#f4546a;margin-bottom:15px;">
                            <div class="col-12 d-flex align-items-center" style="padding:7px 0px 2px 0px;">
                                <div class="col-4 relogio" style="position:relative;right:-13%;">
                                    <img src="@/assets/renova/relogio.png" alt="" style="top:-3px;position: relative;">
                                </div>
                                <div class="col-8 oferta" style="color:#fff;position:relative;left:-10%;">
                                    <p style="margin-bottom:0px;font-weight:bold;font-size:14px;">OFERTA EXPIRA EM:</p>
                                    <p id="crono1" style="margin-bottom:0px;font-size:34px;font-weight:bold;"></p>
                                </div>
                            </div>
                        </div><!--div do relógio-->
                        <div class="col-sm-12">
                           <p style="font-size: 15px; color: #888"><s>De: R$ 399,50</s></p>
                           <br>
                            <p style="font-size: 15px; color: #888; margin-top: -15px">
                            Por apenas:
                            <span style="color: #000; font-weight: bold; font-size: 15px">R$ 197,90</span>
                            </p>
                            <img src="@/assets/renova/img-ou.png" class="imgResponsive" alt="">
                            <p style="color:#8f8f8f;font-size:18px;margin-bottom:0px;">12x sem juros de</p>
                            <span style="color:#000;font-weight:700;font-size:45px;font-family: 'Helvetica',sans-serif;">R$ 16,49</span>
                            <br class="mob">
                            <!--option-->
                            <div class="custom-select3" style="width:200px;">
                              <select id="variation_3" class="optionRenova" required="">
                                  <option value="" selected="selected" data-param="1">SELECIONE A COR</option>
                                  <option value="Multicolor" data-param="1">Multicolor</option>
                                  <option value="Nude" data-param="2">Nude</option>
                                  <option value="Vermelho" data-param="3">Vermelho</option>
                                  <option value="Incolor" data-param="4">Incolor</option>
                                  <option value="Multicolor 1" data-param="5">Multicolor 1</option>
                                  <option value="Multicolor 2" data-param="6">Multicolor 2</option>
                                  <option value="Multicolor 3" data-param="7">Multicolor 3</option>
                              </select>
                            </div>
                            <!--option-->

                            <input id="BtnComprarV3-1" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes3 btnComprarAtivo3" @click="addCartBoxCompra3Mult()">
                            <input id="BtnComprarV3-5" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes3" @click="addCartBoxCompra3Mult1()">
                            <input id="BtnComprarV3-6" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes3" @click="addCartBoxCompra3Mult2()">
                            <input id="BtnComprarV3-7" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes3" @click="addCartBoxCompra3Mult3()">
                            <input id="BtnComprarV3-4" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes3" @click="addCartBoxCompra3Inc()">
                            <input id="BtnComprarV3-2" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes3" @click="addCartBoxCompra3Nud()">
                            <input id="BtnComprarV3-3" type="submit" value="COMPRE AGORA" class="btnComprar BtnVariacoes3" @click="addCartBoxCompra3Ver()">
                            <img class="imgResponsive ico-frete" src="@/assets/renova/ico-frete-gratis.png" alt="">
                        </div><!--col-do-preço-->
                    </div><!--container--geral-->
                </div><!--bloco3-->



            </div><!--row-->
        </div><!--container-->
    </section>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    function getCookie(nomeCookie) {
        var name = nomeCookie + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
//import Comunicacao from '@/comunicacao.js'
import Comunicacao from '@/comunicacao.js';
import { mapMutations } from 'vuex';

export default {
    mounted(){
        //Custom Select 1
        (function () {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select1");
        l = x.length;
        for (i = 0; i < l; i++) {
          var param;
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          /*for each element, create a new DIV that will act as the selected item:*/
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /*for each element, create a new DIV that will contain the option list:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;

            c.setAttribute("data-param", selElmnt.options[j].getAttribute('data-param'));
            c.setAttribute("class", selElmnt.options[j].innerHTML.replace(' ', '_'));
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected-1");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      // y[k].removeAttribute("class");
                    }
                    // this.setAttribute("class", "same-as-selected-1");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
              /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
          /*a function that will close all select boxes in the document,
          except the current select box:*/
          var x, y, i, xl, yl, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
        })();



        //Custom Select 2
        (function () {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select2");
        l = x.length;
        for (i = 0; i < l; i++) {
          var param;
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          /*for each element, create a new DIV that will act as the selected item:*/
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /*for each element, create a new DIV that will contain the option list:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;

            c.setAttribute("data-param", selElmnt.options[j].getAttribute('data-param'));
            c.setAttribute("class", selElmnt.options[j].innerHTML.replace(' ', '_'));
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected-1");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      // y[k].removeAttribute("class");
                    }
                    // this.setAttribute("class", "same-as-selected-1");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
              /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
          /*a function that will close all select boxes in the document,
          except the current select box:*/
          var x, y, i, xl, yl, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
        })();
        //end select2



        //Custom Select 3
        (function () {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select3");
        l = x.length;
        for (i = 0; i < l; i++) {
          var param;
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          /*for each element, create a new DIV that will act as the selected item:*/
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /*for each element, create a new DIV that will contain the option list:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;

            c.setAttribute("data-param", selElmnt.options[j].getAttribute('data-param'));
            c.setAttribute("class", selElmnt.options[j].innerHTML.replace(' ', '_'));
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected-1");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      // y[k].removeAttribute("class");
                    }
                    // this.setAttribute("class", "same-as-selected-1");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
              /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
          /*a function that will close all select boxes in the document,
          except the current select box:*/
          var x, y, i, xl, yl, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
        })();
        //end select3




        //this.$gtmVitrineDataLayer('Escolha seu tratamento');

        // CRONOMETRO

        // Set the date we're counting down to
        var countDownDate = new Date("jan 29, 2022 23:59:59").getTime();
        // Update the count down every 1 second
        var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const textoHoras = (`00${hours}`).slice(-2);
        const textoMinutos = (`00${minutes}`).slice(-2);
        const textosegundos = (`00${seconds}`).slice(-2);

        // Display the result in the element with id="demo"
        document.getElementById("crono").innerHTML = textoHoras + ":"
        + textoMinutos + ":" + textosegundos;

        document.getElementById("crono1").innerHTML = textoHoras + ":"
        + textoMinutos + ":" + textosegundos;


        // document.getElementById("crono1").innerHTML = textoHoras + ":"
        // + textoMinutos + ":" + textosegundos;

        // document.getElementById("crono2").innerHTML = textoHoras + ":"
        // + textoMinutos + ":" + textosegundos;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
        }, 1000);
        // CRONOMETRO

        jQuery('.custom-select1 .select-items div').click(function(){
          var param = jQuery(this).attr('data-param');
          jQuery('.btnComprarAtivo').each(function(){
            jQuery(this).removeClass('btnComprarAtivo');
          });
          $('#BtnComprarV1-'+param).addClass('btnComprarAtivo');
          document.getElementById('param').setAttribute('src', require(`@/assets/img/upLips_img/uplips1-${param}.png`));
        });

        jQuery('.custom-select2 .select-items div').click(function(){
          var param = jQuery(this).attr('data-param');
          jQuery('.btnComprarAtivo2').each(function(){
            jQuery(this).removeClass('btnComprarAtivo2');
          });
          $('#BtnComprarV2-'+param).addClass('btnComprarAtivo2');
          document.getElementById('param2').setAttribute('src', require(`@/assets/img/upLips_img/uplips2-${param}.png`));
        });

        jQuery('.custom-select3 .select-items div').click(function(){
          var param = jQuery(this).attr('data-param');
          jQuery('.btnComprarAtivo3').each(function(){
            jQuery(this).removeClass('btnComprarAtivo3');
          });
          $('#BtnComprarV3-'+param).addClass('btnComprarAtivo3');
          document.getElementById('param3').setAttribute('src', require(`@/assets/img/upLips_img/uplips3-${param}.png`));
        });


        (function () {
        document.getElementById('variation_1').addEventListener('change', function() {
        var selectedOption = this.children[this.selectedIndex];

        var param = selectedOption.getAttribute("data-param");
        jQuery('.btnComprarAtivo').each(function(){
            jQuery(this).removeClass('btnComprarAtivo');
        });
        $('#BtnComprarV1-'+param).addClass('btnComprarAtivo');

        // document.getElementById('param').textContent = 'data-param = ' + param;
        document.getElementById('param').setAttribute('src', require(`@/assets/img/upLips_img/uplips1-${param}.png`));
        })
        })();

        (function () {
        document.getElementById('variation_2').addEventListener('change', function() {
        var selectedOption = this.children[this.selectedIndex];

        var param = selectedOption.getAttribute("data-param");
        jQuery('.btnComprarAtivo2').each(function(){
            jQuery(this).removeClass('btnComprarAtivo2');
        });
        $('#BtnComprarV2-'+param).addClass('btnComprarAtivo2');

        // document.getElementById('param').textContent = 'data-param = ' + param;
        document.getElementById('param2').setAttribute('src', require(`@/assets/img/upLips_img/uplips2-${param}.png`));
        })
        })();


        (function () {
        document.getElementById('variation_3').addEventListener('change', function() {
        var selectedOption = this.children[this.selectedIndex];

        var param = selectedOption.getAttribute("data-param");
        jQuery('.btnComprarAtivo3').each(function(){
            jQuery(this).removeClass('btnComprarAtivo3');
        });
        $('#BtnComprarV3-'+param).addClass('btnComprarAtivo3');

        // document.getElementById('param').textContent = 'data-param = ' + param;
         document.getElementById('param3').setAttribute('src', require(`@/assets/img/upLips_img/uplips3-${param}.jpg`));
        })
        })();

        //this.$gtmVitrineDataLayer('Escolha seu tratamento', [this.boxCompraCarrinho1Inc, this.boxCompraCarrinho1Nud]);
    },
    data(){
        return {

        boxCompraCarrinho1Inc: {
        tipo: "produto",
        itens: [
        {
            idProduto: "60",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho1Nud: {
        tipo: "produto",
        itens: [
        {
            idProduto: "66",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho1Ver: {
        tipo: "produto",
        itens: [
        {
            idProduto: "67",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho1Mult1: {
        tipo: "produto",
        itens: [
        {
            idProduto: "68",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho1Mult2: {
        tipo: "produto",
        itens: [
        {
            idProduto: "69",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho1Mult3: {
        tipo: "produto",
        itens: [
        {
            idProduto: "70",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },



      boxCompraCarrinho2Inc: {
        tipo: "produto",
        itens: [
        {
            idProduto: "71",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho2Ver: {
        tipo: "produto",
        itens: [
        {
            idProduto: "73",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho2Nud: {
        tipo: "produto",
        itens: [
        {
            idProduto: "72",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho2Mult: {
        tipo: "produto",
        itens: [
        {
            idProduto: "74",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho2Mult1: {
        tipo: "produto",
        itens: [
        {
            idProduto: "75",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho2Mult2: {
        tipo: "produto",
        itens: [
        {
            idProduto: "76",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho2Mult3: {
        tipo: "produto",
        itens: [
        {
            idProduto: "77",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },






        boxCompraCarrinho3Inc: {
        tipo: "produto",
        itens: [
        {
            idProduto: "78",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho3Ver: {
        tipo: "produto",
        itens: [
        {
            idProduto: "80",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho3Nud: {
        tipo: "produto",
        itens: [
        {
            idProduto: "79",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho3Mult: {
        tipo: "produto",
        itens: [
        {
            idProduto: "81",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho3Mult1: {
        tipo: "produto",
        itens: [
        {
            idProduto: "82",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho3Mult2: {
        tipo: "produto",
        itens: [
        {
            idProduto: "83",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
        boxCompraCarrinho3Mult3: {
        tipo: "produto",
        itens: [
        {
            idProduto: "84",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },






        boxCompraCarrinho: {
        tipo: "produto",
        itens: [
        {
            idProduto: "60",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },

        boxCompraCarrinho1: {
        tipo: "produto",
        itens: [
        {
            idProduto: "60",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },

        boxCompraCarrinho2: {
        tipo: "produto",
        itens: [
        {
            idProduto: "60",
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
        },
        ]
        },
    }
    },
    components:{

    },
    methods: {

    ...mapMutations(['changeDadosPageAtual']),

    addCartBoxCompra1Inc() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho1Inc;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          this.changeDadosPageAtual(response.data);
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra1Nud() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho1Nud;
      let itemAdc       = false
      let cupom         = getCookie("cupomroleta");
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(cupom != ""){
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra1Ver() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho1Ver;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra1Mult1() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho1Mult1;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra1Mult2() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho1Mult2;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra1Mult3() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho1Mult3;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },

    addCartBoxCompra2Mult() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2Mult;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra2Mult1() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2Mult1;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra2Mult2() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2Mult2;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra2Mult3() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2Mult3;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra2Inc() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2Inc;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra2Ver() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2Ver;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra2Nud() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2Nud;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },

    addCartBoxCompra3Mult() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho3Mult;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra3Mult1() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho3Mult1;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success) return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra3Mult2() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho3Mult2;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
           return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra3Mult3() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho3Mult3;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra3Inc() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho3Inc;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){ 
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra3Ver() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho3Ver;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra3Nud() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho3Nud;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },


    addCartBoxCompra() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra1() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho1;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho1.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    addCartBoxCompra2() {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = this.boxCompraCarrinho2;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {
          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho2.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success){
            if(getCookie("cupomroleta") != ""){
              var cupom = getCookie("cupomroleta");
              $.ajax({
                url: "https://www.uplips.com.br/checkout/ajax/ajax-cupom-desconto.php",
                type: "post",
                data: {
                  'cupom': cupom
                }
              })
            }
            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          }
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    },
    }
}
</script>

<style lang="scss" scoped>
    .BtnVariacoes3{
        display: none;
    }
    .btnComprarAtivo3{
        display: block;
        margin: 0 auto;
    }
    .BtnVariacoes2{
        display: none;
    }
    .btnComprarAtivo2{
        display: block;
        margin: 0 auto;
    }
    .BtnVariacoes{
        display: none;
    }
    .btnComprarAtivo{
        display: block;
        margin: 0 auto;
    }

    .kitProdutos{
        .optionRenova{
            padding: 10px 26px;
            margin: 10px 0px 20px 0px;
            min-width:230px !important;
            max-width:230px !important;
        }

        .mainContent{
            padding:0px;
        }
        .titleSection{
            margin-bottom:30px;
        }
        .bloco1, .bloco3{
            margin-top:50px;
        }
        padding:30px 0px;
        .colTitulo{
            padding:15px 0;
        }
        .colTitulo p:first-child{
            color:#fff;
            font-size:30px;
            font-weight:bold;
        }
        .colTitulo p:last-child{
            color:#fff;
        }


        .imgResponsive{
            max-width: 100%;
        }
        .btnComprar{
            background-color:#04b900;
            color:#fff;
            font-weight: bold;
            width:200px;
            height:60px;
            border-radius:6px;
            font-family: 'Helvetica',sans-serif;
            border:none;
            cursor: pointer;
            transition: 0.4s ease;
        }
        .btnComprar:hover{
            opacity: 0.8;
        }
        .ico-frete{
            margin:20px 0px 30px 0px;
        }
    }
    @media screen and (max-width: 768px){

        .bloco1,
        .bloco2,
        .bloco3{
            margin:0px 0px 50px 0px !important;
        }
        .kitProdutos .btnComprar{
           width: 180px;
        }
        .kitProdutos .optionRenova{
        min-width: 100px !important;
        max-width: 100px !important;
        }
        .relogio img{
            margin-right: 30px;
        }
        .order-1 .oferta{
            width: 30px;
            margin-left: 20px;
            font-size: 20px
        }
        .order-3 .oferta{
            width: 30px;
            margin-left: 20px;
            font-size: 20px
        }
        }

</style>


<style>
/*the container must be positioned relative:*/
.custom-select1 {
  position: relative;
  font-family: Arial;
  display: block;
  margin: 10px auto;
  width: 80% !important;
}

.custom-select2 {
  position: relative;
  font-family: Arial;
  display: block;
  margin: 10px auto;
  width: 80% !important;
}

.custom-select3 {
  position: relative;
  font-family: Arial;
  display: block;
  margin: 10px auto;
  width: 80% !important;
}

.custom-select1 select {
  display: none; /*hide original SELECT element:*/
}

.custom-select2 select {
  display: none; /*hide original SELECT element:*/
}

.custom-select3 select {
  display: none; /*hide original SELECT element:*/
}

.select-items div{
  border-radius: 5px;
}

.select-items div, .select-selected{
    color: #000;
    border: 1px solid #ddd;
    cursor: pointer;
    user-select: none;
    font-size:14px !important;
}

.select-items2 div, .select-selected2{
    font-size:14px !important;
}

.select-items3 div, .select-selected3{
    font-size:14px !important;
}



.select-items2 div, .select-selected2 {
    color: #000;
    border: 1px solid #ddd;
    cursor: pointer;
    user-select: none;
}

.select-items3 div, .select-selected3 {
    color: #000;
    border: 1px solid #ddd;
    cursor: pointer;
    user-select: none;
}


.select-selected {
  background-color: #fff;
  text-align: left;
  border-radius: 10px;
  padding: 12px !important;
  letter-spacing: 1px;
}

.select-selected2 {
  background-color: #fff;
  text-align: left;
  border-radius: 10px;
  padding: 12px !important;
  letter-spacing: 1px;
}

.select-selected3 {
  background-color: #fff;
  text-align: left;
  border-radius: 10px;
  padding: 12px !important;
  letter-spacing: 1px;
}

/*style the arrow inside the select element:*/
.select-selected:after {
  position: absolute;
  content: "";
  top: 19px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #999 transparent transparent transparent;
}

.select-selected2:after {
  position: absolute;
  content: "";
  top: 19px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #999 transparent transparent transparent;
}

.select-selected3:after {
  position: absolute;
  content: "";
  top: 19px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #999 transparent transparent transparent;
}

/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #999 transparent;
  top: 7px;
}

.select-selected2.select-arrow-active:after {
  border-color: transparent transparent #999 transparent;
  top: 7px;
}

.select-selected3.select-arrow-active:after {
  border-color: transparent transparent #999 transparent;
  top: 7px;
}


/*style the items (options), including the selected item:*/
.select-items div,.select-selected {
  color: #000;
  padding:7px;
  border: 1px solid #ddd;
  cursor: pointer;
  user-select: none;
}

/*style the items (options), including the selected item:*/
.select-items div,.select-selected2 {
  color: #000;
  padding:7px;
  border: 1px solid #ddd;
  cursor: pointer;
  user-select: none;
}

/*style the items (options), including the selected item:*/
.select-items div,.select-selected3 {
  color: #000;
  padding:7px;
  border: 1px solid #ddd;
  cursor: pointer;
  user-select: none;
}


/*style items (options):*/
.select-items {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
}

.select-items2 {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
}

.select-items3 {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
}
/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.select-hide2 {
  display: none;
}

.select-hide3 {
  display: none;
}
/*.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}*/

.Nude {
background-image:url("../../assets/img/Nude.png");background-repeat: no-repeat;
color: #000 !important;
padding-left: 50px !important;
padding-top:10px !important;
padding-bottom: 10px !important;
background-position: 5px !important;
text-align: left;
}
.Vermelho{
background-image:url("../../assets/img/Vermelho.png");background-repeat: no-repeat;
color: #000 !important;
padding-left: 50px !important;
padding-top:10px !important;
padding-bottom: 10px !important;
background-position: 5px !important;
text-align: left;
}
.Incolor{
background-image:url("../../assets/img/Incolor.png");background-repeat: no-repeat;
color: #000 !important;
padding-left: 50px !important;
padding-top:10px !important;
padding-bottom: 10px !important;
background-position: 5px !important;
text-align: left;
}

.Multicolor_1{
  background-image:url("../../assets/img/Multicolor_1.png");background-repeat: no-repeat;
  color: #000 !important;
  padding-left: 50px !important;
  padding-top:10px !important;
  padding-bottom: 10px !important;
  background-position: 5px !important;
  text-align: left;
}

.Multicolor{
  background-image:url("../../assets/img/Multicolor.png");background-repeat: no-repeat;
  color: #000 !important;
  padding-left: 50px !important;
  padding-top:10px !important;
  padding-bottom: 10px !important;
  background-position: 5px !important;
  text-align: left;
}

.Multicolor_2{
background-image:url("../../assets/img/Multicolor_2.png");background-repeat: no-repeat;
color: #000 !important;
padding-left: 50px !important;
padding-top:10px !important;
padding-bottom: 10px !important;
background-position: 5px !important;
text-align: left;
}

.Multicolor_3{
background-image:url("../../assets/img/Multicolor_3.png");background-repeat: no-repeat;
color: #000 !important;
padding-left: 50px !important;
padding-top:10px !important;
padding-bottom: 10px !important;
background-position: 5px !important;
text-align: left;
}
</style>
