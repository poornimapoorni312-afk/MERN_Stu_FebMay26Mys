const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");
const postIdInput = document.getElementById("postIdInput");

asyncFetchBtn.addEventListener("click",
    // async is used becoz 
    async function () {
        const id = postIdInput.value.trim();
        if (id === "") {
            output.textContent = "Post ID is required";
            return;
        }
        const numericId = Number(id);
        if (numericId < 1 || numericId > 100) {
            // output.textContent="Enter number between 1 to 100";
            return;
        }

        try {
            output.textContent = "Fetching user ....";
            const response = await   //await: it waits till respose is received
                fetch("https://jsonplaceholder.typicode.com/posts/" + numericId);
            if (!response.ok) throw new Error("HTTP error: " + response.status);
            const data = await response.json();
            output.textContent = JSON.stringify(data, null, 2);

        }
        catch (error) {
            output.textContent = "Error: " + error.message;
        }
    }
);