import furniture from '../images/departements/furniture.png'
import groceries from '../images/departements/groceries.png'
import office_supplies from '../images/departements/office_supplies.png'
import clothing from '../images/departements/clothings.png'
import electronics from '../images/departements/electronics.png'
import appliances from '../images/departements/appliances.png'

export const deptImages = {
  Furniture: furniture,
  Grocery: groceries,
  OfficeSupplies: office_supplies,
  Clothing: clothing,
  Electronics: electronics,
  Appliances: appliances
};

export const all_departments = [
  {'url':'furniture', title:'Furniture'},
  {'url':'groceries', title:'Grocery'},
  {'url':'office_supplies', title:'Office Supplies'},
  {'url':'clothing', title:'Clothing'},
  {'url':'electronics', title:'Electronics'},
  {'url':'appliances', title:'Appliances'}
]

export const departments = [
  {
    Id: 'furniture',
    imageId: 'Furniture',
    title: 'Furniture',
    description: 'Bookcases, Chairs, and Tables',
    categories: ["Bookcases", "Chairs", "Tables"]
  },
  {
    Id: 'grocery',
    imageId: 'Grocery',
    title: 'Grocery',
    description: 'Dairy, Beans, Pasta, Paper products, and cleaning supplies.',
    categories: ['Dairy', 'Beans', 'Pasta', 'Paper products', 'cleaning supplies']
  },
  {
    Id: 'office_supplies',
    imageId: 'OfficeSupplies',
    title: 'Office Supplies',
    description: 'Desk Supplies, Filing Supplies, Paper & Pads, Binding Supplies, and Stationery/mailing supplies',
    categories: ['Desk Supplies', 'Filing Supplies', 'Paper & Pads', 'Binding Supplies', 'Stationery/mailing supplies']
  },
  {
    Id: 'clothing',
    imageId: 'Clothing',
    title: 'Clothing',
    description: 'Shoes, Socks, Dresses, Jackets, Shorts and Shirts',
    categories: ['Shoes', 'Socks', 'Dresses', 'Jackets', 'Shorts','Shirts']
  },
  {
    Id: 'electronics',
    imageId: 'Electronics',
    title: 'Electronics',
    description: 'Computers, TV, Phones, and Sound System',
    categories: ['Computers', 'TV', 'Phones', 'Sound System']
  },
  {
    Id: 'appliances',
    imageId: 'Appliances',
    title: 'Appliances',
    description: 'Refrigerators, Dishwashers, Microwaves, Washers, Dryers',
    categories: ['Refrigerators', 'Dishwashers', 'Microwaves', 'Washers', 'Dryers']
  },
];

export const categories = [
  {
    dept_id: 'furniture',
    Id: 'Bookcases',
    imageId: 'bookcases',
    title: 'Bookcases',
    description: 'Book cases are used to keep the books',
    product_ids: []
  },
  {
    dept_id: 'furniture',
    Id: 'Chairs',
    imageId: 'chairs',
    title: 'Chairs',
    description: 'Chairs are good',
    product_ids: []
  },
  {
    dept_id: 'furniture',
    Id: 'Tables',
    imageId: 'tables',
    title: 'Tables',
    description: 'Tables are used to study or office purposses',
    product_ids: []
  },
];
