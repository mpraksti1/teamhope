const express = require('express');
const router = express.Router();

const User = require('../../models/user');
const Org = require('../../models/org')
const Resource = require('../../models/resource')

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

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  console.log('ID IS: ', id);

  User.find({'userId': id})
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





//ORG ROUTES






router.post('/org', (req, res, next) => {
  console.log('REQUEST BODY', req.body);

  const org = new Org(req.body);

  org.save(
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

router.get('/org', (req, res) => {
  Org.find()
    .exec(function (err, orgs) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: orgs
      });
    });
});

router.get('/org/:id', (req, res) => {
  const id = req.params.id;

  Org.findOne({'_id': id})
    .exec(function (err, org) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: org
      });
    });
});

//Resource API

router.post('/resources', (req, res, next) => {
  console.log('REQUEST BODY', req.body);
  const resource = new Resource({
    name: req.body.name,
    orgId: req.body.orgId,
    descriptionLong: req.body.descriptionLong,
    descriptionShort: req.body.descriptionShort,
    initiatives: req.body.initiatives,
    Photo: req.body.Photo
  });
  resource.save(
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
module.exports = router;
