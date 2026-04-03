// How Cookies is used to track session ID
//simulated server-side session store
const sessionStore = {
    "abc123":{
        userId: 101,
        username: "Poorni",
        role:"student"
    }
};

//Simulated browser cookie value
const browserCookieSessionId = "abc123";
  
const sessionData = sessionStore[browserCookieSessionId];
console.log("Server-side session data:",sessionData);