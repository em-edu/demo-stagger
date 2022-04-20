import { gsap } from "gsap";

//elements
/*
.box
*/

const mainTL = gsap.timeline({delay:0.5});

mainTL.from(".box", {duration:1, stagger:0.1, scale:0, transformOrigin:"center"})
    
    ;

// mainTL.from(".box", {duration:1, 
//     stagger:{
//         each:0.1,
//         from:"edges",
//         grid:[3, 4],
//         ease:"power1.inOut"
//     },
//      scale:0, transformOrigin:"center"})

// ;