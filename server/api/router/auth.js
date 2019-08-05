const router = require('express').Router();
const { User, Session } = require('../../db/index');

// check auth status
router.get('/', (req, res) => {
  console.log('request', req.userId, req.userType);
  res.send({ loggedIn: typeof req.userId === 'string' && req.userType === 'registered' });
});

router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      if (email && password) {
          const user = await User.findOne({ where: { email, password } });
              if (!user) {
                  res.sendStatus(401);
                  console.log('Log in failed; invalid credentials');
              } else if (req.userId && req.userType === 'registered') {
                res.sendStatus(200);
                console.log('Already logged in as:', user.id);
              } else {
                  const userSession = await Session.findByPk(req.session.id);

                  if (userSession.userId) {
                    await userSession.destroy();
                    await Session.create({sid: req.session.id, userId: user.id})
                  } else {
                    await userSession.update({ userId: user.id });
                  }
                  res.json(user);
                  req.userId = user.id;
                  req.userType = user.type;
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
      const { firstName, lastName, email, password, addressLine1, addressLine2, city, state, zipCode, phone } = req.body;

      if (firstName && lastName && email && password) {
          const user = await User.findOne({ where: { email } });
              if (user) {
                  res.sendStatus(401);
                  console.log('Email already exists in the system');
              } else {
                  const registeredUser = await guestUser.update({type: 'registered', firstName, lastName, email, password, addressLine1, addressLine2, city, state, zipCode, phone});
                  res.json(registeredUser);
                  req.userType = registeredUser.type;
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
// Clear the session from the database.
const session = await Session.findByPk(req.session.id);
await session.destroy();
// Clear the session from memory...
req.session.destroy(err => {
  if (err) {
    res.sendStatus(500);
  } else {
    res.clearCookie(process.env.SESH_NAME);
    res.redirect('/');
  }
});
} catch (e) {
  res.sendStatus(500);
  console.log('Error logging out', e);
}
});

module.exports = router;
