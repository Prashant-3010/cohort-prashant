interface User {
    firstname : string,
    lastname : string,
    age : number
}

function isleagal(user : User) {
    if( user.age > 18) {
        return true;
    } else {
        return false;
    }
}

isleagal({
    firstname: "prashant",
    lastname : "parashar",
    age : 20
})