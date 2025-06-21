const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./routes/ai.route")
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/ai",route )
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})