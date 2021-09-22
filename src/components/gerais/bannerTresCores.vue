<template>
    <section id="tresCores">
        <div class="container">

            <div class="col-sm-12 titleSectionCores text-center">
                <h1>TRÊS CORES</h1>
                <i>Incríveis</i>
            </div>  

            <div class="row BoxCores">             


            <div class="col-sm-6 textCores">
                <h2><span>Perfeito</span> para<br/>
                <i>quem possui um</i><br/>
                 <span>estilo sensual!</span></h2>

                <h3>QUANDO USAR</h3>
                 <div class="row boxImages">                
                 <div class="col-sm-4">
                    <img src="@/assets/images/bannertresCores/work.png" alt="">
                 </div>
                 <div class="col-sm-4">
                      <img src="@/assets/images/bannertresCores/festa.png" alt="">
                 </div>
                 <div class="col-sm-4">
                     <img src="@/assets/images/bannertresCores/shopping.png" alt="">
                 </div>
                 </div>

            <div class="BtnCoresdiv text-center">
                <router-link to="/produtos" class="btnCores">
                    Compre agora!
                </router-link>
            </div>                 

            </div>

            <div class="col-sm-6 imgPaolla">
                <img src="@/assets/images/bannertresCores/PaollaRed.png" alt="">
            </div> 
          
                <div class="col-sm-12 text-center btnTroca">
                    <div class="active">
                        <img src="@/assets/images/bannertresCores/bolared.png" alt="">
                        <h4>RED</h4>
                    </div>
                    <div>
                        <img src="@/assets/images/bannertresCores/bolanude.png" alt="">
                        <h4>NUDE</h4>
                    </div>
                    <div>
                        <img src="@/assets/images/bannertresCores/bolaincolor.png" alt="">
                        <h4>INCOLOR</h4>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
#tresCores{
    background-color: #e7e5de;  
    padding-bottom: 250px;  
}
#tresCores .container{
    width: 1170px;
    margin: 0 auto;
}
#tresCores .BoxCores{
    width: 990px;
    margin-top: 250px;
}

#tresCores .boxImages{
    width: 350px;
    margin: 0 auto;
}
.titleSectionCores{
    top: 139px;
}
.imgPaolla{
    margin-top: -80px;
}

.titleSectionCores h1{
    font-family: 'proxima_novaregular', sans-serif;
    font-size: 30px;
    font-weight: lighter;
    margin-bottom: -21px;
    letter-spacing: 8px;    
}
.titleSectionCores i{
    font-family: 'Butler', sans-serif;
    font-size: 100px;
    color: #000;
}
#tresCores h2{
    font-family: 'proxima_novaregular', sans-serif;
    text-align: center;
    font-size: 50px;
}
#tresCores h3{
    font-family: 'proxima-nova-bold', sans-serif;
     font-weight: bold;
    text-align: center;
    font-size: 25px;
    margin: 39px 0 39px 0;

}
#tresCores h2 > span{
    font-family: 'proxima-nova-bold', sans-serif;
    font-weight: bold;
}

.BtnCoresdiv{ 
  margin-top: 50px;
}
.btnCores{
    background:#56d686;
    color: #fff;
    padding: 20px 40px;
    border-radius: 50px;
    font-size: 20px;    
    text-decoration: none !important;
    font-family: 'ProximaNova Bold', sans-serif;  
    font-weight: bold;    
}
.btnCores:hover{
    opacity: 0.8;
    color: #fff;
}

.btnTroca{
    display: flex;
    justify-content: center;
    align-content: center;
}
.btnTroca img{
   margin: 0 80px;
   cursor: pointer;
}
.btnTroca h4{
   margin-top: 10px;
}


</style>