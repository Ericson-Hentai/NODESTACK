const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT  = process.env.PORT || 5000;



// SEt Moddleware HandleBars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set HandleBars Route
app.get('/', function (req, res) {
    res.render('home', {
        stiff: "Some Data"
    });
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log("Server Listening in " + PORT));