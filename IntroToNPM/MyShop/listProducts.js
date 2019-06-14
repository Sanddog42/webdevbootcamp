var faker = require('faker'),
    i = 0,
    stars = '**********************';

console.log(stars + '\n  WELCOME TO MY SHOP!\n' + stars);

while (i < 10) {
  console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
  i++;
}