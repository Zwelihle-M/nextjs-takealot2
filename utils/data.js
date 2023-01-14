import bcrypt from "bcryptjs";


const data = {

  // sample users users
  users:[
    // admin user
    {
      name: "Zweli",
      email:"123@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    // normal user
    {
      name: "Senzo",
      email:"456@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },

  ],
  products: [
    {
      name: "Apple MacBook Pro 16-inch with Apple M1",
      slug: " MacBook Pro",
      category: "laptops",
      image: "/images/macbook.png",
      price: 75000,
      brand: "Apple",
      rating: 5,
      numReviews: 12,
      countInStock: 20,
      description: "will be updated",
    },
    {
      name: "Msi Raider",
      slug: "MSI Raider GE76 ",
      category: "laptops",
      image: "/images/msi.png",
      price: 75000,
      brand: "Msi",
      rating: 5,
      numReviews: 12,
      countInStock: 20,
      description: "GE76 Raider is equipped with the NEW 12th Gen. Intel® Core™ i7 processors and powered by NVIDIA® GeForce RTX™ 3080 8GB graphics, 32GB RAM and a 1TB NVMe SSD for super fast load times. Just as the spaceship traversing throughout the universe by warp speed with extreme performance, the GE76 landed at the gaming battlefield fully-armed. With the most comprehensive features, GE76 Raider will bring gamers to infinity and beyond",
    },

    {
      name:"Sony Headset",
      slug:"Apple airpods",
      category:"laptops",
      image:"/images/headset.png",
      price: 7000,
      brand:"Sony",
      rating:5,
      numReviews:12,
      countInStock: 20,
      description:"will be updated"

   },
   {
    name:"Apple iphone 12 Promax",
    slug:"Apple iphone 12",
    category:"Phones",
    image:"/images/iphone.png",
    price: 37000,
    brand:"Apple",
    rating:7,
    numReviews:16,
    countInStock: 6,
    description:"will be updated"

 },
 {
  name:"ASUS ROG Zephyrus",
  slug:"Asus ROG Zephyrus Duo 16",
  category:"Laptops",
  image:"/images/rog.png",
  price: 87420,
  brand:"Asus",
  rating:12,
  numReviews:20,
  countInStock: 2,
  description:"Asus ROG Zephyrus Duo 16 GX650RX-93210B0W 16 Ryzen 9 Notebook - AMD Ryzen 9 6980HX, 1TB SSD, 2 x 16GB RAM, Windows 11 Home (64-Bit), GeForce RTX 3080Ti (Black)"

},
{
  name:"Samsung Galaxy S22 Ultra",
  slug:"Samsung Galaxy S22 Ultra 256GB Dual Sim - Phantom Black",
  category:"Laptops",
  image:"/images/galaxy.png",
  price: 24000,
  brand:"Samsung",
  rating:56,
  numReviews:129,
  countInStock: 28,
  description: ""

},


  ],
};

export default data;