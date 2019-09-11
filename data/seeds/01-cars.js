
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: "123456789qwerty",
          make: "Ford",
          model: "Mustang",
          mileage: "44000"
        },
        {
          vin: "123456789qwertyy",
          make: "Chevy",
          model: "Camero",
          mileage: "60000"
        }
      ]);
    });
};
