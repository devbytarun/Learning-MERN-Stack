const express = require("express");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello from Express!</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});
app.get("/search", (req, res) => {
  res.json({ name: req.query.name, city: req.query.city });
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});
app.get("/api/user", (req, res) => {
  res.json({ name: "Tarun", age: 19, city: "Sri Ganganagar" });
});
app.post("/login", (req, res) => {
  res.json({ message: "Login successful!", email: req.body.email });
});

// 4. 404 sabse neeche
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page nahi mila!</h1>");
});

app.listen(8080, () => {
  console.log("Express server chal raha hai port 8080 pe");
});
