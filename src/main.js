import Vue from 'vue'
import App from './App.vue'
// import VueGtm from 'vue-gtm';
import store from './store/index.js';
import router from './router'
import variaveis from '@/global/variaveis.js'
import carrinho from '@/global/carrinho.js'
import methods from '@/global/methods.js'
import comunicacao from '@/comunicacao.js'
import { mapState } from 'vuex'

// configurando tag manager
import tagmanager from '@/global/tagmanager.js'

import './plugins/axios.js'
import '@/assets/css/slider-styles.css'
import '@/assets/css/estilos-varejao.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/geral.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

Vue.use(variaveis);
Vue.use(methods);
Vue.use(carrinho);
Vue.use(tagmanager);
Vue.use(VueCarousel);

new Vue({
    store,
    router,
    render: h => h(App),
    computed: {
        ...mapState(['config'])
    },
    watch: {
        config(newVal) {
            //ADICIONA O GTM
            Vue.prototype.$gtmId = newVal.configuracoes.google.ga.gtm;
            comunicacao.$emit('configCarregada', newVal);
        }
    },
    created() {
        this.$store.dispatch('getConfig');
        this.$store.dispatch('resizeWindow');
    }
}).$mount('#app')

window.addEventListener('load', () => {
    comunicacao.$emit('siteLoaded');
});