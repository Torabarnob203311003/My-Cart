 function getelemntbyid (elementid){
         const phonetottalelemnt = document.getElementById(elementid)
   const currephonetotaalstring = phonetottalelemnt.innerText
   const currephonetotaal = parseInt(currephonetotaalstring)
   return currephonetotaal ;
   }

   function setelementvaluebyid (element,value){

 const currentsub = document.getElementById(element)
     currentsub.innerText = value;
    
     

   }

   function calculatesubtotaal(){


         const currephonetotaal =getelemntbyid('phone-price')
     const currecasetotaal =getelemntbyid('prize')
     const curretottal = currephonetotaal + currecasetotaal
     const finalcurrenttottal =parseFloat(curretottal)
      setelementvaluebyid ('sub-tottal',curretottal)
    

    //  taxt calculate 
   
            const taxamonut = (curretottal * 0.1).toFixed(2)
            const finaltaxammount =parseFloat(taxamonut)
            setelementvaluebyid('tax-tottal',taxamonut)
            const finalamount = finalcurrenttottal+finaltaxammount
          
            setelementvaluebyid('full-totall',finalamount)

}

//    full tottal

