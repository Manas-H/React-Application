// const Cart = require("../models/Cart");


// router.get("/cart/:id", async (req,res) => {
//   const userId = req.params.id;
//   try{
//       let cart = await Cart.findOne({userId});
//       if(cart && cart.items.length>0){
//           res.send(cart);
//       }
//       else{
//           res.send(null);
//       }
//   }
//   catch(err){
//       console.log(err);
//       res.status(500).send("Something went wrong");
//   }
// });

// router.post("/cart/:id",async (req,res) => {
//   const userId = req.params.id;
//   const { productId, quantity } = req.body;

//   try{
//       let cart = await Cart.findOne({userId});
//       let item = await Item.findOne({_id: productId});
//       if(!item){
//           res.status(404).send('Item not found!')
//       }
//       const price = item.price;
//       const name = item.title;

//       if(cart){
//           // if cart exists for the user
//           let itemIndex = cart.items.findIndex(p => p.productId == productId);

//           // Check if product exists or not
//           if(itemIndex > -1)
//           {
//               let productItem = cart.items[itemIndex];
//               productItem.quantity += quantity;
//               cart.items[itemIndex] = productItem;
//           }
//           else {
//               cart.items.push({ productId, name, quantity, price });
//           }
//           cart.bill += quantity*price;
//           cart = await cart.save();
//           return res.status(201).send(cart);
//       }
//       else{
//           // no cart exists, create one
//           const newCart = await Cart.create({
//               userId,
//               items: [{ productId, name, quantity, price }],
//               bill: quantity*price
//           });
//           return res.status(201).send(newCart);
//       }       
//   }
//   catch (err) {
//       console.log(err);
//       res.status(500).send("Something went wrong");
//   }
// });

// router.delete("/cart/:userId/:itemId", async (req,res) => {
//   const userId = req.params.userId;
//   const productId = req.params.itemId;
//   try{
//       let cart = await Cart.findOne({userId});
//       let itemIndex = cart.items.findIndex(p => p.productId == productId);
//       if(itemIndex > -1)
//       {
//           let productItem = cart.items[itemIndex];
//           cart.bill -= productItem.quantity*productItem.price;
//           cart.items.splice(itemIndex,1);
//       }
//       cart = await cart.save();
//       return res.status(201).send(cart);
//   }
//   catch (err) {
//       console.log(err);
//       res.status(500).send("Something went wrong");
//   }
// });

const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE 
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER CART
router.get("/find/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL

router.get("/", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;