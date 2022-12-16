
function start() {
    $(".ground").css({ transform: "translate(0, -60%)" });
    $(".people").css({ bottom: "10%" });
    $(".raindrop").css({transform: `translateY(${window.innerHeight + 100}px)`})
    
}

window.onload = start();
