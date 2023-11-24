const express = require("express");
const Controller = require("../controllers/controller");
const authentication = require("../middleware/auth");
const router = express.Router();

router.post("/register", Controller.register);
router.post("/login", Controller.login);

router.use(authentication);
router.get("/jobs", Controller.readAllJob);
router.get("/companies", Controller.readAllCompany);
router.post("/jobs", Controller.addJob);
router.post("/companies", Controller.addCompany);
router.get("/jobs/:id", Controller.detailJob);
router.put("/jobs/:id", Controller.updateJob);
router.delete("/jobs/:id", Controller.deleteJob);
router.delete("/companies/:id", Controller.deleteCompany);

module.exports = router;
