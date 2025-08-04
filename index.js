require('dotenv').config();
var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));


app.use(express.static('public'));


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", (req, res) => {
  res.json({ greeting: 'hello API' });
});

app.get("/api/:date", (req, res) => {
  const dateParam = req.params.date;
  let yourDate;
  if (!isNaN(dateParam)) {
    yourDate = new Date(parseInt(dateParam));
  } else {
    yourDate = new Date(dateParam);
  }
  res.json({ unix: yourDate.getTime(), utc: yourDate.toUTCString() });
});



var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
