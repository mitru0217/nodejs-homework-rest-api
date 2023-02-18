const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
<<<<<<< HEAD
=======
require("dotenv").config();
>>>>>>> 5e59bc1 (done)

const contactsRouter = require("./routes/api/contacts");

const app = express();

<<<<<<< HEAD
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const app = express();
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

=======

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
>>>>>>> 5e59bc1 (done)
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
<<<<<<< HEAD
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
=======
  res.status(500).json({ message: err.message });
>>>>>>> 5e59bc1 (done)
});

module.exports = app;
module.exports = app;
