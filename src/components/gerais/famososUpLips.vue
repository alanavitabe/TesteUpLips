<template>
<section id="Famosos">
<div class="container">
<div class="row">
    <div class="col-sm-12">
    <div class="titleSectionFamosos text-center my-5">
            <h1>Quem usou</h1>
            <i>Amou!</i>
        </div>
        <carousel :per-page="4" :navigate-to="someLocalProperty" :mouse-drag="true" :autoplay="false" :loop="true" :navigationEnabled="true" >
        <slide>
            <img src="@/assets/img/upLips_img/juju.jpg" alt="">
        </slide>
        <slide>
            <img src="@/assets/img/upLips_img/mayra.jpg" alt="">
        </slide>
        <slide>
            <img src="@/assets/img/upLips_img/mayra.jpg" alt="">
        </slide> 
        <slide>
            <img src="@/assets/img/upLips_img/mayra.jpg" alt="">
        </slide>
            <slide>
            <img src="@/assets/img/upLips_img/juju.jpg" alt="">
        </slide>
        <slide>
            <img src="@/assets/img/upLips_img/mayra.jpg" alt="">
        </slide>
        <slide>
            <img src="@/assets/img/upLips_img/mayra.jpg" alt="">
        </slide> 
        <slide>
            <img src="@/assets/img/upLips_img/mayra.jpg" alt="">
        </slide>        
        </carousel>   
    </div>
        <div class="BtnFamososdiv ">
        <router-link to="/produtos" class="btnFamosos">
            Compre agora!
        </router-link>
    </div>
</div>
</div> 
</section>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  
  components: {
    Carousel,
    Slide
  }

};
</script>

<style lang="scss">
.col-sm-12{
    margin: 0 !important;
    padding: 0 !important;
}
#Famosos .container{
  width: 1174px;
  margin: 0 auto;
}
.titleSectionFamosos h1{
    font-family: 'proxima-nova-light', sans-serif;
    font-size: 25px;
    font-weight: normal;
    margin-bottom: -21px;
    
}
.titleSectionFamosos i{
    font-family: 'Butler', sans-serif;
    font-size: 80px;
    color: #000;
}
/*.VueCarousel{
    width: 1170px;
     
}*/
.VueCarousel-wrapper{
    width: 1135px;  
}
.VueCarousel-inner{
    flex-basis: 150px !important;
}
.VueCarousel-slide{
    margin: 0 5px 0 0;    
}
.VueCarousel-navigation-next{    
    position: absolute !important;
    left: 1110px !important;
}
.BtnFamososdiv{ 
   margin: 50px auto;
   text-align: center;
}
.btnFamosos{
    background:#56d686;
    color: #fff;
    padding: 20px 40px;
    border-radius: 50px;
    font-size: 20px;    
    text-decoration: none !important;
    font-family: 'ProximaNova Bold', sans-serif;  
    font-weight: bold;    
}
.btnFamosos:hover{
    opacity: 0.8;
    color: #fff;
}

@media screen and (max-width: 800px){
    #Famosos .container{
    width: 100% !important;
    }
    .VueCarousel-wrapper {
    width: 100%;
}
}


</style>
