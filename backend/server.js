import express from "express"
import cors from "cors"
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// get a random fact
app.get("/api/fact", async (req, res) => {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/facts", {
            method: "GET",
            headers: {
                "X-Api-Key": process.env.API_KEY
            }
        })
        const data = await response.json();

        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "failed to fetch random fact"})
    }
})

// get today's fact
app.get("/api/today", async (req, res) => {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/factoftheday", {
            method: "GET",
            headers: {
                "X-Api-Key": process.env.API_KEY
            }
        })
        const data = await response.json();

        res.status(200).json(data);
    } catch (err) {
        console.error(err)
        res.status(500).json({error: "failed to fetch today's fact"})
    }
})

app.get("/", (req, res) => {
    res.send("Server running")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})