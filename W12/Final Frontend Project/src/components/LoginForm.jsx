import { useState } from "react";

export default function LoginForm() {
    const [email,setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Login: ${email}`);
    }
    return(
        <section>
            <h2>Login</h2> 
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email"
                value={email} onCharge = {(event) => {
                    setEmail(event.target.vlaue);

                }}/>
                <button>Login</button>
            </form>
        </section>
    );
}