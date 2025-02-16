"use strict";
function isleagal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isleagal({
    firstname: "prashant",
    lastname: "parashar",
    age: 20
});
