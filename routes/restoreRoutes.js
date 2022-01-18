const express = require("express");
const router = express.Router();
const restoreItems = (db, id) => {
  return db.query(`
  UPDATE items SET status = $1 
  WHERE id = $2
  `, [0, id])
  .then(data => data.rows)
}

module.exports = (db) => {
  router.get('/:id', (request, response) => {
    const id = request.params.id;
    console.log(id)
    restoreItems(db, id).then(items => 
      {
        console.log(data);
        response.json({items})
      }
      )
    })
  return router;
}