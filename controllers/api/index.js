const router = require('express').Router();
const userRoutes = require('./userRoutes');
const inventoryRoutes = require('./inventoryRoutes')

router.use('/users', userRoutes);
router.use('/inventory',inventoryRoutes);
<<<<<<< HEAD
router.use('./enterInventory', inventoryRoutes);
router.use('./checkInventory', inventoryRoutes);
=======
router.use('/enterInventory', inventoryRoutes);
router.use('/checkInventory', inventoryRoutes);
>>>>>>> 42ba3c1fc20006b2846e73284ccb486607d23c51


module.exports = router;

