var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

router.get('/health', function (req, res) {
  exec('bash -c "/bin/bash /userconfig/health.sh 2>&1"', (err, stdout, stderr) => {
    res.type('.txt').send(stdout);
  });
});
router.get('/network', function (req, res) {
  exec('bash -c "/bin/bash /userconfig/network.sh 2>&1"', (err, stdout, stderr) => {
    res.type('.txt').send(stdout);
  });
});

module.exports = router;
