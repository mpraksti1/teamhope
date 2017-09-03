const express = require('express');
const router = express.Router();

const User = require('../../models/user');

/* GET api listing. */
router.post('/', (req, res) => {
  res.render('index');
});

router.post('/users', (req, res, next) => {
  console.log('REQUEST BODY', req.body);
  const user = new User({
    userId: req.body.userId,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  user.save(
    (err, result) => {
      if(err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        })
      }
      res.status(201).json({
        title: 'Success',
        data: result
      });
    }
  )
});

// Get all posts
router.get('/users', (req, res) => {
  User.find()
    .exec(function (err, students) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: students
      });
    });
});

module.exports = router;
