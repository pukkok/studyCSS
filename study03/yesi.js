var idx =  $(".section1 .bg img.active").index();
setInterval(function autop() {
    
    // console.log(idx);
    var pastE2 = $(".section1 .bg img").eq(idx).attr("data");
    $(pastE2).hide();
    $(".section1 .bg img").eq(idx).removeClass("active");
    $(".section1 .bg img").eq(idx).addClass("fout");
    
    if(idx<2){
        idx++;
        var activeE2 = $(".section1 .bg img").eq(idx).attr("data");
        $(".section1 .bg img").eq(idx).addClass("active");
    }else{
        idx=0;
        var activeE2 = $(".section1 .bg img").eq(idx).attr("data");
        $(".section1 .bg img").eq(idx).addClass("active");
    }
    $(activeE2).show();
    
}, 4000);


