const getRoute = function(role, isLoggedIn) {
    // Check login first
    if (!isLoggedIn) {
        return "login";
    }
    switch(role) {
        case "admin":
            return "admin";
        case "student":
            return "student";
        case "college":
            return "college";
        case "proctor":
            return "proctor";
        default:
            return "denied";
    }
};
console.log(getRoute("admin",true));     // "admin"
console.log(getRoute("student", true));   // "student"
console.log(getRoute("guest", true));     // "denied"
console.log(getRoute("admin", false));    // "login"