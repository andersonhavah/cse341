const express = require('express');
const app = express();
const router = express.Router();
 
router.get('/', (req, res) => {
  res.send('Hello World, This is Anderson\'s router');
});
 
app.use('/', router);

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});