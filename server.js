const express = require("express");
const path = require("path");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const router = require("./router");

const app = express();

const port = process.env.PORT || 8000;

// Load body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// Load static assets
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Load sessions
app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

// Load Router
app.use("/route", router);

// Home route
app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(port, () =>
  console.log(`Server started on port: http://localhost:${port}`)
);
