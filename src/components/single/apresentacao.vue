<template>
    <section>
        <div >
            <div class="container">
                <div class="row">
                <div class="col-sm-12 p-0">
                    <img class="imgMobA" src='@/assets/img/upLips_img/1-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/2-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/30-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/4-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/5-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/6-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/7-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/8-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/9-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/10-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/11-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/12-min.jpg'/>
                    <img class="imgMobA" style="margin-bottom:-10px;" src='@/assets/img/upLips_img/13-min.jpg'/>
                </div>
                </div>
            </div>
        </div>
        <div class="apresentacao mob">
            <div class="container">
                <div class="row">
                <div class="col-sm-12 p-0">
                    <img class="imgMobA" src='@/assets/img/upLips_img/1-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/2-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/30-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/4-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/5-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/6-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/7-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/8-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/9-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/10-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/11-min.jpg'/>
                    <img class="imgMobA"  src='@/assets/img/upLips_img/12-min.jpg'/>
                    <img class="imgMobA" style="margin-bottom:-10px;" src='@/assets/img/upLips_img/13-min.jpg'/>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
  window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S"
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U"
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12"
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };
</script>
<style>
    .appDesk img{
    margin-top:-6px;
  }
  .imgMobA{
    max-width:100%;
    margin-top:-6px;
    }   
</style>