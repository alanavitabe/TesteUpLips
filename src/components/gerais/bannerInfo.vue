<template>
    <section id="Info">
        <div class="container">
            <div class="row">

                <div class="col-sm-12 InfoImg">
                    <img src="@/assets/images/BannerInfo/bannerInfo.png" alt="">
                </div>

                <div class="titleSectionCores text-center">
                    <h1>A sua boca vai ficar</h1>
                    <i>Sem palavras!</i>
                </div>

            <div class="row boxInfos">
            <div class="col-sm-3 text-center">
                <img src="@/assets/images/BannerInfo/coracao.png" alt="">
                <h2>ÁCIDO HIALURÔNICO</h2>
                <p>Nosso ativo queridinho que
                possui propriedades hidratantes e
                estimulantes de colágeno.</p>
            </div>
            <div class="col-sm-3 text-center">
                <img src="@/assets/images/BannerInfo/volume.png" alt="">
                <h2>VOLUME INSTANTÂNEO</h2>
                <p>O Up Lips promove efeito de preenchimento imediato. Em menos de 5 minutinhos, arrase
                com os os lábios hidratados e volumosos.</p>
            </div>
            <div class="col-sm-3 text-center">
                <img src="@/assets/images/BannerInfo/plump.png" alt="">
                <h2>EFEITO<br/> PLUMP POUT</h2>
                <p>O Up Lips possui componentes especiais
                que ativam a circulação sanguínea na região labial, dilatando levemente os lábios.</p>
            </div>
            <div class="col-sm-3 text-center">
                <img src="@/assets/images/BannerInfo/brilho.png" alt="">
                <h2>BRILHO E HIDRATAÇÃO</h2>
                <p>Além de dar um efeito de preenchimento imediato, deixa os lábios com mais brilho e hidratados por até 24 horas.</p>
            </div>                        
            </div>

            <div class="col-sm-12 boxVideo">
                <img src="@/assets/images/BannerInfo/video.png" alt="">
            </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#Info{
    background-color: #000;
    height: 1976px;
  
}
#Info .container{
    width: 1170px;
}
.InfoImg img{
    width: 1131px;
    margin-top: -167px;
}
.titleSectionCores{    
    margin: 33px auto;
}
.titleSectionCores h1{
    font-family: 'proxima_novaregular', sans-serif;
    font-size: 30px;
    font-weight: lighter;
    margin-bottom: -21px;   
    color: #fff;   
}
.titleSectionCores i{
    font-family: 'Butler', sans-serif;
    font-size: 100px;
    color: #fff;
}
.boxInfos{
    margin-top: 80px;
}

.boxInfos h2{
    font-family: 'proxima_novabold', sans-serif;
    font-weight: bold;
    color: #fff;
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
}
.boxInfos p{
    font-family: 'Open Sans', sans-serif;    
    color: #fff;
    text-align: center;
    font-size: 13px;
    margin-top: 8px;
}
.boxVideo{
    top: 67px;
}
.boxVideo img{
  width: 1131px;  
}
</style>