import express from "express";
import bodyParser from "body-parser";
//import { addContact } from "../controllers/contact";

const router = express.Router();

router.use(bodyParser.json());

router.post("/", addContact);

export default router;
