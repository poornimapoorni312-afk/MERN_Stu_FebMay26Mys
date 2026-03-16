const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addBtn");
const faqContainer = document.getElementById("faqContainer");
const message = document.getElementById("message");
const emptyMsg = document.getElementById("emptyMsg");

addBtn.addEventListener("click", function () {

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    // validation
    if(question.length < 5){
        message.textContent = "Question must be at least 5 characters";
        message.style.color = "red";
        return;
    }

    if(answer.length < 15){
        message.textContent = "Answer must be at least 15 characters";
        message.style.color = "red";
        return;
    }

    message.textContent = "FAQ Added Successfully";
    message.style.color = "green";

    emptyMsg.style.display = "none";

    const faq = document.createElement("div");
    faq.className = "faq";

    const q = document.createElement("h3");
    q.textContent = question;

    const a = document.createElement("p");
    a.textContent = answer;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", function(){
        faq.remove();

        if(faqContainer.children.length === 1){
            emptyMsg.style.display = "block";
        }
    });

    faq.appendChild(q);
    faq.appendChild(a);
    faq.appendChild(deleteBtn);

    faqContainer.appendChild(faq);

    // badge using insertAdjacentHTML
    q.insertAdjacentHTML("beforeend",
        `<span class="badge">NEW</span>`
    );

    questionInput.value = "";
    answerInput.value = "";
});