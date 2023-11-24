const { User, Job, Company, Skill } = require("../models");
const { createToken } = require("../helpers/jwt");
const bcrypt = require("bcryptjs");

class Controller {
  static async register(req, res) {
    try {
      let { username, email, password, role, phoneNumber, addres } = req.body;

      let user = await User.create({ username, email, password, role, phoneNumber, addres });
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      console.log(err);
      if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  static async login(req, res) {
    try {
      let { email, password } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }

      let user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: "Invalid email/password" });
      }

      let isPassword = bcrypt.compareSync(password, user.password);
      if (!isPassword) {
        return res.status(401).json({ message: "Invalid email/password" });
      }

      let access_token = createToken({ id: user.id });
      res.status(200).json({ access_token, role: user.role });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async readAllJob(req, res) {
    try {
      let jobs = await Job.findAll({
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          {
            model: Company,
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
        order: [["id", "ASC"]],
      });

      res.status(200).json(jobs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async detailJob(req, res, next) {
    try {
      let { id } = req.params;
      let job = await Job.findByPk(id, {
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          {
            model: Company,
          },
          {
            model: Skill,
          },
        ],
      });
      if (!job) {
        return res.status(404).json({ message: `Job with id ${id} not found` });
      }

      res.status(200).json(job);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async addJob(req, res) {
    try {
      const { title, description, companyId, jobType } = req.body;

      // Periksa apakah companyId ada dan memiliki properti "id"
      if (!companyId || !companyId.id) {
        return res.status(400).json({ message: "Invalid companyId" });
      }

      const job = await Job.create({ title, description, companyId: companyId.id, jobType, authorId: req.user.id });
      res.status(201).json({ message: `Job with ${job.id} has been added` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async updateJob(req, res) {
    try {
      let { id } = req.params;
      let { title, description, jobType, companyId } = req.body;
      await Job.update({ title, description, jobType, companyId }, { where: { id } });
      res.status(201).json({ message: `entity with id ${id} updated` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async deleteJob(req, res) {
    try {
      let { id } = req.params;
      let job = await Job.findByPk(id);
      if (!job) {
        res.status(404).json({ message: `Job with id ${id} not found` });
      }

      await Job.destroy({ where: { id } });
      res.status(200).json({ message: `${job.title} success to delete` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async readAllCompany(req, res) {
    try {
      let companies = await Company.findAll({
        include: Job,
        order: [["id", "ASC"]],
      });
      res.status(200).json(companies);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async addCompany(req, res) {
    try {
      let { name, companyLogo, location, email, description } = req.body;

      let company = await Company.create({ name, companyLogo, location, email, description });
      res.status(201).json({ message: `Company with ${company.id} has been added` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async deleteCompany(req, res) {
    try {
      let { id } = req.params;
      let company = await Company.findByPk(id);
      if (!company) {
        res.status(404).json({ message: `Company with id ${id} not found` });
      }

      await Company.destroy({ where: { id } });
      res.status(200).json({ message: `${company.name} success to delete` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = Controller;
