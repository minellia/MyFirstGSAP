var tween = gsap.to("#kaam img", {duration:1.9, x:300, stagger:{
    amount:0.25,
    from: "start"
}, ease:"back(5)", paused:true});

document.getElementById("play").onclick= () => tween.play();
document.getElementById("pause").onclick= () => tween.pause();
document.getElementById("reverse").onclick= () => tween.reverse();
document.getElementById("restart").onclick= () => tween.restart();