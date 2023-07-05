const express = require("express");
const morgan = require("morgan");
const usersRoutes = require('./routes/users.routes');

const app = express();


app.use(morgan('dev'));
app.use(usersRoutes);

app.listen(3000);
console.log("Server on port 3000");
