const express = require("express");
const sendMail = require("./mail");
var cors = require("cors");
const log = console.log;
const app = express();
const path = require("path");

const PORT = 8080;

//Data parsing
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.json());
app.use(cors());
app.use("*/lib", express.static(__dirname + "/lib"));
app.use("*/css", express.static(__dirname + "/css"));
app.use("*/js", express.static(__dirname + "/js"));
app.use("*/img", express.static(__dirname + "/img"));

app.post("/email", (req, res) => {
	const { subject, email, text } = req.body;
	console.log("Data: ", req.body);

	sendMail(email, subject, text, function (err, data) {
		if (err) {
			log("ERROR: ", err);
			return res.status(500).json({ message: err.message || "Internal Error" });
		} else {
			res.json({ message: "Email Sent!!!" });
			console.log("Email Sent!!!");
		}
	});
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "index.html"));
});

app.get("/index.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "index.html"));
});

app.get("/blog.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "blog.html"));
});
app.get("/about.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "about.html"));
});
app.get("/price.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "price.html"));
});
app.get("/portfolio.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "portfolio.html"));
});
app.get("/service.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "service.html"));
});
app.get("/single.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "single.html"));
});
app.get("/team.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "team.html"));
});

app.get("/contact.html", (req, res) => {
	res.sendFile(path.join(__dirname, "./", "contact.html"));
});

app.listen(PORT, () => log("Server starting on port ", 8080));
