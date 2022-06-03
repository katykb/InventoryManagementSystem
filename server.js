require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const inventoryRoutes = require("./controllers/api/inventoryRoutes");
const homeRoutes = require('./controllers/homeRoutes')
const sequelize = require("./config/connection");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
  secret: process.env.SECRET,
  resave: false,
  saveUnitialized: false,
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//removed the path join __dirname
app.use(express.static("public"));
app.use(homeRoutes);
app.use("/api/inventory", inventoryRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening ${PORT}`));
});
