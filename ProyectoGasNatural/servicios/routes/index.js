const { Router } = require('express');
const router = Router();

router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

module.exports = router;