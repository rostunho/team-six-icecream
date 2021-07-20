const targetElement = document.querySelector('.counters');
let isCounting = false;
let inv;

const isVisible = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function startCounter(){
    var ersparnis = 4600;

    inv = setInterval(function() {     
        document.getElementsByClassName("counter").innerHTML = ++ ersparnis;
    }, 500 / 100);

    isCounting = true;

}

function stopCounter(){

    clearInterval(inv);
    isCounting = false;
    
}

document.addEventListener('scroll', function(e) {
    const visible = isVisible( targetElement );
    if( visible && !isCounting ){
        startCounter();
    }else if( !visible && isCounting ){
        stopCounter();
    }
});