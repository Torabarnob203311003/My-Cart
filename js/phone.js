
  function updatephone(increaseing){



    const previousphonefeild = document.getElementById('phone-value')
    const previousphonestring = previousphonefeild.value
    const previousphonenumber = parseInt(previousphonestring) ;
   
    let newphonefeild ;
   
      if (increaseing===true ){

        newphonefeild=previousphonenumber + 1;
  

      }
      else{

        newphonefeild=previousphonenumber- 1;
      }
     
 previousphonefeild.value = newphonefeild;
 return  newphonefeild;

  }

document.getElementById('btn-phone-plus').addEventListener('click',function(){

   const newphonefeild = updatephone(true)

     
 })
 document.getElementById('btn-phone-minus').addEventListener('click',function(){

  
    const newphonefeild = updatephone(false)

 })