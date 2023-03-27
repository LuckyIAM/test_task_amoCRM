const changeVisible = document.querySelectorAll("a")[4]
const btn = document.querySelector('.btn')

console.log(btn);
if(innerWidth > 520){
    changeVisible.innerText = 'Сертификаты'
    
}else{
    changeVisible.innerText = ''
    btn.style.display = 'none';
}
const textInfo = document.querySelectorAll(".text_publicity")
const saveText = []
for(let item of textInfo){
    saveText.push(item.innerText)
}
for(let i = 0; i < textInfo.length; i++){
    if(innerWidth > 520){
        textInfo[i].innerText = saveText[i]
    }else{
        textInfo[i].innerText = ''
    }
}

const titleBlock = document.querySelectorAll('.title_publicity')
console.log(titleBlock);
for(let j = 0; j < titleBlock.length; j++){
    const colorLine = document.createElement('span')
    colorLine.classList.add("text_red")
    colorLine.style.letterSpacing = "-0.1rem";
    colorLine.innerHTML = '---'
    
    if(innerWidth < 520){
        titleBlock[j].before(colorLine)
        const saveText = titleBlock[j].innerText
        console.log(saveText);
        titleBlock[j].innerText = saveText
    }else{
        
        const saveText = titleBlock[j].innerText
        console.log(saveText);
        titleBlock[j].innerText = saveText
    }
}


function drawBall(xy1,xy2, color1, color2, idName) {
    // Get the canvas element
    const canvas = document.getElementById(idName);
    
    // Get the canvas context, which allows us to draw on the canvas
    const ctx = canvas.getContext("2d");
    // Set the fill color to a red radial gradient
    
    const gradient = ctx.createRadialGradient(xy1, xy1, 0, xy2, xy2, xy2);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    
    ctx.fillStyle = gradient;
    
    // Draw a circle with a radius of 50 at the center of the canvas
    ctx.beginPath();
    ctx.arc(xy2, xy2, xy1, 0, Math.PI*2);
    ctx.fill();
}


const main = document.querySelector('main')
console.log(main);
if(innerWidth > 520){
    drawBall(23, 30, "#833AB4", "#000", "bule_blue")
    drawBall(32, 41, "#961A1A", "#000", "bule_brown")
    drawBall(10, 14, "#961A1A", "#000", "litell__bule_brown")  
}else{
    const booleBlue = document.querySelector('canvas') 
    console.log(booleBlue);
    booleBlue.remove()
    const brownBoole =document.querySelector('#bule_brown')
    console.log(brownBoole);
    brownBoole.remove()
    // main.style.backgroundImage = `radial-gradient(circle  at top , #833ab421, #000), radial-gradient(circle 100px  at left , #961A1A  , #000)`
}   



