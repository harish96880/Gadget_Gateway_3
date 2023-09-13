const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/user");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [`http://localhost:5174`],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

mongoose.connect("mongodb://localhost:27017/GG3");

app.get("/", (req, res) => {
  res.send("Hello");
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, "@$edhu$ri9843", (err, decoded) => {
      if (err) {
        return res.json("Error with token");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.json("Not an admin");
        }
      }
    });
  }
};

app.get("/dashboard", verifyUser, (req, res) => {
  res.json("success");
});

app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
      })
        .then((user) => res.json("Success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "@$edhu$ri9843",
            {
              expiresIn: "7d",
            }
          );
          res.cookie("token", token);
          return res.json({ message: "Password is correct", role: user.role });
        } else {
          return res.json("Password is incorrect");
        }
      });
    } else {
      return res.json("No records found");
    }
  });
});

app.listen(8000, () => console.log("App listening on 8000"));
