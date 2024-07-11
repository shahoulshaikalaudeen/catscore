"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catController_1 = require("../controllers/catController");
const router = (0, express_1.Router)();
router.get('/', catController_1.getAllCats);
router.post('/vote', catController_1.voteCat);
exports.default = router;
