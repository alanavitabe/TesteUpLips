<template>
 <section id="Acido">
   <div class="container">
       <div class="row justify-content-around">

           <div class="col-sm-6 BoxPaolla">
               <img src="@/assets/images/BannerAcido/Acido.png" alt="">
           </div>

           <div class="col-sm-6 boxText">
               <h2>Único</h2>
               <h3>gloss labial com</h3>
                <h2>Ácido <br/> Hialurônico</h2>
               <h3>no Brasil!</h3>
                <div class="BtnPaolladiv ">
                <router-link to="/produtos" class="btnPaolla">
                    Compre agora!
                </router-link>
            </div>
           </div>

       </div>
   </div>
 </section>
</template>

<style scoped>
#Acido{
    background-color: #000;  
    margin-top: 117px;
    height: 690px;
   /* margin-bottom: 131px;*/
}

.BoxPaolla img{
    position: absolute;
    top: -75px;
    left: -4px;
}
#Acido h2{
    font-family: 'Butler', sans-serif;
    color: #fff;
    font-style: oblique;
    font-size: 90px;
}
#Acido h3{
    font-family: sans-serif;
    color: #fff;
    font-weight: normal;
    font-size: 45px;
}
.boxText{
    left:100px;
    top: 76px;
  
}
.BtnPaolladiv{
    margin-top: 50px;
}
.btnPaolla{
    background:#56d686;
    color: #fff;
    padding: 20px 40px;
    border-radius: 50px;
    font-size: 20px;    
    text-decoration: none !important;
    font-family: 'ProximaNova Bold', sans-serif; 
    font-weight: bold;     
}
.btnPaolla:hover{
    opacity: 0.8;
    color: #fff;
}
</style>