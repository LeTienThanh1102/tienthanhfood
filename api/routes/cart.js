const router = require("express").Router();
const cartControllers = require("../controllers/cartControllers");

router.get("/:userId", cartControllers.getCartbyUserId);
router.post("/add", cartControllers.addToCart);
router.put("/update", cartControllers.updateCartItem);
router.delete("/remove/:userId", cartControllers.removeFromCart);

module.exports = router;
