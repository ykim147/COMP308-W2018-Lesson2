let express = require('express');
let app = express();

// Routing section
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home', (req, res) => res.send('Home sweet home!!!!!!'))

let server = app.listen(3000, () => console.log('Example app listening on port 3000!'))