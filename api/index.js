const router = require("express").Router();

const photos = require("./photos");

router.use("/photos", photos);

module.exports = router;