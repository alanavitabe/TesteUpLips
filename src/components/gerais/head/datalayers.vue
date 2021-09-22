<template lang="html">
  <div class="row" style="none"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      sucesso: false,
      datalayer:{}
    }
  },
  computed: {
    ...mapState({
      variaveisPublicas: state => state.head.variaveisPublicas
    })
  },
  watch: {
    variaveisPublicas(val) {
      if (val != null) this.setData();
    }
  },
  methods: {
    setData() {
      this.setPagina(this.variaveisPublicas);

      // //HABILITA O GTM
      // if(!this.$gtm.enabled()){
      //   this.$gtm.enable(true);
      //   return true;
      // }

      //INICIA O GTM
      this.$gtmInit();
      this.$gtmLoadedSet(true);



      //ENVIA O VIRTUAL PAGE VIEW POIS A TROCA OCORREU EM TEMPO DE EXECUÇÃO
      window.dataLayer.push({
        'event': 'WapstoreVirtualPageView',
        'title': this.variaveisPublicas.estrutura.seo.title,
        'page': window.location.pathname
      });
    },
    setPagina(responsePagina){
      //NÃO PERMITE CONTINUAR
      if(!this.sucesso) return false;

      //CRIA OS DATALAYERS DAS PÁGINAS
      switch (responsePagina.estrutura.nivel) {
        case 'home':
          return this.setPaginaHome();

        case 'product/listing/category':
        case 'product/listing/brand':
        case 'product/listing/landing-page':
          return this.setPaginaListagem(responsePagina);

        case 'product/listing/search':
          return this.setPaginaBusca(responsePagina);

        case 'produto-single':
          return this.setPaginaDetalheProduto(responsePagina);

        default:
          return this.setPaginaDefault();
      }
    },
    setPaginaHome(){
      window.dataLayer.push({
        google_tag_params: {
            ecomm_pagetype: 'home'
        }
      });
    },
    setPaginaDefault(){
      window.dataLayer.push({
        google_tag_params: {
            ecomm_pagetype: 'other'
        }
      });
    },
    setPaginaListagem(responseListagem){

      //AUXILIARES
      var impressions = [];
      var idsListados = [];
      var valorTotal  = 0;
      var disponivel  = 'indisponivel';
      var nomePagina  = 'Listagem';

      //NOME DA PÁGINA
      switch (responseListagem.estrutura.nivel) {
        case 'product/listing/category':
          nomePagina = responseListagem.conteudo.categoria.nome;
          break;
        case 'product/listing/brand':
          nomePagina = responseListagem.conteudo.marca.nome;
          break;
        case 'product/listing/landing-page':
          nomePagina = responseListagem.conteudo.landingPage.nome;
          break;
      }

      //PRODUTOS DA LISTAGEM
      responseListagem.conteudo.produtos.map(function(value) {
          //TODO ADICIONAR NOME DA MARCA
          impressions.push({
                           id: value.id,
                           name: value.nome,
                           price: value.precos.por,
                           brand: "",
                           list: nomePagina,
                           position: (impressions.length + 1)
                         });

         //STATUS DA LISTAGEM
         disponivel = value.status == 'disponivel' ? 'disponivel' : disponivel;

         //VALOR TOTAL DA LISTAGEM
         valorTotal += value.precos.por;

         //IDS LISTADOS
         idsListados.push(value.id);
      });

      //DATALAYER DE BUSCA
      window.dataLayer.push({
        google_tag_params: {
            ecomm_prodid: idsListados,
            ecomm_pagetype: 'category',
            ecomm_totalvalue: valorTotal
        },
        estoque: disponivel,
        ecommerce:{
          currencyCode: "BRL",
          impressions: impressions
        }
      });
    },
    setPaginaBusca(responseListagem){
      //PRODUTOS DA LISTAGEM
      var impressions = [];
      responseListagem.conteudo.produtos.map(function(value) {
          //TODO ADICIONAR NOME DA MARCA
          impressions.push({
                           id: value.id,
                           name: value.nome,
                           price: value.precos.por,
                           brand: "",
                           list: 'Search Results',
                           position: (impressions.length + 1)
                         });
      });

      //DATALAYER DE BUSCA
      window.dataLayer.push({
        google_tag_params: {
            ecomm_pagetype: 'searchresults'
        },
        ecommerce:{
          currencyCode: "BRL",
          impressions: impressions
        }
      });
    },
    setPaginaDetalheProduto(responseDetalhe){
      //PRODUTOS VINCULADOS AO DETALHE
      //TODO: ADICIONAR DEMAIS PRODUTOS VINCULADOS
      var produtos = [
        {
          id: responseDetalhe.conteudo.id,
          name: responseDetalhe.conteudo.nome,
          price: responseDetalhe.conteudo.precos.por,
          brand: responseDetalhe.conteudo.marca.nome,
          category: responseDetalhe.conteudo.categoria.nome
        }
      ];

      //DATALAYER DE DETALHE
      window.dataLayer.push({
                                google_tag_params: {
                                  ecomm_prodid: responseDetalhe.conteudo.id,
                                  ecomm_pagetype: 'product',
                                  ecomm_totalvalue: responseDetalhe.conteudo.precos.por,
                                  ecomm_category: responseDetalhe.conteudo.categoria.nome
                                },
                                estoque:responseDetalhe.conteudo.status == 'disponivel' ? 'disponivel' : 'indisponivel',
                                marcas:responseDetalhe.conteudo.marca.nome,
                                sku:responseDetalhe.conteudo.sku,
                                ecommerce:{
                                  actionField:{
                                    list: "Página de produto"
                                  },
                                  detail:{
                                    products: produtos
                                  }
                                }
                              });
    }
  },
  created(){
    //IN BROWSER
    if(typeof window !== 'undefined'){
      //INICIA O DATALAYER
      window.dataLayer = [];

      //DEFINE COMO SUCESSO
      this.sucesso = true;
    }
    //DEFINE O DATALAYER APÓS
    if (this.variaveisPublicas != null) this.setData();

  }
}
</script>
