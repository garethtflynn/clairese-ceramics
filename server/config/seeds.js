const db = require("./connection");
const { User, Category, Product } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Main-Line" },
    { name: "Custom-Line" },
  ]);

  console.log("categories seeded!");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "curvy mug",
      description: "curvy mug in a cool brown/blue glaze",
      image: "curvymug1.jpg",
      category: categories[0]._id,
      price: 20.0,
      quantity: 5,
    },
    {
      name: "pitcher",
      description: "pitcher in a cool brown/blue glaze",
      image: "pitcher1.jpg",
      category: categories[0]._id,
      price: 25.0,
      quantity: 3,
    },
    {
      name: "mug set with milk jug",
      description: "set of mugs, milk jug, and sugar cup",
      image: "set1.jpg",
      category: categories[0]._id,
      price: 40.0,
      quantity: 1,
    },
    {
      name: "mug set",
      description: "set of mugs.",
      image: "twinmug1.jpg",
      category: categories[0]._id,
      price: 30.0,
      quantity: 1,
    },
  ]);

  console.log("products seeded!");

  await User.deleteMany();

  await User.create({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@testmail.com',
    password: 'password123',
    orders: [
        {
            products: [products[0]._id, products[1]._id, products[2]._id, products[3]._id]
        }
    ]
  })

  console.log('users seeded!')
  process.exit();
});
