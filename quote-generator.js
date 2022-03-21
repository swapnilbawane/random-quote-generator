let numberJs;
let submitJs;
let imageJs;
let indexNumber;
let quoteimageJs; 

//  quoteimageJs= ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

numberJs = document.querySelector("number-entered");
submitJs = document.getElementById("number-btn");
imageJs = document.getElementById("img-quote");

console.log(imageJs);

function displayquote () 
{
//  let indexValue = numberJs.innerText;
// imageJs.src= quoteimageJs[indexValue];
//  console.log(imageJs.src)

if ( parseInt(numberJs.value) == 4 )
 { imageJs.src="img4.jpg"}
    else 
    { 
        if ( parseInt(numberJs.value) == 3 ) {imageJs.src="img3.jpg"}
            else 
                 { 
                     if ( parseInt(numberJs.value) == 2) {imageJs.src="img2.jpg"}
                        else { imageJs.src="img1.jpg"}  
                 }
     
    }   


 
}
