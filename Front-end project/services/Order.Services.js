export const OrderData = (userId) => {
  return [
    {
      id: "#125021",
      productDetails: "Neck Velvet Dress",
      date: "02-15-2021",
      status: "Shipped",
      price: "$205",
    },
    {
      id: "#521214",
      productDetails: "Belted Trench Coat",
      date: "03-06-2021",
      status: "Shipped",
      price: "$350",
    },
    {
      id: "#521021",
      productDetails: "Men Print Tee",
      date: "04-12-2021",
      status: "pending",
      price: "$150",
    },
    {
      id: "#245021",
      productDetails: "Woman Print Tee",
      date: "05-21-2021",
      status: "Shipped",
      price: "$150",
    },
    {
      id: "#122141",
      productDetails: "Men Print Tee",
      date: "05-28-2021",
      status: "canceled",
      price: "$150",
    },
    {
      id: "#125015",
      productDetails: "Men Print Tee",
      date: "02-14-2021",
      status: "pending",
      price: "$150",
    },
    {
      id: "#245021",
      productDetails: "women print tee",
      date: "02-02-2021",
      status: "Shipped",
      price: "$150",
    },
    {
      id: "#122141",
      productDetails: "men print tee",
      date: "08-15-2021",
      status: "canceled",
      price: "$150",
    },
    {
      id: "#125015",
      productDetails: "men print tee",
      date: "03-15-2021",
      status: "pending",
      price: "$150",
    },
  ];
}

export const ProductsbyOrder = (oderId) => {
  return [
    {
      id: 1,
      description: '',
      img: 'one',
      title: "Neck Velvet Dress	",
      category: "Women Clothes",
      price: "$205",
      stock: "1000",
      sales: "2000",
      cant: 3
    },
    {
      id: 1,
      description: '',
      img: 'nine',
      title: "Belted Trench Coat		",
      category: "Women Clothes",
      price: "$350",
      stock: "800",
      sales: "350",
      cant: 1
    },
    {
      id: 1,
      description: '',
      img: 'thirtyfour',
      title: "Men Print Tee",
      category: "Men Clothes",
      price: "$150",
      stock: "750",
      sales: "150",
      cant: 5
    },
    {
      id: 1,
      description: '',
      img: 'pro1',
      title: "Woman Print Tee",
      category: "Women Clothes",
      price: "$150",
      stock: "750",
      sales: "150",
      cant: 2
    },
    {
      id: 1,
      description: '',
      img: 'pro27',
      title: "Men Print Tee",
      category: "Men Clothes",
      price: "$150",
      stock: "750",
      sales: "150",
      cant: 1
    },
    {
      id: 1,
      description: '',
      img: 'pro36',
      title: "Men Print Tee",
      category: "Men Clothes",
      price: "$150",
      stock: "750",
      sales: "150",
      cant: 2
    },
  ];
}

export const DeleteOrder = (oderId) => {
//   let arr = OrderData.filter(function(item) {
//     return item.id !== oderId
// })
  return OrderData
}
