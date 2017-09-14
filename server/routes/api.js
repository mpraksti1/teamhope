const express = require('express');
const router = express.Router();

const User = require('../../models/user');
const Org = require('../../models/org');
const Initiative = require('../../models/initiative');
const Donation = require('../../models/donation');

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





//Initiative Routes
router.post('/initiative', (req, res, next) => {
  console.log('REQUEST BODY', req.body);

  const initiative = new Initiative(req.body);

  initiative.save(
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

router.get('/initiative/:orgId', (req, res) => {
  const orgId = req.params.orgId;
  Initiative.find({'orgId' : orgId})
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





// Donation Routes
router.post('/donation', (req, res, next) => {
  console.log('REQUEST BODY', req.body);

  const donation = new Donation(req.body);

  donation.save(
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

router.get('/donation/:userId', (req, res) => {
  const userId = req.params.userId;

  Donation.find({'userId' : userId})
    .exec(function (err, donations) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: donations
      });
    });
});





// Rescource Routes
router.post('/rescources', (req, res, next) => {
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


module.exports = router;
