const hbs = require("hbs");
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: true });

const pool = mysql.createPool({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
})

pool.getConnection(function (err) {
    if (err) {
        console.log("connected is failed!");
    } else {
        console.log("connected to the database successfully!");
    }
})


app.use("/assets", express.static("assets"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");








app.get("/home", function (req, res) {
    res.render("index");
});

app.get("/member", function (req, res) {
    res.render("member");
});

app.get("/register", function (req, res) {
    res.render("register");
});


app.post("/login", encoder, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    pool.query(
        "SELECT * FROM user WHERE email = ? AND password = ?",
        [email, password],
        function (error, results, fields) {
            if (error) {
                console.log(error);
                res.send(error);
                return;
            }
            if (results.length <= 0) {
                return res.render("index", {
                    message: "Incorrect Email and/or Password!",
                });
            }
            res.render("member");
        }
    );
});

app.post("/register", encoder, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    pool.query(
        "SELECT email FROM user WHERE email = ?",
        [email],
        (error, results) => {
            if (error) {
                console.log(error);
                return;
            }

            if (results.length > 0) {
                return res.render("register", {
                    message: "That is already in usered",
                });
            } else {
                pool.query(
                    `INSERT INTO user (email, password) VALUES(?, ?)`,
                    [email, password],
                    function (error, results) {
                        return res.render("index");
                    }
                );
            }
        }
    );
});



//set app port
app.listen(process.env.PORT, () => {
    console.log("The Website is running");
});
