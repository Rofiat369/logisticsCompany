const express = require("express");
// const bodyParser = require("body-parser");
// const db = require("itemsQueries");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// uses body parser globally
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

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