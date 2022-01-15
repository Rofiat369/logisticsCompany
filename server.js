const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render('pages/index', {pageTitle: 'Welcome'})
  
});

app.get("/inventory", (request, response) => {
  response.render('pages/inventory', {pageTitle: 'Welcome'})
  
});

app.get("/deleted", (request, response) => {
  response.render('pages/deletedItems', {pageTitle: 'Welcome'})
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});