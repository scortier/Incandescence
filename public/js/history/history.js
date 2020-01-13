function myfunction(x) {
    var y = window.matchMedia("(max-width:767px)")
    if (x.matches) {
        document.querySelector('.sipahi').style.visibility = 'visible';
        document.querySelector('.show_history').style.width = '85vw';
        document.querySelector('.show_history').style.left = '7.5%';
        document.querySelector('.show_history').style.top = '5%';
    } else if (y.matches) {
        document.querySelector('.show_history').style.width = '100vw';
        document.querySelector('.show_history').style.top = '5%';
        document.querySelector('.sipahi').style.visibility = 'hidden';
    } else {
        document.querySelector('.sipahi').style.visibility = 'visible';
        document.querySelector('.show_history').style.width = '95vw';
        document.querySelector('.show_history').style.top = '2%';
        document.querySelector(".sipahi").style.left = "2.5%";
    }
}

var x = window.matchMedia('(min-width:768px) and (max-width:1225px)');
myfunction(x);
var menuVisibility = 102;
// x.addListener(myfunction);
for (let i = 1; i <= 18; i++) {
    document.querySelector('.hathi-' + i).addEventListener('mouseover', function() {
        for (let j = 1; j <= 18; j++) {
            document.querySelector('.hathi-' + j).classList.add('paused');
            document.querySelector('.hathi-' + j).style.opacity = '0.2';
        }
        var img = '/image/history/brochure-0' + i + '.jpg'
        document.querySelector(".show_history").style.backgroundImage = "url(" + img + ")";
        document.querySelector(".sipahi").style.backgroundImage = "url(/image/history/gaurd.png)";
        document.querySelector('#backgroundEffect div').style.visibility = 'visible';
        menuVisibility = 2;
    });
    document.querySelector('.hathi-' + i).addEventListener('mouseout', function() {
        for (let j = 1; j <= 18; j++) {
            document.querySelector('.hathi-' + j).classList.remove('paused');
            document.querySelector('.hathi-' + j).style.opacity = '1';
        }
        document.querySelector(".show_history").style.backgroundImage = '';
        document.querySelector(".sipahi").style.backgroundImage = '';
        document.querySelector('#backgroundEffect div').style.visibility = 'hidden';
        menuVisibility = 102;
    });
}

//for hathi zoom
setInterval(function() {
    for (let i = 1; i <= 18; i++) {
        var hathiLeft = $('.hathi-' + i).position().left / $('.hathi-' + i).parent().width() * 10;
        var imageLeft = $('.image').position().left / $('inage').parent().width() * 10;
        hathiLeft = parseFloat(hathiLeft);
        // console.log($('.hathi-1').parent().width());
        // console.log(hathiLeft);
        if (hathiLeft >= 50) {
            hathiLeft = 100 - hathiLeft;
        }
        document.querySelector('.image').style.transform = 'translateY(-' + 616 * imageLeft / 40 + 'px) scale(' + imageLeft / 20 + ')';

        document.querySelector('.hathi-' + i).style.zIndex = Math.round(hathiLeft) + '';
        document.querySelector('.hathi-' + i).style.transform = 'translateY(-' + 616 * hathiLeft / 40 + 'px) scale(' + hathiLeft / 20 + ')';
    }
    $('#menu').css('z-index', menuVisibility);
}, 100);