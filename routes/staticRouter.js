const express = require('express');
const URL = require('../models/url')

const router = express.Router();

router.get('/', async (req, res) => {
    const allurls = await URL.find({ });
        console.log('All URLs:', allUrls);  // ✅ Debug log

    return res.render('home', {
        urls: allurls,
    });
});

module.exports = router;
