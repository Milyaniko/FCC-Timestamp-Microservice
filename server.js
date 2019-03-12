
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { router } = require('./app')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', router);
app.listen(port, () => console.log('Your app is listening on port ' + port));