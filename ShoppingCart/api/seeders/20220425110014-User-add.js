"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "vijay",
          email: "vijay@gmail.com",
          mobile: "6351989202",
          password: "vijay123",
        },
        {
          username: "rohit",
          email: "rohit@gmail.com",
          mobile: "8251989202",
          password: "rohit123",
        },
        {
          username: "kapil",
          email: "kapil@gmail.com",
          mobile: "1234567892",
          password: "kapil123",
        },
        {
          username: "raj",
          email: "raj@gmail.com",
          mobile: "6356409202",
          password: "raj123",
        },
        {
          username: "vishal",
          email: "vishal@gmail.com",
          mobile: "7891989202",
          password: "vishal123",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
