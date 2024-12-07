const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
let bag = "";
for(let i=0;i<people.length;i++){
  let bag = "";
  let bag1 = "";
  let bag2 = "";
  let bag3 = "";
    let [{name}] = people;
    bag1 = bag1 + people[i].name + " ";
   // console.log(bag1)
  let [{address: {city}}] = people;
  bag2 = bag2 + people[i].address.city + " ";
 // console.log(bag2)
  bag3 = bag3 + people[i].address.street.name + " ";
  // console.log(bag3)
  bag = bag + bag1 + "lives in " + bag2 + "on " + bag3;
  console.log(bag)
}

