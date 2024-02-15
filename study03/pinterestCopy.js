var v1 = $(".textBox .active span.on").index();
setInterval(function autoplay() {

    var player = $(".textBox .active span").eq(v1).attr("data");
    $(player).hide();
    $(".textBox .active span").eq(v1).removeClass("on");
    $(".textBox .active span").eq(v1).addClass("off");
    
    if(v1<2){
        v1++;
        var playOn = $(".textBox .active span").eq(v1).attr("data");
        $(".textBox .active span").eq(v1).addClass("on");
    }else {
        v1=0;
        var playOn = $(".textBox .active span").eq(v1).attr("data");
        $(".textBox .active span").eq(v1).addClass("on"); 
    }
    $(playOn).show();
}, 3000);


// var colorViewer = $(".colorBox.on").index();
// setInterval(function autoplay() {

//     var player = $(".colorBox.on").eq(colorViewer).attr("data");
//     $(player).hide();
//     $(".colorBox.on").eq(colorViewer).removeClass("on");
//     $(".colorBox.on").eq(colorViewer).addClass("off");
    
//     if(colorViewer<2){
//         colorViewer++;
//         var ColorPlayOn = $(".colorBox.on").eq(colorViewer).attr("data");
//         $(".colorBox.on").eq(colorViewer).addClass("on");
//     }else{
//         colorViewer=0;
//         var colorPlayOn = $(".colorBox.on").eq(colorViewer).attr("data");
//         $(".colorBox.on").eq(colorViewer).addClass("on");
//     }
//     $(colorPlayOn).show();
// }, 3000);
