const router = require("express").Router();
const { Product } = require("../../models");


router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const [updateProduct ,test] = await Product.findOrCreate({
      where: { product_name: req.body.product_name },
      defaults: {  user_id: req.session.user_id, ...req.body},
      
    });
    
    if(!test){
      console.log('updateProduct' + JSON.stringify(updateProduct));
      const addNewProduct = await Product.update({
        quantity:  req.body.quantity + updateProduct.quantity, 
        retail_price: req.body.retail_price,
        wholesale_price: ((req.body.wholesale_price * req.body.quantity) + (updateProduct.wholesale_price * updateProduct.quantity))/(req.body.quantity + updateProduct.quantity)
      },
      {where: {id : updateProduct.id}}
      )
    
    console.log(addNewProduct,"Update");
    // const newProduct = await Product.create({
    //   ...req.body,
    //   user_id: req.session.user_id,
    // });
    if(addNewProduct){
    console.log(addNewProduct,"Update/create",test);
    res.status(200).json(addNewProduct);
    }else{
      console.log("Err",err)
    }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  } 
});

router.put('/:id/subtract', async (req, res) => {
  const subtractProduct = await Product.findByPk(req.params.id)
  const oldQuantity = subtractProduct.quantity
  const dbResponse = await Product.update({
    quantity: oldQuantity - 1
  },
  {
    where: {
      id: req.params.id
    }
  })
  res.json(dbResponse);
})

router.get("/", async (req, res) => {
  try {
    res.send("it is working");
  } catch (err) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router
