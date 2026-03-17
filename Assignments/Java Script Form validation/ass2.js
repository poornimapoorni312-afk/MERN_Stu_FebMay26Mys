const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const feedbackInput = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const container = document.getElementById("feedbackContainer");
const msg = document.getElementById("msg");

submitBtn.addEventListener("click",function(){

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const type = typeInput.value;
const feedback = feedbackInput.value.trim();
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!name || !email || !type || !feedback){
msg.textContent="All fields required";
msg.style.color="red";
return;
}

if(!email.match(emailPattern)){
msg.textContent="Invalid Email";
msg.style.color="red";
return;
}

if(feedback.length < 20){
msg.textContent="Feedback must be minimum 20 characters";
msg.style.color="red";
return;
}

msg.textContent="Feedback Submitted";
msg.style.color="green";

let label="";

if(type==="Bug"){
label="Needs Review";
}
else if(type==="Suggestion"){
label="Idea";
}
else{
label="Positive";
}

const card = document.createElement("div");
card.className="card";

card.innerHTML = `
<h3>${name}</h3>
<p>Email: ${email}</p>
<p>Type: ${type} <span class="badge">${label}</span></p>
<p>${feedback}</p>
<button class="deleteBtn">Delete</button>
`;

container.appendChild(card);

card.querySelector(".deleteBtn").addEventListener("click",function(){
card.remove();
});

nameInput.value="";
emailInput.value="";
typeInput.value="";
feedbackInput.value="";

});