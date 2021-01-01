



// The below code is for the animation in home page, text changing  
var actionDOM = document.getElementById("action");
var index = 1;
var totalActions = 4;
function changeAction(DOM){
    if(index == totalActions){
        newIndex = 1
    }else {
        newIndex = index+1
    }    
    currentActionDOM = document.getElementById(`a${index}`);
    newActionDOM = document.getElementById(`a${newIndex}`);
    currentActionDOM.style.opacity = 0;
    newActionDOM.style.opacity = 1;

    if(index < totalActions){
        index += 1;
    }else{
        index = 1;
    }    
    setTimeout(changeAction, (newActionDOM.innerText.length * 400)+800);
}
setTimeout(changeAction, (document.getElementById("a1").innerText.length * 200)+800);
// home page animation code - Ends here