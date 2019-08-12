var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req,res){
  res.render('index');
})

app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
      console.log('Server listening on port ' +app.get('port'));
});