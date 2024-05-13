 document.getElementById('plus-section').addEventListener('click',function(){

    const previousfeild = document.getElementById('input-feild')
    const newfeildstring = previousfeild.value
    const newfeild = parseInt(newfeildstring)
      
     const realfeild = newfeild + 1
   
      previousfeild.value = realfeild
 })