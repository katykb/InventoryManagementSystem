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

router.get("/checkInventory", async (req, res) => {
  const categoryProducts = await Product.findAll({});
  const product = categoryProducts.map((product) => {
    return product.get({ plain: true });
  });
  console.log("Inventory GET");
  if (req.session.logged_in) {
    console.log(req.session);
    res.render("checkInventory", {
      logged_in: true,
      product: product,
      username: req.session.username,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/subtractInventory", (req, res) => {
  console.log("Inventory GET");
  if (req.session.logged_in) {
    console.log(req.session);
    //console.log(product_artist, product_name, quantity);
    res.render("subtractInventory", {
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

router.get("/inventory/name/:product_name", async (req, res) => {
  const product_name = req.params.product_name;
  const titleProducts = await Product.findAll({ where: { product_name } });
  const matchingProducts = titleProducts.map((product) => {
    return product.get({ plain: true });
  });
  console.log(matchingProducts);
  console.log(product_name);
  res.render("showProducts", { matchingProducts });
});

router.get("/inventory/artist/:product_artist", async (req, res) => {
  const product_artist = req.params.product_artist;
  const artistProducts = await Product.findAll({ where: { product_artist } });
  const matchingProducts = artistProducts.map((product) => {
    return product.get({ plain: true });
  });
  console.log(matchingProducts);
  res.render("showProducts", { matchingProducts });
});

router.get("/homepage", (req, res) => {
  console.log("Homepage GET");
  if (req.session.logged_in) {
    console.log(req.session);
    res.render("homepage", {
      logged_in: true,
      username: req.session.username,
    });
  } else {
    res.redirect("/");
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/register", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  }
  res.render("registerEmployee");
});

router.get("/users", async (req, res) => {
  const db_users = await User.findAll({});

  const users = db_users.map((user) => user.get({ plain: true }));

  console.log(users);

  res.render("users", { users });
});
module.exports = router;

// router.get('/inventory/:product_name', async (req, res) => {
//   const product_name = req.params.product_name;
//   const nameProduct = await Product.findAll({ where: { product_name } })
//   const matchingProducts = nameProducts.map(product => {
//     return product.get({ plain: true })
//   })
//   console.log(matchingProducts);
//   res.render("showProducts", { matchingProducts })
// })
