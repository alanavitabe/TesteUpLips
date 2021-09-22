<template>
    <header class="desk">
        <section class="header">
            <div class="headerDesk">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <img src="@/assets/images/Menu/menu.png" alt="" class="MenuBurgerdesk">
                            </li>                           
                        </ul>

                        <router-link to="/" class="navbar-brand mx-auto">
                            <img src="@/assets/images/Menu/logo.png" alt="">
                        </router-link>

                        <ul class="navbar-nav ml-auto ulDireita">
                            <li class="nav-item">
                                <a href="/checkout/acesso" class="nav-link"><img src="@/assets/images/Menu/PERFIL.png" alt=""></a>
                            </li>                           
                            <li class="nav-item">
                                <a href="/checkout/carrinho/" class="nav-link">
                                    <img src="@/assets/images/Menu/SACOLA.png" alt="">
                                    <div class="headerContainerTop-carrinho-num"> 0 </div>
                                </a>
                            </li>
                        </ul>

                        <div class="overlayMenuDesk"></div>
                        <ul class="itensMenuDesk">
                            <div class="menuicon">
                                <div class="col-12 d-flex">
                                    <div class="col-6">
                                        <img src="@/assets/images/Menu/close.png" alt="" width="50px;" class="MenuBurgerdesk">
                                    </div>
                                    <div class="col-6">
                                        <span>MENU</span>
                                    </div>
                                </div>
                            </div>
                            <li><a href="/">Home</a></li>
                            <li><a href="/produtos">Produtos</a></li>
                            <li><a href="/pagina/atendimento">Atendimento</a></li>
                            <li><a href="/pagina/perguntas-frequentes">Perguntas Frequentes</a></li>
                            <li><a href="/pagina/politica-de-privacidade">Políticas de Privacidade</a></li>
                            <li><a href="/pagina/termos">Termos e Condições</a></li>
                            <!--<li><a href="/pagina/revendedores-oficiais">Revendedores Oficiais</a></li>-->
                            <!--<li><a href="/pagina/referencias-cientificas">Referências Científicas</a></li>-->
                            <li><a href="/checkout/acesso">Meus Pedidos</a></li>
                            <li><a href="/checkout/acesso">Minha conta</a></li>
                        </ul>

                    </div>
                </nav>
            </div><!--headerDesk-->
        </section>
    </header>
</template>
<script>

export default {
    mounted(){
        var icon = document.querySelectorAll('.MenuBurgerdesk');
        var overlay = document.querySelector('.overlayMenuDesk');
        var menu = document.querySelector('.itensMenuDesk');
        icon.forEach(element => {
            element.addEventListener('click', () => {
            overlay.classList.toggle('activeOverlayDesk');
            menu.classList.toggle('activeMenuDesk');
            });
        });
        overlay.addEventListener('click', () => {
            overlay.classList.toggle('activeOverlayDesk');
            menu.classList.toggle('activeMenuDesk');
        });
        
    }
}
</script>
<style lang="scss" scoped>

   .itensMenuDesk{
        transition: 0.5s ease;
        position:fixed;
        width:0;
        height:0;
        left:-200%;
        background-color:#fff;
        li{
            list-style-type: none;
            padding: 13px 0px 13px 30px;
            border-top: 1px solid #eee;

        }
        a{
            text-decoration: none;
            font-size:14px;
        }
    }
    .itensMenuDesk{
        left:-200%;
        top:0;
    }
    .itensMenuDesk.activeMenuDesk{
        width:300px;;
        height:100vh;
        left:0;
        top:0;
        z-index:2;
        
    }
    .overlayMenuDesk{
        transition:0.5s ease;
        width:100vw;
        height:100%;
        position:fixed;
        top:0;
        left:-200%;
        background-color:rgba(207,204,194,0.5);
    }
    .overlayMenuDesk.activeOverlayDesk{
        left:0;
        top:0;
        z-index:1;
    }
    .mobf{
        display: none;
    }
    .logoMob{
        position:relative;
        right:-10px;
        bottom:-4px;
    }
    .headerContainerTop-carrinho-num {
        position: absolute;
        top: 4%;
        right:20px;
        font-size: 10px;
        color: #fff;
        background-color: red;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:1px 5px;
    }

    header.mobf{
        padding:20px 0px;
        background-color:#000;
        align-items:center;
        .menuicon{
            .col-12.d-flex{
                padding:20px;
            }
            span{
                color:#000;
                font-size:25px;
                font-weight:bold;
            }
            i{
                color:#000;
                font-size:35px;
            }
        }
        i{
            color:#fff;
            font-size:25px;
        }
        li{
            list-style-type: none;
        }
        .svgCart{
            position:relative;
            left:-5px;
        }
    }
    .headerDesk .container{
        width: 1140px;
       
    }
    .headerDesk{
        background-color:#cfccc2;
        padding:10px 0px;
        position:relative;
        li.nav-item{
            margin:0px 20px;
        }
        a.nav-link{
            color:#fff;
            font-size:10px;
            font-family: 'Open Sans',sans-serif;
            font-weight: bold;
        }
        a.nav-link.pedidoTop{
            background-color:#04b900;
            border-radius:20px;
            padding:5px 20px;
        }
        .container, ul.navbar-nav{
            align-items: center;
        }
        ul.ulDireita{
            position:relative;
        }
        .headerContainerTop-carrinho-num {
        position: absolute;
        top: -2px;
        right:10px;
        font-size: 10px;
        color: #fff;
        background-color: red;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:1px 6px;
        }
    }
</style>
