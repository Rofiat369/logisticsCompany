const express = require("express");
const { db } = require('./connect');

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render('pages/index', {pageTitle: 'Welcome'})
});

const inventoryRoutes = require('./routes/inventoryRoutes');
app.use('/inventory', inventoryRoutes(db));

const deletedRoutes = require('./routes/deletedRoutes');
app.use('/delete', deletedRoutes(db));

const restoredRoutes = require('./routes/restoreRoutes');
app.use('/restore', restoredRoutes(db));


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});