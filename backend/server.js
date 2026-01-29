import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// get a random fact
app.get("/api/fact", async (req, res) => {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
        const data = await response.json();

        res.json(data)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "failed to fetch random fact"})
        
    }
})

// get today's fact
app.get("/api/today", async (req, res) => {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today?language=en")
        const data = await response.json();

        res.json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json({error: "failed to fetch today's fact"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})