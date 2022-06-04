const router = require("express").Router();
const { User, Product } = require("../models");

//if user is already logged in we didn't need lines 8-13
router.get("/", async (req, res) => {
  try {
    // const userData = await User.findAll({
    //     attributes: { exclude: ['password'] },
    //     order: [['username', 'ASC']],
    // });

    // const users = userData.map((project) => project.get({ plain: true } ));

    if (req.session.logged_in) res.render("homepage");
    else res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

//added to get the inventory front end to run
//console log to make sure inventory get is working
router.get("/enterInventory", (req, res) => {
  console.log("Inventory GET");
  if (req.session.logged_in) {
    console.log(req.session);
    res.render("enterInventory", {
      logged_in: true,
      username: req.session.username,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/checkInventory", (req, res) => {
  console.log("Inventory GET");
  if (req.session.logged_in) {
    console.log(req.session);
    res.render("checkInventory", {
      logged_in: true,
      username: req.session.username,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/inventory/genre/:category_id", async (req, res) => {
  const category_id = req.params.category_id;
  const categoryProducts = await Product.findAll({ where: { category_id } });
  const matchingProducts = categoryProducts.map((product) => {
    return product.get({ plain: true });
  });
  console.log(matchingProducts);
  res.render("showProducts", { matchingProducts });
});

router.get("/inventory/media/:media_type", async (req, res) => {
  const media_type = req.params.media_type;
  const mediaProducts = await Product.findAll({ where: { media_type } });
  const matchingProducts = mediaProducts.map((product) => {
    return product.get({ plain: true });
  });
  console.log(matchingProducts);
  res.render("showProducts", { matchingProducts });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
