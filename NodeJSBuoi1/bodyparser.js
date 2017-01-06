var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(require('./controller/midleware.js'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/tinh', (req, res) => {
    res.render('home', {
        name: "MinhT"
    });
});

app.post('/xulypheptinh', require('./controller/xulypheptinh'));

app.get('/list', require('./controller/list.js'));
app.listen(3000, () => console.log("Server started on port 3000."));
