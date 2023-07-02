const xlsx = require("xlsx");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get("/getSingleStudent", (req, res) => {
  res.send({ id: 14, name: "Anthony", age: 24 });
});

app.get("/getAllStudents", (req, res) => {
  //   res.send([
  //     { id: 14, name: "Anthony", age: 24 },
  //     { id: 17, name: "Elie", age: 24 },
  //     { id: 25, name: "Mhmd", age: 22 },
  //     { id: 44, name: "Riham", age: 21 },
  //     { id: 89, name: "Maya", age: 20 },
  //     { id: 103, name: "Youssef", age: 19 },
  //   ]);
  let wb = xlsx.readFile("data.xlsx");
  let ws = wb.Sheets["students"];
  data = xlsx.utils.sheet_to_json(ws);
  res.send(data);
});

app.post("/login", (req, res) => {
  let _username = req.body.username;
  let _password = req.body.password;
  if (_username === "rony" && _password === "rizk") {
    res.status(200).send("Success");
  } else {
    res.status(403).send("Wrong username and/or password");
  }
});

app.listen(PORT);
