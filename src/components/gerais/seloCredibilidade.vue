<template>
   <section id="seloCredibilidade">
     <div class="container">
       <div class="row">

         <div class="col-6 col-sm-3 bloco ">
           <div class="blocoContainer justify-content-center">          
            <div>
             <img src="@/assets/images/seloCredibilidade/star.png" alt="">
           </div>
           <div>
             <p>GLOSS DAS CELEBRIDADES</p>
           </div> 
           </div>                   
           </div>
             
         <div class="col-6 col-sm-3 bloco">
           <div class="blocoContainer justify-content-center">     
            <div>
             <img src="@/assets/images/seloCredibilidade/card.png" alt="">
           </div>
           <div>
             <p>ATÉ 12X SEM JUROS</p>
           </div>
           </div>
        </div>
          
         <div class="col-6  col-sm-3 bloco">
           <div class="blocoContainer justify-content-center">     
            <div>
             <img src="@/assets/images/seloCredibilidade/caminhao.png" alt="">
           </div>
           <div>
             <p>ENTREGA GRÁTIS</p>
           </div>
           </div>
        </div>
           
         <div class="col-6 col-sm-3 bloco">
           <div class="blocoContainer justify-content-center ">     
            <div>
             <img src="@/assets/images/seloCredibilidade/escudo.png" alt="">
           </div>
           <div>
             <p>SITE SEGURO</p>
           </div>
           </div>
        </div>
              
       </div>
     </div>
</section>
</template>


<style lang="scss" scoped>
.row{
  margin: 0 !important;
  padding: 0 !important;
}
#seloCredibilidade{
  margin-top: -39px;
}
#seloCredibilidade .container{
  width: 1174px;
  margin: 0 auto;
  padding: 0 !important;
}
.containerBloco{
  margin-top: 23px;
}
.bloco{ 
  background: #000;
  border-radius: 15px;
  max-width: 283px;
  height: 85px;
  margin: 0 1px 0 0;
}
.bloco p{
  color: #fff;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 1.8;
}
.blocoContainer{
 display: flex;
margin: 30px 21px;
}
.blocoContainer img{
  margin: 0 10px 0 0px;
}

</style>