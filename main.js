const images= document.querySelectorAll(".image");
const controlledImages= document.querySelectorAll(".image-controlled");
const positionYInput= document.getElementById("positionY");
const handleChangeY = (event)=>{
    const target = event.target;
    const value = target.value;
    images.forEach(element => {
        element.style.objectPosition=`50% ${value}%`
    });
    controlledImages.forEach(element => {
        const ratio = element.naturalWidth/element.naturalHeight
        element.style.objectPosition=`50% ${calcOfftet(ratio,value)}%`
    });
}

positionYInput.addEventListener("change" ,handleChangeY);
positionYInput.addEventListener("input" ,handleChangeY);

const calcOfftet = (ratio, valString)=>{
    const val = Number(valString)
    if(val == valString && !isNaN(Number(val))){
        return (val-50)*ratio+50
    }
    return 0
}