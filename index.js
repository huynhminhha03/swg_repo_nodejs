
require('dotenv').config();
const express = require("express");
const userRoute = require("./src/routes/user.route");
const app = express();
const morgan = require("morgan");
const sequelize = require("./src/configs/database");
const swaggerSetup = require("./swagger");
const nodemon = require("nodemon");

async function createDatabase() {
    try {
        // Sync all models defined in sequelize
        sequelize.authenticate();
        await sequelize.sync({ force: false }); // Use `force: true` to drop and recreate the tables (use with caution in production)
    } catch (error) {
        console.error('Error creating the database:', error);
    }
  }
app.use(express.json());
app.use(morgan('combined'))


app.use("/api/v1/users", userRoute);
swaggerSetup(app);

app.listen(3001, () => {
  createDatabase();
  console.log("Server is running on port 3001");
});
