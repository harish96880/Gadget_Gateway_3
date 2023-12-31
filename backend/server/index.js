//Required Node js modules
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/user");
const Token = require("./models/Token");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

//Environment Variables
require("dotenv").config();

//Middlewares
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [`http://localhost:5173`],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//Database Connection
mongoose.connect("mongodb://localhost:27017/GG3");

//Routes
app.get("/", (req, res) => {
  res.send("Hello"); //for checking connection
});

app.get("/users/confirm/:id", async (req, res) => {
  // For email verification
  try {
    const token = await Token.findOne({ token: req.params.id });
    await UserModel.updateOne(
      { _id: token.userId },
      { $set: { verified: true } }
    );
    await Token.findByIdAndRemove(token._id);
    res.redirect("http://localhost:5173/emailVerified");
  } catch (error) {
    res.redirect("http://localhost:5173/emailNotVerified");
  }
});

app.post("/get/datafor/:token", async (req, res) => {
  // For password reset
  console.log(req.body.password);
  try {
    const token = await Token.findOne({ token: req.params.token });
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await UserModel.updateOne(
      { _id: token.userId },
      { $set: { password: hashedPassword } }
    );
    await Token.findByIdAndRemove(token._id);
    return res.json("successpwd");
  } catch (error) {
    return console.log(error);
  }
});

const verifyEmail = async (email, link) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_MAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "sriharishr105@gmail.com",
      to: email,
      subject: "Account Verification - Gadget Gateway 3",
      text: "Account must be verified before login",
      html: `
      <div>
      <a
        href=${link}
        style="
          background-color: rgb(35, 141, 255);
          padding: 15px;
          text-decoration: none;
          color: white;
          font-weight: 900;
          font-family: monospace;
          border-radius: 12px;
        "
        >Click here to verify your account</a
      >
    </div>
      `,
    });
    console.log("Email sent!!!");
  } catch (error) {
    console.log(error);
  }
};

const emailSentForPasswordRec = async (email, link) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_MAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "sriharishr105@gmail.com",
      to: email,
      subject: "Reset Password - Gadget Gateway 3",
      text: "Password Reset approval",
      html: `
      <div>
      <a
        href=${link}
        style="
          background-color: rgb(35, 141, 255);
          padding: 15px;
          text-decoration: none;
          color: white;
          font-weight: 900;
          font-family: monospace;
          border-radius: 12px;
        "
        >Click here to reset your password</a
      >
    </div>
      `,
    });
    console.log("Email sent!!!");
  } catch (error) {
    console.log(error);
  }
};

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

app.post("/emailpasswordreset", (req, res) => {
  const email = req.body.email;
  UserModel.findOne({ email: email }).then((user) => {
    if (!user) {
      console.log("No records");
    } else {
      const token = new Token({
        userId: user._id,
        token: crypto.randomBytes(16).toString("hex"),
      });
      token.save();
      console.log(token);
      const link = `http://localhost:5173/reset/password/${token.token}`;
      emailSentForPasswordRec(user.email, link);
      res.json("Email Sent");
    }
  });
});

app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  UserModel.findOne({ email: email }).then((exist) => {
    if (exist) return res.json("already_exist");
    else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          UserModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash,
          })
            .then((user) => {
              const token = new Token({
                userId: user._id,
                token: crypto.randomBytes(16).toString("hex"),
              });
              token.save();
              console.log(token);
              const link = `http://localhost:8000/users/confirm/${token.token}`;
              verifyEmail(user.email, link);
              res.json("Email Sent");
            })
            .catch((err) => res.json(err));
        })
        .catch((err) => console.log(err));
    }
  });
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
          return res.json({
            message: "Password is correct",
            role: user.role,
            verified: user.verified,
          });
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
