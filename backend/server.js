const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "driwe_db",
  connectionLimit: 10
});

console.log("✅ MySQL Pool Created");

// Check MySQL Connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected");
    connection.release();
  }
});


// ================= REGISTER API =================
app.post("/register", (req, res) => {

  const { name, email, password, MobileNumber } = req.body;

  if (!name || !email || !password || !MobileNumber) {
    return res.status(400).json({
      message: "Please fill all fields"
    });
  }

  const sql = "INSERT INTO users (name,email,password,MobileNumber) VALUES (?,?,?,?)";

  db.query(sql, [name, email, password, MobileNumber], (err, result) => {

    if (err) {

      // Duplicate email error
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({
          message: "Email already exist"
        });
      }

      console.log("Register error:", err);

      return res.status(500).json({
        message: "Registration failed",
        error: err.message
      });
    }

    res.json({
      message: "User registered successfully"
    });

  });

});


// ================= LOGIN API =================
app.post("/login", (req, res) => {

  console.log("Login request:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please enter email and password"
    });
  }

  const sql = "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {

    if (err) {
      console.log("Login DB error:", err);

      return res.status(500).json({
        message: "Login failed",
        error: err.message
      });
    }

    if (result.length > 0) {

      res.json({
        message: "Login successful",
        user: result[0]
      });

    } else {

      res.status(401).json({
        message: "Invalid email or password"
      });

    }

  });

});

// ================= GET USER PROFILE =================
app.get("/user/profile", (req, res) => {

  const email = req.headers.email;

  if (!email) {
    return res.status(400).json({
      message: "Email required"
    });
  }

  const sql = "SELECT name,email,MobileNumber FROM users WHERE email=?";

  db.query(sql, [email], (err, result) => {

    if (err) {
      return res.status(500).json({
        message: "Database error",
        error: err.message
      });
    }

    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({
        message: "User not found"
      });
    }

  });

});


// ================= CONTACT API =================
app.post("/contact", (req, res) => {

  const { FirstName, LastName, Email, ContactNumber, Message } = req.body;

  if (!FirstName || !LastName || !Email || !ContactNumber || !Message) {
    return res.status(400).json({
      message: "Please fill all fields"
    });
  }

  const sql = `
  INSERT INTO contactus 
  (FirstName, LastName, Email, ContactNumber, Message)
  VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [FirstName, LastName, Email, ContactNumber, Message],
    (err, result) => {

      if (err) {
        console.log("Contact error:", err);

        return res.status(500).json({
          message: "Failed to submit message",
          error: err.message
        });
      }

      res.json({
        message: "Message submitted successfully"
      });

    }
  );
});


// ================= SERVER =================
const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});