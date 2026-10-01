const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
    res.json({
        status: "healthy",
        server: os.hostname()
    });
});

app.post("/api/submit", (req, res) => {
    const { answer } = req.body;

    if (answer === "Delhi") {
        res.json({
            correct: true,
            message: "Correct! Delhi is the capital of India."
        });
    } else {
        res.json({
            correct: false,
            message: "Incorrect. The correct answer is Delhi."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Online Exam Portal running on port ${PORT}`);
});