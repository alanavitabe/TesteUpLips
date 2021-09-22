<template lang="html">
  <main>
    <div class="container">
    <div class="row">
      <div class="col-sm-3" >
        <keep-alive>
          <menuLateral />
        </keep-alive>
      </div>
      <div class="col-sm-9">
        <router-view :config="config" />
      </div>
    </div>
    </div>
  </main>
</template>

<script>
import "@/assets/css/institucionais.css";
import { mapMutations } from 'vuex';

export default {
  components: {
    menuLateral: () => import("@/components/institucionais/menu.vue"),
  },
  props: {
    config: Object,
  },
  data() {
    return {
      breadcrumbItens: [],
    };
  },

  created() {

    this.$requestSend('get', `/v2/front/url/page?url=${this.genPath(this.$route.fullPath)}`, {}, (success, response) => {
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
    genPath(path, onlyQuery){
      if (onlyQuery) {
        path = path.replace(/\/.*(\?.*)/g, '$1');
        return path;
      }
      path = path.replace('?', '&');
      return path;
    },

  }
};
</script>

<style lang="css" scoped>
</style>
