import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// function getComponent(component){
//   return () => import(`@/pages/${component}.vue`);
// }


const routes = [{
        path: '*',
        name: 'Not_found',
        component: require(`@/pages/404.vue`).default
    },
    {
        path: '/',
        name: 'home',
        component: require(`@/pages/home.vue`).default
    },
    {
        path: '/produtos',
        name: 'produtos',
        component: require(`@/pages/produtos.vue`).default
    },
    {
        path: '/pagina/avaliacao-loja',
        name: 'avaliacao-loja',
        component: require(`@/pages/avaliacao-loja.vue`).default
    },
    {
        path: '/quem-somos',
        name: 'quem-somos',
        component: require(`@/pages/quem-somos.vue`).default
    },
    {
        path: '/covid-19',
        name: 'covid-19',
        component: require(`@/pages/covid-19.vue`).default
    },
    {
        path: '/novo-frasco',
        name: 'produto-novo',
        component: require(`@/components/gerais/novo-frasco.vue`).default
    },
    {
        path: '/pagina',
        name: 'institucionais',
        component: require(`@/pages/institucionais.vue`).default,
        children: [

            {
                name: 'troca-e-devolucao',
                path: 'troca-e-devolucao',
                component: require(`@/components/institucionais/paginas/troca-e-devolucao.vue`).default
            },
            {
                name: 'politica-de-entrega',
                path: 'politica-de-entrega',
                component: require(`@/components/institucionais/paginas/politica-de-entrega.vue`).default
            },
            {
                name: 'politica-de-pagamento',
                path: 'politica-de-pagamento',
                component: require(`@/components/institucionais/paginas/politica-de-pagamento.vue`).default
            },
            {
                name: 'politica-de-privacidade',
                path: 'politica-de-privacidade',
                component: require(`@/components/institucionais/paginas/politica-de-privacidade.vue`).default
            },
            {
                name: 'garantia',
                path: 'garantia',
                component: require(`@/components/institucionais/paginas/garantia.vue`).default
            },
            {
                name: 'faq',
                path: 'duvidas-frequentes',
                component: require(`@/components/institucionais/paginas/duvidas-frequentes.vue`).default
            },
            {
                name: 'fale-conosco',
                path: 'central-de-atendimento',
                component: require(`@/components/institucionais/paginas/fale-conosco.vue`).default
            },
            {
                name: 'termos',
                path: 'termos',
                component: require(`@/components/institucionais/paginas/termos.vue`).default
            },
            {
                name: 'referencias-cientificas',
                path: 'referencias-cientificas',
                component: require(`@/components/institucionais/paginas/referencias-cientificas.vue`).default
            },
            {
                name: 'revendedores-oficiais',
                path: 'revendedores-oficiais',
                component: require(`@/components/institucionais/paginas/revendedores-oficiais.vue`).default
            },
            {
                name: 'revendedores-oficiais',
                path: 'revendedores-oficiais',
                component: require(`@/components/institucionais/paginas/revendedores-oficiais.vue`).default
            },
            {
                name: 'revendedores-oficiais',
                path: 'revendedores-oficiais',
                component: require(`@/components/institucionais/paginas/revendedores-oficiais.vue`).default
            },
        ]
    },

    // ROTAS PARA PÁGINA DE PRODUTOS SINGLE
    {
        path: '/pagina',
        name: 'produto-single',
        component: require(`@/pages/Produto-Single.vue`).default,
        children: [{
                name: 'apresentacao',
                path: '/apresentacao',
                component: require(`@/components/single/apresentacao.vue`).default
            },
            // Páginas de produto-single
            {
                name: 'ULC1L2Incolor',
                path: '/1-frasco-up-lips-brinde.html',
                component: require(`@/components/single/ULC1L2Incolor.vue`).default
            },
            {
                name: 'ULC1L2vermelho',
                path: '/1-frasco-up-lips-brinde-2.html',
                component: require(`@/components/single/ULC1L2vermelho.vue`).default
            },
            {
                name: 'ULC1L2Nude',
                path: '/1-frasco-up-lips-brinde-1.html',
                component: require(`@/components/single/ULC1L2Nude.vue`).default
            },
            {
                name: 'ULC1L2Multicolor1',
                path: '/1-frasco-up-lips-brinde-3.html',
                component: require(`@/components/single/ULC1L2Multicolor1.vue`).default
            },
            {
                name: 'ULC1L2Multicolor2',
                path: '/1-frasco-up-lips-brinde-4.html',
                component: require(`@/components/single/ULC1L2Multicolor2.vue`).default
            },
            {
                name: 'ULC1L2Multicolor3',
                path: '/1-frasco-up-lips-brinde-5.html',
                component: require(`@/components/single/ULC1L2Multicolor3.vue`).default
            },
            {
                name: 'ULC2L4Incolor',
                path: '/2-frasco-up-lips-brindes.html',
                component: require(`@/components/single/ULC2L4Incolor.vue`).default
            },
            {
                name: 'ULC2L4Vermelho',
                path: '/2-frasco-up-lips-brindes-6.html',
                component: require(`@/components/single/ULC2L4Vermelho.vue`).default
            },
            {
                name: 'ULC2L4Nude',
                path: '/2-frasco-up-lips-brindes-1.html',
                component: require(`@/components/single/ULC2L4Nude.vue`).default
            },
            {
                name: 'ULC2L4Multicolor',
                path: '/2-frasco-up-lips-brindes-5.html',
                component: require(`@/components/single/ULC2L4Multicolor.vue`).default
            },
            {
                name: 'ULC2L4Multicolor1',
                path: '/2-frasco-up-lips-brindes-4.html',
                component: require(`@/components/single/ULC2L4Multicolor1.vue`).default
            },
            {
                name: 'ULC2L4Multicolor2',
                path: '/2-frasco-up-lips-brindes-3.html',
                component: require(`@/components/single/ULC2L4Multicolor2.vue`).default
            },
            {
                name: 'ULC2L4Multicolor3',
                path: '/2-frasco-up-lips-brindes-2.html',
                component: require(`@/components/single/ULC2L4Multicolor1.vue`).default
            },
            {
                name: 'ULC3L6Incolor',
                path: '/3-frasco-up-lips-brindes.html',
                component: require(`@/components/single/ULC3L6Incolor.vue`).default
            },
            {
                name: 'ULC3L6Vermelho',
                path: '/3-frasco-up-lips-brindes-2.html',
                component: require(`@/components/single/ULC3L6Vermelho.vue`).default
            },
            {
                name: 'ULC3L6Nude',
                path: '/3-frasco-up-lips-brindes-1',
                component: require(`@/components/single/ULC3L6Nude.vue`).default
            },
            {
                name: 'ULC3L6Multicolor',
                path: '/3-frasco-up-lips-brindes-3.html',
                component: require(`@/components/single/ULC3L6Multicolor.vue`).default
            },
            {
                name: 'ULC3L6Multicolor1',
                path: '/3-frasco-up-lips-brindes-4.html',
                component: require(`@/components/single/ULC3L6Multicolor1.vue`).default
            },
            {
                name: 'ULC3L6Multicolor2',
                path: '/3-frasco-up-lips-brindes-5.html',
                component: require(`@/components/single/ULC3L6Multicolor2.vue`).default
            },
            {
                name: 'ULC3L6Multicolor3',
                path: '/3-frasco-up-lips-brindes-6.html',
                component: require(`@/components/single/ULC3L6Multicolor3.vue`).default
            }

        ]
    },

    {
        path: '/busca',
        name: 'product/listing/search',
        component: require(`@/pages/listagem.vue`).default
    },
    {
        path: '/c/:landingPage/:categoriaNivel2?/:categoriaNivel3?/:categoriaNivel4?/:categoriaNivel5?',
        name: 'product/listing/landing-page',
        component: require(`@/pages/listagem.vue`).default
    },
    {
        path: '/:categoriaNivel2?/:categoriaNivel3?/:categoriaNivel4?/:categoriaNivel5?',
        name: 'product/listing/category',
        component: require(`@/components/listagem/valida-page.vue`).default
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router