const images= document.querySelectorAll(".image");
const references= document.querySelectorAll(".reference");
const squareReferences= document.querySelectorAll(".referenceSquare");
const controlledImages= document.querySelectorAll(".image-controlled");
const positionYInput= document.getElementById("positionY");
const handleChangeY = (event)=>{
    const target = event.target;
    const value = target.value;
    images.forEach(element => {
        element.style.objectPosition=`50% ${value}%`
    });

    squareReferences.forEach((element) => {
        const containerHeight = 300
        const height = 100
        const availableSpace= containerHeight-height
        element.style.top=`${value/100*(availableSpace)}px`
    });
    
    controlledImages.forEach((element,key) => {
        const ratio = element.naturalWidth/element.naturalHeight
        element.style.objectPosition=`50% ${calcOfftet(ratio,value)}%`

        if(element.nextElementSibling){
            const reference = element.nextElementSibling
            const containerHeight = 300
            const height = 100
            const availableSpace= containerHeight-height
            // console.log("key",key)
            reference.style.top=`${calcOfftet(ratio,value)/100*(availableSpace)}px`
            
        }
    });
}

positionYInput.addEventListener("change" ,handleChangeY);
positionYInput.addEventListener("input" ,handleChangeY);

// edit this function
const calcOfftet = (ratio, valString)=>{
    const val = Number(valString)
    if(val == valString && !isNaN(Number(val))){
        // return val
        // return (val-50)*ratio+50
        return (val-50)*(ratio-1/3*ratio)+50
        // return (val-50)*(ratio-1/3*ratio+1/3*ratio*ratio)+50
        // return (val-50)*(ratio-1/3*ratio+1/3*ratio*ratio-1/3*ratio*ratio*ratio)+50
        // return (val-50)*(ratio-ratio*1/3)+50
        // return (val-50)*(ratio-ratio*1/3*(1-ratio/2)/2)+50

    }
    return 0
}