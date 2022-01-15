const express = require("express");
const router = express.Router();
const deleteItems = (db) => {
  return db.query(`
  SELECT  items.id AS identity, Items.name AS item_name, items.item_quantity, items.location, items.created_at, items.vendor_id, items.total AS Amount, vendors.id, vendors.name AS vendors_name FROM items 
  JOIN vendors ON items.vendor_id = vendors.id
  WHERE items.status = $1
  `, [1])
  .then(data => data.rows)
}

module.exports = (db) => {
  router.get('/', (request, response) => {
    deleteItems(db).then(data => 
      {
        console.log(data);
        response.render('pages/deletedItems', {pageTitle: 'Welcome', items:data})
      }
      )
    })
  return router;
}