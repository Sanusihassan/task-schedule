// configs
const mysql = require("mysql");
const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "task",
});

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connection.connect();

/**
 * Task:
 * Create four Apis (Get ScheduleI Table ,
 * Insert new ScheduleI,
 * Edit ScheduleI,
 * Delete ScheduleI).
 */
// get Get ScheduleI Table route
app.get("/", (req, res) => {
  // res.send("hello world");
  connection.query(
    "SELECT * FROM ScheduleI;",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});
function toSQLDate(d) {
  return new Date(d).toISOString().slice(0, 19).replace("T", " ");
}
// Insert new ScheduleI route
app.post("/", (req, res) => {
  let schedule = req.body;
  schedule.date = toSQLDate(schedule.date);
  connection.query("INSERT INTO ScheduleI SET ?", schedule, function (error) {
    if (error) throw error;
    // Neat!
  });
  res.send(req.body);
});
// Edit ScheduleI route
app.put("/", (req, res) => {
  let schedule = req.body;
  schedule.date = toSQLDate(schedule.date);
  // execute the UPDATE statement
  connection.query(
    "UPDATE ScheduleI SET ? WHERE id = ?",
    schedules,
    (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      console.log("Rows affected:", results.affectedRows);
    }
  );

  res.send("got a put request at /");
});

app.listen(port, () => {
  console.log(`application is running on http://localhost:${port}`);
});
