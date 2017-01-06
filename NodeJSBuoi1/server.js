var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads');
  },
  filename: function(req,file,cb){
    cb(null,Date.now() + '-'+file.originalname );
  }
});
var upload = multer({storage})

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
app.get('/list', require('./controller/list.js'));
app.post('/xulypheptinh', require('./controller/xulypheptinh'));
app.get('/upload', require('./controller/getUpload'));
app.post('/xulyupload',upload.single('avatar'),(req,res) =>{ //avatar name of input
  res.send("da nhan duoc hinh.");
});
app.listen(3000, () => console.log("Server started on port 3000."));
