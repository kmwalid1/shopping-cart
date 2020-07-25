
      // this function made for convert all the innerText to number
      function ParseFloatText(id){
         const current = document.getElementById(id).innerText;
         const currentNumber = parseFloat(current);
         return currentNumber;
      }
      // this function made for convert all the value to number
      function ParseFloatValue(id){
         const current = document.getElementById(id).value;
         const currentNumber = parseFloat(current);
         return currentNumber;
      }

//||| 1st.
// ---------------------------------------------------------------------------------------------------------------------------------------
//||| minus button(-) click    |||||||

      document.getElementById("minus-button").addEventListener("click",function(){

         // after click phone input number
         const currentPhone = ParseFloatValue("current-phone");
         const afterClickPhone = currentPhone + 1*-1;
         document.getElementById("current-phone").value = afterClickPhone;

         // after click phone cost
         const currentCost = ParseFloatText("current-cost");
         const afterClickCost=currentCost + 1219*-1;
         document.getElementById("current-cost").innerText = afterClickCost;

         // after click Subtotal Balance
         const subTotal = ParseFloatText("sub-total");
         const afterClickSubtotal= subTotal + 1219*-1;
         document.getElementById("sub-total").innerText = afterClickSubtotal;

         // after click Total Balance
         const totaL = ParseFloatText("total");
         const afterClickTotal= totaL + 1219*-1;
         document.getElementById("total").innerText= afterClickTotal;
         })
// .   .   .   .   .    .    .    .    .    .     .     .     .      .     .      .      .      .      .    .    .     .     .    .    .
//||| Plus Button(+) click ||||||||||||

      document.getElementById("plus-button").addEventListener("click",function(){

         // after click phone input number
         const currentPhone = ParseFloatValue("current-phone");
         const afterClickPhone = currentPhone + 1;
         document.getElementById("current-phone").value = afterClickPhone;

         // after click phone cost
         const currentCost = ParseFloatText("current-cost");
         const afterClickCost=currentCost + 1219;
         document.getElementById("current-cost").innerText = afterClickCost;

         // after click Subtotal Balance
         const subTotal = ParseFloatText("sub-total");
         const afterClickSubtotal= subTotal + 1219;
         document.getElementById("sub-total").innerText = afterClickSubtotal;

         // after click Total Balance
         const totaL = ParseFloatText("total");
         const afterClickTotal= totaL + 1219;
         document.getElementById("total").innerText= afterClickTotal;
      })
// .........................................................................................................--------------------------------



//||| 2nd
// ---------------------------------------------------------------------------------------------------------------------------------------
//||| minus button(-) click    |||||||

      document.getElementById("2nd-minus-button").addEventListener("click",function(){
         const currentPhoneCover = ParseFloatValue("current-phone-cover");
         const afterClickPhoneCover= currentPhoneCover + 1*-1; 
         document.getElementById("current-phone-cover").value = afterClickPhoneCover;

         const currentCoverCost = ParseFloatText("current-cover-cost");
         const afterClickCoverCost = currentCoverCost + 59*-1;
         document.getElementById("current-cover-cost").innerText = afterClickCoverCost;

         
         const subTotal = ParseFloatText("sub-total");
         const afterClickSubtotal = subTotal + 59*-1;
         document.getElementById("sub-total").innerText = afterClickSubtotal;

         const total = ParseFloatText("total");
         const afterClickTotal = total + 59*-1;
         document.getElementById("total").innerText = afterClickTotal;     
      })
// .   .   .   .   .    .    .    .    .    .     .     .     .      .     .      .      .      .      .    .    .     .     .    .    .

//||| Plus Button(+) click     ||||||||||||

      document.getElementById("2nd-plus-button").addEventListener("click",function(){
         const currentPhoneCover = ParseFloatValue("current-phone-cover");
         const afterClickPhoneCover= currentPhoneCover + 1; 
         document.getElementById("current-phone-cover").value = afterClickPhoneCover;

         const currentCoverCost = ParseFloatText("current-cover-cost");
         const afterClickCoverCost = currentCoverCost + 59;
         document.getElementById("current-cover-cost").innerText = afterClickCoverCost;


         const subTotal = ParseFloatText("sub-total");
         const afterClickSubtotal = subTotal + 59;
         document.getElementById("sub-total").innerText = afterClickSubtotal;

         const total = ParseFloatText("total");
         const afterClickTotal = total + 59;
         document.getElementById("total").innerText = afterClickTotal;
      })
// ---------------------------------------------------------------------------------------------------------------------------------------
