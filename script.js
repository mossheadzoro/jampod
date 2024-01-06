
gsap.registerPlugin(ScrollTrigger);

TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".search", 1, {
    opacity: 0,
    delay: .5,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".menu", 1, {
    opacity: 0,
    delay: .6,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".title", 1, {
    opacity: 0,
    delay: 3.2,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".button", 1, {
    opacity: 0,
    delay: 3.8,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".line-one", 1, {
    opacity: 0,
    delay: 1,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".line-two", 1, {
    opacity: 0,
    delay: 1.6,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from(".line-three", 1, {
    opacity: 0,
    delay:2.2,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".img", 2, {
    opacity: 0,
    delay: 2.4,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".year", 1, {
    opacity: 0,
    delay: 1.4,
    y: -20,
    ease: Expo.easeInOut
})


gsap.from(".text",  {
    opacity: 0,
    duration:2.5,
    scrollTrigger:{
        trigger: ".part1-section",
        scrub: 1,
        markers: false,
        start : "-45% center",
        end: "bottom center",
        toggleActions: "restart pause reverse pause"
    },
    x: 700,
    ease: Expo.easeInOut
})


TweenMax.staggerFrom(".media ul li", 2, {
    opacity: 0,
    duration: 4,
    y:-10,
    ease: Expo.easeInOut
}, 0.2)
gsap.from(".right-img", 1, {
    opacity: 0,
    scrollTrigger:{
        trigger: ".part2-section",
        scrub: 2,
        markers: false,
        start : "-75% center",
    end: "bottom center",
      
        toggleActions: "restart pause reverse pause"
    },
    x: 700,
    ease: Expo.easeInOut
})
gsap.from(".part2-text", 2, {
    opacity: 0,
    scrollTrigger:{
        trigger: ".part2-section",
        scrub: 1,
        markers: false,
        start : "-45% center",
        end: "20% center",
        toggleActions: "restart pause reverse pause"
    },
    x: -100,
    ease: Expo.easeInOut
})




var ducky=document.querySelector('.duck img');
function appearDuck(){
   ducky.style.opacity="1";
   gsap.from(".duck img",{
    opacity:0,
    y:-100,
    duration:1.5,
    ease:Expo.easeInOut,
})
ducky.style.top="280";
} 

function disappearDuck(){
    ducky.style.opacity="0"; 

}


var audio=document.querySelector("audio");
 function audioPlay(){
    audio.play();
    appearDuck();
 }
 function audioStop(){
    audio.pause();
    audio.currentTime=0;
    disappearDuck();
    

 }






 gsap.from(".part3-gif", 2,  {
    opacity: 0,
    x: -100,
    duration:2,
    scrollTrigger:{
        trigger: ".part3-section",
        scrub: 1,
        markers: false,
        start : "-35% center",
        end: "bottom center",
      
        toggleActions: "restart pause reverse pause"
    },
  
    ease: Expo.easeInOut,
})
  

gsap.from(".part3-text", 2,  {
    opacity: 0,
    x: 200,
    duration:2,
    scrollTrigger:{
        trigger: ".part3-section",
        scrub: 1,
        markers: false,
        start : "-35% center",
        end: "bottom center",
      
        toggleActions: "restart pause reverse pause"
    },
  
    ease: Expo.easeInOut,
})

gsap.from(".tws-productinfo", {
    opacity:0,
    x:50,
 duration: 2.5,
 scrollTrigger:{
    trigger: ".tws-productinfo",
    scrub: 1,
    start : "-35% center",
    end: "bottom center",
    markers: false,
  
    toggleActions: "restart pause reverse pause"
},
    ease: Expo.easeInOut
    }) 
    
    
    gsap.from(".arrow-left", {
        opacity:0,
        y:-40,
     duration: 2.5,
     scrollTrigger:{
        trigger: ".tws-productinfo",
        scrub: 2,
        markers: false,
        start : "-50% center",
        end: "bottom center",
      
        toggleActions: "restart pause reverse pause"
    },
        ease: Expo.easeInOut
        }) 
       
       
        gsap.from(".arrow-right", {
            opacity:0,
            y:40,
         duration: 2.5,
         scrollTrigger:{
            trigger: ".tws-productinfo",
            scrub: 2,
            markers: false,
            start : "-50% center",
            end: "bottom center",
            toggleActions: "restart pause reverse pause"
        },
            ease: Expo.easeInOut
            }) 

gsap.from(".tws", {
 opacity:0,
x:-50,

duration: 3,
scrollTrigger:{
    trigger: ".tws",
    scrub: 2,
    markers: false,
    start : "-50% center",
    end: "bottom center",
  
    toggleActions: "restart pause reverse pause"
},
ease: Expo.easeInOut
})



//caraousal 
const data=[
["product1","product2","product3"],

["JAMPOD Buds", "JAMPOD NeckBand","JAMPOD Earphone"],

["699","1499","299"],

["1999","3499","999"]

];

const arrLeft=document.querySelector(".arrow-left");
const arrRight=document.querySelector(".arrow-right");
const productImg=document.querySelector(".tws-img");
const productName=document.querySelector(".product-name");
const productPrice=document.querySelector("#product-pricee");
const productMrp=document.querySelector(".product-mrp del")
const bg=document.querySelector(".tws");


let id=0;

let li;


function slider(id){
    productImg.src="./"+data[0][id]+".png";
    productImg.classList.add('fade-in');
    setTimeout(()=>{
        productImg.classList.remove('fade-in');
    },850) 


    productName.innerText=data[1][id];

    productPrice.innerText="Rs: "+data[2][id];
    
    productMrp.innerHTML=data[3][id];
   
}
arrLeft.addEventListener('click',()=>{
    id--;
    if(id<0){
        id=data[0].length-1;
    }
    slider(id);
});

arrRight.addEventListener('click',()=>{
    id++;
    if(id>data[0].length-1){
        id=0;
    }
    slider(id);
});




TweenMax.staggerFrom(".background h2 span",2,{
    opacity:0,
    y:400,
    scrollTrigger:{
        trigger: "#about",
        scrub: 1,
        markers: false,
        start: "-35% center",
        end:"35% center",
        toggleActions: "restart pause reverse pause"
    },
    ease:Expo.easeInOut,
},0.3)

TweenMax.from(".about-text h3",{
    opacity:0,
    x:-790,
    delay:2.8,
    scrollTrigger:{
        trigger: ".about",
        scrub: 1,
        markers: false,
        
        toggleActions: "restart pause reverse pause"
    },
    expo: Expo.easeInOut,

})
TweenMax.from(".about-text p",{
    opacity:0,
    x:790,
    delay:3,
    scrollTrigger:{
        trigger: ".about",
        scrub: 1,
        markers: false,
        
        toggleActions: "restart pause reverse pause"
    },
    expo: Expo.easeInOut,

})



