
 function validEmail(email) {
   if (typeof email !== "undefined") {
   const emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return (emailValid.test(email)? null: "Invalid email");
   }
   return "Invalid email"
}
function validFeature(feature) {
      if (typeof feature !== "undefined") {
         if (!feature.match("[A-Za-z]+")||feature==='') {
            return "This is a required field, Please Don't Use Numbers";
         }
         else  return null;
      }
      return "This is a required field, Please Don't Use Numbers";
   }
function validNumber(number){
   if ( number !== "") {
      return null;
   }
   return "This is a required field!!";
}

export {
   validFeature,validEmail,validNumber
}