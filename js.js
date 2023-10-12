const burger =document.querySelector('.burger')
const navbar =document.querySelector('.nav')
const body =document.querySelector('body')
const counter1 =document.querySelector('.first')
const counter2 =document.querySelector('.second')
const counter3 =document.querySelector('.third')
const counter4 =document.querySelector('.fourth')



// const sunIcon =document.querySelector('.fa-sun')
 
 let countNumber=0;
 
 
     setTimeout(() => {
           
          setInterval(() => {
              
               if (countNumber==90) {
                    clearInterval()
               }
               else{
                    countNumber=countNumber + 1 
                    counter1.innerHTML=countNumber + '%'
               } 
          }, 25);
           
        
      }, 2900);


     let co=0
      setTimeout(() => {
           
          setInterval(() => {
              
               if (co==85) {
                    clearInterval()
               }
               else{
          co=co + 1 
                    counter2.innerHTML=co + '%'
               } 
          }, 25);
           
        
      }, 2900);



      let con=0
      setTimeout(() => {
           
          setInterval(() => {
              
               if (con==85) {
                    clearInterval()
               }
               else{
          con=con + 1 
                    counter3.innerHTML=con + '%'
               } 
          }, 25);
           
        
      }, 2900);
       
     //  setTimeout(() => {
           
     //      setInterval(() => {
              
     //           if (co==85) {
     //                clearInterval()
     //           }
     //           else{
     //      co=co + 1 
     //                counter3.innerHTML=co + '%'
     //           } 
     //      }, 25);



          counting=0
          setTimeout(() => {
               
              setInterval(() => {
                  
                   if (counting==95) {
                        clearInterval()
                   }
                   else{
                     counting=co + 1 
                        counter4.innerHTML=counting + '%'
                   } 
              }, 25);
           
        
      }, 2900);

    
 

  
burger.addEventListener('click', function() {
     navbar.classList.toggle("sh")
     burger.classList.toggle('times')
})

 

 function change(icon) {
     icon.classList.toggle("fa-moon")
    body.classList.toggle('light')
 };
