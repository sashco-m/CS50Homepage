function changeTextSize(){
    //console.log(event.srcElement.id); //ok thats how to get the id
    const clickedButton=document.getElementById(event.srcElement.id);
    const pTags=document.getElementsByTagName("p");
    let pSize;
    console.log(pTags);

    switch(event.srcElement.id){
        case "small":
            pSize="16";
            break;
        case "default":
            pSize="20";
            break;
        case "large":
            pSize="24";
    }
    //iterates over every p tag recived, then sets the style attribute
    for(i=0;i<pTags.length;i++)
    {
        pTags[i].setAttribute("style","font-size:"+pSize+"px");
    }

}

function slide1(){
    let id=event.srcElement.id;
    let imageContainer=document.querySelector(".image-container");
    //shorthand if statement
    //if the window height is greater than the width (portrait mode), the slide images will change to 350px to fit better on phones
    //if its in landscape, it will use vw units to determine the size of the slide
    //this if statement determines by how much the image container should move based on the orientation of the device
    window.innerHeight>window.innerWidth ? imageContainer.style.right=id*350+"px" : imageContainer.style.right=id*30+"vw"
}