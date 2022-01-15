const express = require("express");
const router = express.Router();
const getItems = (db) =>{
  return db.query(`
  SELECT  items.id AS identity, Items.name AS item_name, items.item_quantity, items.location, items.created_at, items.vendor_id, items.total AS Amount, vendors.id, vendors.name AS vendors_name FROM items 
  JOIN vendors ON items.vendor_id = vendors.id
  WHERE items.status = $1
  `, [0])
  .then(data => 
    {
      // console.log(data.rows)
      return data.rows
    }
    )
}

module.exports = (db) => {
  router.get('/', (request, response) => {
    getItems(db).then(data => 
      {
        // console.log(data);
        response.render('pages/inventory', {pageTitle: 'Welcome', items:data})
      }
      )
    })
  return router;
}
