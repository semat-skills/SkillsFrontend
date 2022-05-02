import express from "express";
import { addContact } from "../controllers/contact";

const router = express.Router();

router.post("/", addContact);

export default router;
