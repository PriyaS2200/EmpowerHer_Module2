let product = [];

const addProduct = (obj) => {
    product.push(obj);
    return product
}

const addMultipleproducts = (...products) => product = [...product, ...products];
addMultipleproducts({ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 });
// console.log(product)
const processProducts = product.map(ele => ele.name);
console.log(processProducts)
product.forEach(ele => ele.price > 50 ? console.log(`${ele.name} is above $50`) : console.log(`${ele.name} is below $50`));
