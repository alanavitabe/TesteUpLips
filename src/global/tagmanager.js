const TagManager = {

  install(Vue) {
    // DEFINE SE O GTM FOI CARREGADO
    Vue.prototype.$gtmLoaded = false;
    // DEFINE SE O GTM FOI CARREGADO
    Vue.prototype.$gtmLoadedSet = function (data) {
      return Vue.prototype.$gtmLoaded = data;
    };

    //ID DO GTM
    Vue.prototype.$gtmId = null;

    // Ex: $gtmInit()
    // INICIA O GTM
    Vue.prototype.$gtmInit = function () {
      //VERIFICA SE O GTM JÁ ESTÁ ATIVO

      if(Vue.prototype.$gtmLoaded) return false;

      //VERIFICA SE O ID DO GTM EXISTE
      if(!Vue.prototype.$gtmId) return false;


      //NOVA TAG SCRIPT
      let gtmScript = document.createElement('script');
      gtmScript.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\
    })(window,document,'script','dataLayer','"+Vue.prototype.$gtmId+"');";

      //ADICIONA O GTM NO HEADER
      document.head.appendChild(gtmScript);
    }
  }
}

export default TagManager;
