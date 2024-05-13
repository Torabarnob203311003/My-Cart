//   1. add lisner to the plus button
//   2. get the value of input
//   3. conver the value inti integer
//   4. calcaue the  realfeild number 
//   5. set the value to the feild  


  function updatedcase(isincrease){



      const previousfeild = document.getElementById('input-feild')
    const newfeildstring = previousfeild.value
    const newfeild = parseInt(newfeildstring)
      
     let realfeild ;
   
     if(isincrease === true){

                      realfeild = newfeild + 1


     }

     else{

        realfeild = newfeild - 1
     }
      previousfeild.value = realfeild
      return  realfeild;
  }
 document.getElementById('plus-section').addEventListener('click',function(){

       const realfeild = updatedcase(true)
      const tottalpricecase = realfeild * 59

      const previousprize = document.getElementById('prize')
     previousprize.innerText =tottalpricecase
 
 })

   document.getElementById('minus-section').addEventListener('click',function(){

       updatedcase(false)
     
   

   })