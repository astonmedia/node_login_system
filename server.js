const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(port, () =>
  console.log(`Server started on port: http://localhost:${port}`)
);
