const slider = document.querySelector('.slider');
const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
const pic = document.querySelectorAll('.pic');
const igg = document.getElementById('nnm');
const modz = document.getElementById('modzom');
let isDown = false;
let startX;
let scrollLeft;



pic.forEach((pics, index) => {
    const innh = pics.innerHTML;

    pics.addEventListener('click', () => {

        const gtd = document.createElement('div')
        gtd.innerHTML =innh;
        const imgElement = gtd.querySelector('img');
        const srcValue = imgElement.getAttribute('src');
        console.log(srcValue);
igg.src  = srcValue;
      // Do something with the index of the selected element
    });
  });

igg.addEventListener('click',() =>{
  modz.src = igg.src;

})

 // Function to open the form modal
 function openForm() {
    document.getElementById('myModal').style.display = 'block';
}

// Function to close the form modal
function closeForm() {
    document.getElementById('myModal').style.display = 'none';
}

btn1.addEventListener('click',( ) => {
slider.scrollLeft -= 50;

})
btn2.addEventListener('click', () => {
slider.scrollLeft += 50; // Scroll 50 pixels to the right
 });
 console.log("slider")



 slider.addEventListener('mousedown', (e) => {
     isDown = true;
     startX = e.pageX - slider.offsetLeft;
     scrollLeft = slider.scrollLeft;
 });

 slider.addEventListener('mouseleave', () => {
     isDown = false;
 });

 slider.addEventListener('mouseup', () => {
     isDown = false;
 });

 slider.addEventListener('mousemove', (e) => {
     if (!isDown) return;
     e.preventDefault();
     const x = e.pageX - slider.offsetLeft;
     const walk = (x - startX) * 2; // Adjust scrolling speed
     slider.scrollLeft = scrollLeft - walk;
 });

// varatioion
const pch = document.querySelector('.clrvar')
const ssr = document.querySelector('.szsl')
const chvar = document.querySelectorAll('.clr');
const ste1 = document.querySelectorAll('.size');

function rmv (){
    const chvar = document.querySelectorAll(".clr");

    chvar.forEach((rnm ,idx)=>{
        rnm.classList.remove("active")
    })

}
function rmv2 (){
    const chvar = document.querySelectorAll(".size");

    chvar.forEach(rnm =>{
        rnm.classList.remove("active")
       
    })
    
}
ste1.forEach((bbs,idd) => {
   
    bbs.addEventListener('click',()=>{
        rmv2();
        bbs.classList.add("active");
        if(idd == 3 || idd == 2){
          chvar.forEach((hn,idc)=>{
            if (idc == 2){
             hn.classList.add("sold")
            }else{

                hn.classList.remove("sold")  
            }
        
        })
        }else if(idd == 1){
            chvar.forEach((hn,idc)=>{
              if (idc == 3){
               hn.classList.add("sold")
              }else{
  
                  hn.classList.remove("sold")  
              }
          
          })
  
  
          }else{
            chvar.forEach((hn,idc)=>{
            hn.classList.remove("sold") }) 
        }


    })
})




chvar.forEach((varat,indx) =>{
const lll =varat.innerHTML;
    varat.addEventListener('click',() =>{
        rmv();
        rmv2();
        let text = lll;
        let word = text.substring(10, text.length - 8);
        igg.src  = word;
        varat.classList.add("active")
     // Check if index is 1 or 3
     if (indx === 3) {
        ste1.forEach((sizeElement,bnn) => {
            if (bnn == 1) {
                sizeElement.classList.add('out');
                sizeElement.style.pointerEvents = "none";
                sizeElement.style.opacity = "0.5"
            }  else{
                sizeElement.classList.remove('out');
                sizeElement.style.pointerEvents = "auto";
                    sizeElement.style.opacity = "1";
            }
        });
       
    }
  else if (indx === 2) {
        ste1.forEach((sizeElement,bnn) => {
            if (bnn == 3 || bnn ==2) {
                sizeElement.classList.add('out');
                sizeElement.style.pointerEvents = "none";
                sizeElement.style.opacity = "0.5"
            }
            else{
                sizeElement.classList.remove('out');
                sizeElement.style.pointerEvents = "auto";
                    sizeElement.style.opacity = "1";
            }
        });
       
    }  
    else{
         ste1.forEach((sizeElement,bnn) => {
            sizeElement.classList.remove('out');
            sizeElement.style.pointerEvents = "auto";
                sizeElement.style.opacity = "1";
         });
    }

})

})

console.log(ste1)
