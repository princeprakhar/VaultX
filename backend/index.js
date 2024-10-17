const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();
// Add the cors() middleware for the app to connect frontend requests
app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE"
}));

// Add the express.json() middleware
app.use(express.json());


// Add the rootRouter to the app
app.use("/root", rootRouter);


app.listen(4001, () => {  
  console.log("Server is running on PORT 4001");
});
