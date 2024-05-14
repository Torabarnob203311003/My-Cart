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
