
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



   function updatephoneprice( newphonefeild){


      const tottalelement =document.getElementById('phone-price')
   

    const tottalprice =  newphonefeild * 1219

    tottalelement.innerText =tottalprice
    
   }


   function getelemntbyid (elementid){
         const phonetottalelemnt = document.getElementById(elementid)
   const currephonetotaalstring = phonetottalelemnt.innerText
   const currephonetotaal = parseInt(currephonetotaalstring)
   return currephonetotaal ;
   }

   function calculatesubtotaal(){


         const currephonetotaal =getelemntbyid('phone-price')
     const currecasetotaal =getelemntbyid('prize')
     const curretottal = currephonetotaal + currecasetotaal
     const currentsub = document.getElementById('sub-tottal')
     currentsub.innerText = curretottal;

   }

document.getElementById('btn-phone-plus').addEventListener('click',function(){

   const newphonefeild = updatephone(true)

   updatephoneprice(newphonefeild)

     // phone tottal 
   calculatesubtotaal()
     
 

  // sob totaal calculate end 
 

     
 })


  
 document.getElementById('btn-phone-minus').addEventListener('click',function(){

  
    const newphonefeild = updatephone(false)
 updatephoneprice(newphonefeild)
calculatesubtotaal()

 })