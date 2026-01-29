import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/fact", async (req, res) => {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        const data = await response.json();

        res.json(data)
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})