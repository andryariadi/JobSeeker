"use strict";
const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
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
    let user = require("../db/user.json");
    let company = require("../db/company.json");
    let job = require("../db/job.json");
    let skill = require("../db/skill.json");

    user.forEach((e) => {
      delete e.id;
      e.createdAt = e.updatedAt = new Date();
      e.password = bcrypt.hashSync(e.password, bcrypt.genSaltSync(10));
    });
    company.forEach((e) => {
      delete e.id;
      e.createdAt = e.updatedAt = new Date();
    });
    job.forEach((e) => {
      delete e.id;
      e.createdAt = e.updatedAt = new Date();
    });
    skill.forEach((e) => {
      delete e.id;
      e.createdAt = e.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Users", user, {});
    await queryInterface.bulkInsert("Companies", company, {});
    await queryInterface.bulkInsert("Jobs", job, {});
    await queryInterface.bulkInsert("Skills", skill, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Skills", null, {});
    await queryInterface.bulkDelete("Jobs", null, {});
    await queryInterface.bulkDelete("Companies", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
