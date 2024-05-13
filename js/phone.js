 document.getElementById('btn-phone-plus').addEventListener('click',function(){

    const previousphonefeild = document.getElementById('phone-value')
    const previousphonestring = previousphonefeild.value
    const previousphonenumber = parseInt(previousphonestring) ;
   
    const newphonefeild = previousphonenumber + 1;
    previousphonefeild.value = newphonefeild;
     

 })
 document.getElementById('btn-phone-minus').addEventListener('click',function(){

    const previousphonefeild = document.getElementById('phone-value')
    const previousphonestring = previousphonefeild.value
    const previousphonenumber = parseInt(previousphonestring) ;
   
    const newphonefeild = previousphonenumber + 1;
    previousphonefeild.value = newphonefeild;
     

 })