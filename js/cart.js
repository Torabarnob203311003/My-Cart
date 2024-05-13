//   1. add lisner to the plus button
//   2. get the value of input
//   3. conver the value inti integer
//   4. calcaue the  realfeild number 
//   5. set the value to the feild  
 document.getElementById('plus-section').addEventListener('click',function(){

    const previousfeild = document.getElementById('input-feild')
    const newfeildstring = previousfeild.value
    const newfeild = parseInt(newfeildstring)
      
     const realfeild = newfeild + 1
   
      previousfeild.value = realfeild

 })

   document.getElementById('minus-section').addEventListener('click',function(){

       const previousfeild = document.getElementById('input-feild')
    const newfeildstring = previousfeild.value
    const minusfeild =  parseInt(newfeildstring)
    const realfeild = minusfeild - 1
    previousfeild.value =realfeild
     
   

   })