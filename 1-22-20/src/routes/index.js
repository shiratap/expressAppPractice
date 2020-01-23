const router = require('express').Router();

// router.get('/', (req, res) => {
//   res.send();
// });

router.use(require('404'));
router.use(require('500'));

module.exports = router;
