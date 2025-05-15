const express = require('express');
const path = require('path');
const { connectToMongoDB } = require('./connect');
const URL = require('./models/url');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter')
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/MinimURL').then(() =>
    console.log('MongoDB started')
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine - ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/test', async (req, res) => {
//     // return res.sendFile(path.join(__dirname, 'mansi.html'));
//     const allUrls = await URL.find({});
//     return res.render('home', {
//         urls: allUrls,
//     });
// });

app.use('/url', urlRoute);
app.use('/', staticRoute)

app.use('/url', urlRoute);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    if (!entry) return res.status(404).send('Not Found');
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log('Server started at port', PORT));
