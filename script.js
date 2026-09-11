particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
color:{value:"#00d4ff"},
line_linked:{
enable:true,
color:"#00d4ff"
},
move:{
speed:2
}
}
});

const words=[
"AI Engineer",
"Machine Learning Enthusiast",
"Deep Learning Developer",
"IoT Innovator"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){
document.getElementById("typing").textContent=
current.substring(0,j--);
}else{
document.getElementById("typing").textContent=
current.substring(0,j++);
}

if(!isDeleting && j===current.length){
isDeleting=true;
setTimeout(type,1200);
return;
}

if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%words.length;
}

setTimeout(type,isDeleting?60:120);
}

type();

ScrollReveal().reveal(
'.card,.skill,.project-card,.gallery img',
{
distance:'50px',
duration:1000,
origin:'bottom',
interval:100
}
);

document
.getElementById('theme-toggle')
.addEventListener('click',()=>{

document.body.classList.toggle('light');

});
