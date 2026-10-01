async function submitAnswer() {

    const selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    const result = document.getElementById("result");

    if (!selected) {
        result.textContent = "Please select an answer.";
        return;
    }

    const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            answer: selected.value
        })
    });

    const data = await response.json();

    result.textContent = data.message;
}

async function getServerInfo() {

    try {

        const response = await fetch("/api/health");

        const data = await response.json();

        document.getElementById("server").textContent = data.server;

    } catch (error) {

        document.getElementById("server").textContent = "Unavailable";

    }
}

getServerInfo();