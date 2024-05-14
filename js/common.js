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
      setelementvaluebyid ('sub-tottal',curretottal)
    

    //  taxt calculate 
   
            const taxamonut = curretottal * 0.1
            setelementvaluebyid('tax-tottal',taxamonut)

}

//    full tottal

