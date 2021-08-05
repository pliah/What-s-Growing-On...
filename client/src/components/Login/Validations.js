
function IsValidAdminDetails(name, password,admins) {
   
    for (let index = 0; index < admins.length; index++) {
        debugger;
        if (password.length === 0 && name.length === 0) {
            return "Name and password required";
        }
        else if (name.length === 0) {
            return "Name required";
        }
        else if (password.length === 0) {
            return "Password required";

        }
        if (admins[index].name === name) {

            if (admins[index].password === password) {
                return "";
            }
            else
                return "Password incorrect"
        };

    }
    return "Name incorrect"
}
function IsValidNameAndPassword(name,password){
    debugger
        if ((!name.match("[A-Za-z]+")||name==='')&&password.length<8) {
            return "This is a required fields,  Don't Use Numbers in your name,your password is too short ";
        }
        else if(password.length<8){
            return "Your password is too short" ;
        }
        else if(!name.match("[A-Za-z]+")||name===''){
            return "This is a required fields,  Don't Use Numbers in your name"
        }
        return "";
    
}
export {IsValidAdminDetails,IsValidNameAndPassword}