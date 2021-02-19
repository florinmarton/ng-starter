var faker = require('faker');

var database = { factories: []};

for (var i = 1; i<= 10; i++) {
  database.factories.push({
    id: i,
    factoryName: faker.commerce.department(),
    factoryOwner: faker.name.firstName() + ' ' + faker.name.lastName(),
    status: 'Draft',
  });
}

console.log(JSON.stringify(database));
