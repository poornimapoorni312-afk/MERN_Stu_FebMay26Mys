const getRoute = function(role, isLoggedIn) {

    // login check
    if(!isLoggedIn){
        return "/login";
    }

    // role routing
    switch(role){

        case "admin":
            return "/admin";

        case "student":
            return "/student";

        case "college":
            return "/college";

        case "proctor":
            return "/proctor";

        default:
            return "/denied";
    }
};
// Example
console.log(getRoute("admin", true));     // /admin
console.log(getRoute("student", true));   // /student
console.log(getRoute("guest", true));     // /denied
console.log(getRoute("admin", false));    // /login