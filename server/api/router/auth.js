const router = require('express').Router();
const { User } = require('../../db/index');

router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      if (email && password) {
          const user = await User.findOne({ where: { email, password } });
              if (!user) {
                  res.sendStatus(401);
                  console.log('Log in failed; invalid credentials');
              } else if (user.loggedIn) {
                res.sendStatus(200);
                console.log('Already logged in as:', user.id);
                } else {
                const loggedInUser = await user.update({loggedIn: true});
                res.json(loggedInUser);
                console.log('Logged in sucessfully as:', user.id);
              }
      } else {
        res.sendStatus(500)
        console.log('Email and password required');
      }
  } catch (e) {
      res.sendStatus(500)
      console.log('Error logging in', e);
  }
});

router.post('/signup', async (req, res) => {
  try {
      const guestUser = await User.findOne({where: {id: req.userId}});
      const { firstName, lastName, email, password, addressLine1, addressLine2, city, state, zipcode, phone } = req.body;

      if (firstName && lastName && email && password) {
          const user = await User.findOne({ where: { email } });
              if (user) {
                  res.sendStatus(401);
                  console.log('Email already exists in the system');
              } else {
                  const registeredUser = await guestUser.update({type: 'registered', loggedIn: true, firstName, lastName, email, password, addressLine1, addressLine2, city, state, zipcode, phone});
                  res.json(registeredUser);
                  console.log('Signed up and logged in as:', registeredUser.id);
              }
      } else {
        res.sendStatus(500);
        console.log('Required fields missing for signup');
      }
  } catch (e) {
      console.log('Error logging in', e);
  }
});

router.post('/logout', async (req, res) => {
  try {
  const user = await User.findOne({where: {id: req.userId}});
    if (user) {
      const loggedOutUser = await user.update({loggedIn: false});
      res.json(loggedOutUser);
      console.log('Logged out successfully');
    } else {
      res.sendStatus(500);
      console.log('User not found for logout');
    }
  } catch (e) {
    res.sendStatus(500);
    console.log('Error logging out', e);
  }
});

module.exports = router;
