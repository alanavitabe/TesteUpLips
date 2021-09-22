<template lang="html">
  <main>
        <router-view :config="config" />
  </main>
</template>

<script>
import Comunicacao from "@/comunicacao";
import { mapMutations } from 'vuex';

export default {
  components: {

  },
  props: {
    config: Object,
  },
  data() {
    return {
      breadcrumbItens: [],
    };
  },
  methods:{
    ...mapMutations(['changeDadosPageAtual']),
    genPath(path, onlyQuery){
      if (onlyQuery) {
        path = path.replace(/\/.*(\?.*)/g, '$1');
        return path;
      }
      path = path.replace('?', '&');
      return path;
    },
  },
  created() {
    this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}`, {}, (success, response) => {
      if (success) {
        this.$aplicaSEO(response.data.estrutura);

        //VARIÁVEIS PÚBLICAS
        this.changeDadosPageAtual(response.data);
      }
    });
    Comunicacao.$on("getBreadcrumb", (response) => {
      this.breadcrumbItens = response;
    });
  },
};
</script>

<style lang="css" scoped>
</style>
