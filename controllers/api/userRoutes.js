const router = require('express').Router();
const { User } = require('../../models');


//added console logs to show errors in the terminal
router.post('/login', async (req, res) => {
  try {

    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      console.log('incorrect username');
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }


    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log('incorrect password');
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }


    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.username
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log("database error", err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//create new employee
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.json({ user: newUser, message: 'New employee created' });
      console.log(newUser);
      //  res.redirect("/api/users/register")
    });

  }
  catch (err) {
    console.log("database error", err);
    res.status(500).json(err);
  }

});

module.exports = router;
