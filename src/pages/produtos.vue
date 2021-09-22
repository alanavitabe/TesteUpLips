<template>
    <main>
        <bannerProdutos/>
        <kitProdutos/>        
        <duvidasHome/>
        <compraSegura/>      
    </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
//import comunicacao from '@/comunicacao.js'
//import {mapState, mapGetters} from 'vuex'
// import vitrine from '@/components/gerais/vitrine.vue'
//import ExitPop from '@/components/gerais/ExitPop.vue';
export default {
  components: {
    bannerProdutos: () => import(`@/components/gerais/bannerProdutos.vue`),
    kitProdutos: () => import(`@/components/gerais/kitProdutos.vue`),  
    duvidasHome: () => import(`@/components/gerais/duvidasHome.vue`),
    compraSegura: () => import(`@/components/gerais/compraSegura.vue`), 
  },
  data(){
    return {
      listagemData: {},
      notFound: false,
      mainBanner: null,
      produtos: null,
      listagemInfos: null,
      offsetAtual: 0,
      limit: this.$route.query.ipp ? this.$route.query.ipp : 12,
      typeListing: false,
      complementoUrlRequest: '',
      closeSec: true,
      loading: {
        geral: true,
        prods: true
      }
    }
  },
  computed: {
    ...mapGetters(['tipoImg']),
    filtrosSelecionados() {
      let filtros = Object.keys(this.listagemInfos.filtros), i = 0;

      filtros.forEach(item => {
        if (Object.keys(this.$route.query).indexOf(item) != -1) {
          i++;
        }
      });

      return i;
    },
    dadosPaginacao(){
      if (this.listagemInfos) {
        let result = {
          total: this.listagemInfos.total,
          exibindo: this.listagemInfos.exibindo,
          offset: this.listagemInfos.offset,
          limit: this.listagemInfos.limit
        }

        result.pages = Math.ceil(result.total / this.limit);
        result.show = result.pages > 1;

        return result;
      }
      return {show: false};
    }
  },
  watch: {
    $route(newVal, oldVal){
      if (newVal.query != oldVal.query) {
        this.loading.prods = true;
        document.querySelector('html').scrollTop = this.$refs.mainContainerCategoria.offsetTop - 50;
        this.offsetAtual = newVal.query.pg ? (newVal.query.pg - 1) * this.limit : 0;
        this.requestData();
        //Comunicacao.$emit('closeMenu');
      }
    },
    produtos() {
      this.loading.prods = false;
    }
  },
  methods: {
    ...mapMutations(['changeDadosPageAtual']),
    setOrder (route) {
      route = JSON.parse(route);
      this.$router.push(route)
    },
    setLimit (route) {
      route = JSON.parse(route);
      this.limit = route.query.ipp;
      this.$router.push(route)
    },
    defineTypeListing(){
      switch (this.$route.name) {
        case 'product/listing/landing-page':
          this.typeListing = 'landingPage';
          this.complementoUrlRequest = 'landing-page'
          break;
        case 'product/listing/brand':
          this.typeListing = 'marca';
          this.complementoUrlRequest = 'brand'
          break;
        case 'product/listing/search':
          this.typeListing = 'busca';
          this.complementoUrlRequest = 'search'
          break;
        default:
          this.typeListing = 'categoria';
          this.complementoUrlRequest = 'category'
      }
    },
    toggleDesc(){
      let height = this.$refs.containerDescricaoLonga.offsetHeight;
      if(height == 0){
        this.$refs.btToggleDesc.querySelector('span').innerText = 'Recolher';
        this.$refs.btToggleDesc.classList.add('opened');
        this.$refs.containerDescricaoLonga.style.maxHeight = 'unset';
        height = this.$refs.containerDescricaoLonga.offsetHeight;
        this.$refs.containerDescricaoLonga.style.transition = '300ms';
        this.$refs.containerDescricaoLonga.style.maxHeight = '0';
        setTimeout(() => {
          this.$refs.containerDescricaoLonga.style.maxHeight = `${height}px`;
        }, 100);
        return false;
      }

      this.$refs.btToggleDesc.querySelector('span').innerText = 'Leia mais';
      this.$refs.btToggleDesc.classList.remove('opened');

      this.$refs.containerDescricaoLonga.style.transition = '300ms';
      this.$refs.containerDescricaoLonga.style.maxHeight = '0';
    },
    openMenuLateral(){
      document.querySelector('body').style.overflow = 'hidden';
      this.$refs.menuFiltros.$el.classList.add('menuLateralOpen');
      /*Comunicacao.$emit('toggleFundoEscuro', {
        acao: true,
        el: this.$refs.menuFiltros,
        class: 'menuLateralOpen'
      });*/
    },
    genPath(path, onlyQuery){
      if (onlyQuery) {
        path = path.replace(/\/.*(\?.*)/g, '$1');
        return path;
      }
      path = path.replace('?', '&');
      return path;
    },
    urlRequest(){
      let url;
      if (this.typeListing == 'search') {
        url = `/v2/front/url/product/listing/${this.complementoUrlRequest}${this.genPath(this.$route.fullPath, true)}&offset=${this.offsetAtual}&limit=${this.limit}${this.$route.query.order ? '' : '&order=Popularidade'}`
        return url;
      }
      url = `/v2/front/url/product/listing/${this.complementoUrlRequest}?url=${this.genPath(this.$route.fullPath)}&offset=${this.offsetAtual}&limit=${this.limit}${this.$route.query.order ? '' : '&order=Popularidade'}`
      return url;
    },
    requestData(){
      this.$requestSend('get', this.urlRequest(), {}, (success, response) => {
        if (success) {
          this.$aplicaSEO(response.data.estrutura);
          this.breadcrumbItens = response.data.estrutura.breadcrumb;
          this.listagemData = response.data.conteudo;
          this.produtos = response.data.conteudo.produtos;
          this.listagemInfos = response.data.info;

          this.loading.geral = false;

          //VARIÁVEIS PÚBLICAS
          this.changeDadosPageAtual(response.data);

          //VARIÁVEIS PÚBLICAS
          //Comunicacao.$emit('paginaCarregada', response.data);

          if (this.$route.name == 'product/listing/category') {
            this.$requestSend('get', `/v2/front/showcase/banners/banner-listagem-categoria?idNivel=${response.data.conteudo[this.typeListing].id}&limit=1`, {}, (success, response) => {
              if (success) {
                this.mainBanner = screen.width > 767 ? response.data.banners[0].dimensoes.desktop : response.data.banners[0].dimensoes.mobile;
              }
            });
          }

          this.notFound = this.offsetAtual >  this.listagemInfos.total ? true : 'encontrada'
          return;
        }

        this.loading.geral = false;
        this.notFound = true;
      });
    }
  },
  created(){
    this.defineTypeListing();
    this.offsetAtual = this.$route.query.pg ? (this.$route.query.pg - 1) * this.limit : 0;
    this.requestData();
    setTimeout(() => {
      this.closeSec = true;
    }, 300);
  }
}

</script>

<style>
  .home-t2,
  .home-t1{
    font-size: 36px;
    font-weight: 500;
    color: #404040;
    line-height: 1.11;
    text-align: center;
  }
  .home-t2{
    font-size: 20px;
  }
</style>

<style scoped>
  /* BENEFÍCIOS */
  #beneficios{
    background-color: #EDEDED;
    padding: 30px 0px 65px;
    margin-top: 45px;
  }
  .beneficios-t1{
    text-align: center;
    font-size: 36px;
    line-height: normal;
    font-weight: 500;
    color: #404040;
  }
  .beneficios-t2{
    text-align: center;
    font-size: 15px;
    line-height: 1.3;
    font-family: 'open sans', sans-serif;
    color: #888;
    margin-bottom: 40px;
  }
  .beneficios-t3{
    font-family: 'open sans', sans-serif;
    margin-top: 10px;
    color: #fc2aa8;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 17px;
  }
  .beneficios-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .beneficios-text{
    color: #666666;
    font-size: 13px;
    line-height: 1.5;
  }
  .beneficiosBtComprar{
    margin-top: 60px;
  }
  @media (max-width: 767px) {
    .beneficios-item:not(:last-child) .beneficios-text{
      margin-bottom: 13px;
    }
    .beneficiosBtComprar{
      margin-top: 43px;
    }
  }

  /* PITCHBAR */
  .pitchbarHome{
    margin-top: 20px;
  }

  /* BANNER DO MEIO DA PÁGINA */
  @media (max-width: 767px) {
    .bannerMeio-link{
      width: 100%;
    }
  }


  /* MARCA NAS MIDIAS */
  #midia{
    margin-top: 45px;
  }
  .midia-t1{
    color: #404040;
    font-size: 36px;
    text-align: center;
    font-weight: 500;
    line-height: 1;
  }
  .midia-t2{
    color: #888;
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 45px;
  }

  .midia-img{
    margin-bottom: 20px;
  }
  .midia-text{
    font-size: 13px;
    line-height: 1.5;
    color: #666666;
  }
  @media (max-width: 767px) {
    .midia-img{
      margin-bottom: 15px;
    }
    .midia-text{
      margin-bottom: 13px;
    }
  }

  /* DUVIDAS FREQUENTES */
  #duvidas {
    margin-top: 45px;
  }
  .duvidas-t1{
    font-size: 36px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    color: #404040;
  }
  .duvidas-t2{
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
    text-align: center;
    color: #888;
    margin-bottom: 60px;
  }
  .duvidas-item-pergunta {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    cursor: pointer;
  }
  .duvidas-item-pergunta h3{
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    text-align: left;
    margin: 0;
    display: flex;
    align-content: center;
    align-self: center;
    font-weight: 600;
    color: #828282;
  }
  .duvidas-item{
    margin: 10px 0;
  }
  .duvidas-item-pergunta i{
    color: #828282;
    font-size: 20px;
    width: 20px;
    height: 20px;
    transition: 500ms;
    transform: rotate(-90deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .duvidas-item-pergunta i.duvidasItemActive{
    transform: rotate(0deg);
  }
  .duvidas-item-resposta {
    margin: 10px 20px;
  }
  .duvidas-item-resposta p {
    font-family: 'Open Sans', sans-serif;
    color: #828282;
    text-align: justify;
    font-size: 14px;
    line-height: 1.4;
  }

  /* COMPRA SEGURA */
  #seguranca {
    margin-top: 45px;
    padding: 30px 0px 50px;
    background-color: #f9f9f9;
  }
  .seguranca-t1{
    font-size: 36px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    color: #404040;
  }
  .seguranca-t2{
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
    text-align: center;
    color: #888;
    margin-bottom: 30px;
  }
  .seguranca-img{
    flex: 1 1 auto;
  }
  .seguranca-t3{
    margin-top: 10px;
    font-size: 18px;
    font-weight: 900;
    line-height: 1.3;
    color: #f13787;
    margin-bottom: 8px;
  }
  .seguranca-text{
    font-size: 14px;
    line-height: 1.4;
    color: #666666;
  }
  .columns:not(:last-child) .seguranca-text{
    margin-bottom: 10px;
  }

  /* VITRINE */
  #vitrineNews{
    margin-top: 45px;
  }
  /* ===================================================== */
</style>
