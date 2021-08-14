import { _delete, _post } from "./api.services";
import { UserAuthenticated } from "./User.Services";

export const OrderData = (userId) => {
  return [
    
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
  const user=UserAuthenticated();
  return _delete(`buyer/${user}/order/${oderId}`)
  .then(response => {
      return response;
  });
}

export const CreateOrder=(order)=>{
  const user=UserAuthenticated();
  return _post(`buyer/${user}/order`,order)
  .then(response => {
      return response;
  })
}
