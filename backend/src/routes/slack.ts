import express from "express";
import bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";
import { slack } from "../controllers/slack";


const router = express.Router();

router.use(bodyParser.json());
router.post("/", slack);

router.use('/',(req: Request, res: Response, next: NextFunction) => {
   console.log('here');
   
    res.send(req.body)
 })

export default router;
