<template>
    <section class="frasco ">
        <div class="container-fluid bannerHome"></div>
        <div class="row" style="justify-content: space-between;">

        </div>
           <section class="produtoMudou" style="padding: 45px 0px 60px 0px;">
    <div class="container">
        <div class="row" style=" justify-content: space-between; text-align: justify;">
            <div class=" col-sm-5">
                <h2 class="my-5" style=" margin-top: -21px; font-family:'Open Sans'; font-weight: bold; color: #000; font-size: 35px;">O que mudou?</h2>
                <p style="font-family:'Open Sans'; color: #000; font-size: 20px; text-align:justify;">O que já era bom, está ainda melhor. Up Lips na
                cor <strong>Black Piano</strong> trás um design premium que junto,
                mantém sua poderosa tecnologia do  Ácido Hialurônico
                associada ao colágeno. Com  um novo conceito que
                vai além de volumes nos  lábios, este é o novo
                modelo Up Lips.</p>
                <br>
                <input type="submit" style="border:0;" class="btn btn-primary btnVerde desk" value="FAÇA SEU PEDIDO">
            </div>
            <div class="col-sm-7">
                <img style="right:0;" src="//d2az8otjr0j19j.cloudfront.net/templates/001/291/086/twig/static/images/Home---UpLips_03.png?1487136959" class="imgResponsive">
            </div>
            <div class="col-sm-1" style="text-align:center;">
            <div align="center" >
                <br class="mob">
                <br class="mob">
            <input type="submit" style="border:0; inline-block;" class="btn btn-primary btnVerde mob" value="FAÇA SEU PEDIDO"></div>
            </div>
        </div>
    </div>

</section>
    </section>
</template>


<script>

import { mapMutations } from 'vuex';

export default {
  created() {

    this.$requestSend('get', `/v2/front/url/page?url=/pagina/novo-frasco`, {}, (success, response) => {
      if (success) {

        this.breadcrumbItens = response.data.estrutura.breadcrumb;
        document.querySelector('title').innerText = response.data.estrutura.seo.title;

        //VARIÁVEIS PÚBLICAS
        this.changeDadosPageAtual(response.data);

        return
      }
      this.pageInfo =  404;

    });
  },
  methods: {
    ...mapMutations(['changeDadosPageAtual']),

  }
};
</script>

<style scoped>
   .bannerHome {
    background-image: url(//d2az8otjr0j19j.cloudfront.net/templates/001/291/086/twig/static/images/Up-Lips-Home---Novo-Design-02.jpg?1487136959);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 1920px;
    height: 595px;
    background-color: #000;

}

.imgResponsive{
    width: 98%;
}
    @media screen and (max-width: 768px){
       .produtoMudou .col-sm-3{
           padding: 0 15px;
           text-align: center !important;
       }
       .produtoMudou .col-sm-3 p{
           text-align: center !important;
       }

       .col-sm-4 h2{
           text-align:center;
       }
       .col-sm-4 input{
           margin: 0 auto;
           display:block;
       }
       section.user-content.pb-5{
           display:none !important;
       }
       #KITFAMOSOS{
           margin-top: -30px;
       }
       .imgResponsive{
           width: 100% !important;
       }

    }

    input.btnVerde {
    background: #5bba13 !important;
    color: #fff !important;
    font-size: 15px !important;
    font-weight: bold !important;
    padding: 25px 50px 25px 50px !important;
    border-radius: 5px !important;
    letter-spacing: 0px !important;
}
</style>
