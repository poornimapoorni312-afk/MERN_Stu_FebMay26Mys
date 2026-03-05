function tagPassword(password) {

    if (typeof password !== "string") {
        return "INVALID";
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            hasLetter = true;
        }

        if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }

    if (password.length < 8) {
        return "WEAK";
    }

    if (password.length >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    }

    if (hasLetter && hasNumber) {
        return "MEDIUM";
    }

    return "WEAK";
}

console.log(tagPassword("cit432"));         // WEAK
console.log(tagPassword("cit12678"));       // MEDIUM
console.log(tagPassword("cit808873180"));   // STRONG
console.log(tagPassword(9876));            // INVALID