<template>
    <section id="Bocao">
        <div class="container">
            <div class="titleSectionBocao text-center">
                <h1>Bocão em</h1>
                <i>5 minutos</i>
            </div>
            <div class="row BoxIcons">
                <div class="col-sm-4">
                    <img src="@/assets/images/Bocao5min/lip-gloss.png" alt="">
                    <h2>Passe <br/><span>nos lábios</span></h2>
                </div>
               
                <div class="col-sm-4">
                    <img src="@/assets/images/Bocao5min/cronometro.png" alt="">
                    <h2>Espere <br/><span> minutos</span></h2>                         
                </div>

                <div class="col-sm-4">
                    <img src="@/assets/images/Bocao5min/beijo.png" alt="">
                    <h2>Você linda e com <br/><span>bocão de arrasar!</span></h2>                    
                </div>
                <div class="Btnbocaodiv ">
                <router-link to="/produtos" class="Btnbocao">
                    Compre agora!
                </router-link>
            </div>                
            </div>            
        </div>
    </section>
</template>

<style scoped>
#Bocao{
   background-image: url('../../assets/images/Bocao5min/bgbocao.png');
   padding-bottom: 20px;
}
#Bocao .container{
    width: 1170px;
    margin: 0 auto;
}
.titleSectionBocao{
    padding-top: 250px;
}
.titleSectionBocao h1{
    font-family: 'proxima-nova-light', sans-serif;
    font-size: 25px;
    font-weight: lighter;
    margin-bottom: -21px;
    
}
.titleSectionBocao i{
    font-family: 'Butler', sans-serif;
    font-size: 80px;
    color: #000;
   
}
.BoxIcons{
    margin-top: 52px;    
}
.BoxIcons img{
    padding: 0 27px 0 103px;
}
#Bocao h2{
    font-family: 'proxima_novaregular', sans-serif;
    font-weight: lighter;
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
}
#Bocao h2 span{
    font-family: 'proxima-nova-bold', sans-serif;
    font-weight: bold;
}
.Btnbocaodiv{ 
   margin: 86px auto;
}
.Btnbocao{
    background:#56d686;
    color: #fff;
    padding: 20px 40px;
    border-radius: 50px;
    font-size: 20px;    
    text-decoration: none !important;
    font-family: 'ProximaNova Bold', sans-serif;  
    font-weight: bold;    
}
.Btnbocao:hover{
    opacity: 0.8;
    color: #fff;
}
</style>