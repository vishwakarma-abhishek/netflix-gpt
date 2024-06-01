export const checkValidation = (email, password) =>{

    const isEmailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);

    if(email === "" && password === "" ) return "Email and Password fields are empty!"
    if(email === ""  ) return "Email field is empty!"
    if(password === "" ) return "Password field is empty!"

    
    if( !isEmailValid) return "Email is not valid!";
    if(!isPasswordValid) return "Password is not vaild!"

    return null;



}