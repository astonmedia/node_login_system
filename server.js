const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 8000;

// Load body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// Load static assets
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Home route
app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(port, () =>
  console.log(`Server started on port: http://localhost:${port}`)
);
