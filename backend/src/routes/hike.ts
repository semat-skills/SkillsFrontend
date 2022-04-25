import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import {
  addhike,
  updateHikeTitle,
  removeHike,
  getHikes,
} from "../controllers/hike";

const router = express.Router();

router.use(bodyParser.json());

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("respond with a resource");
});
router.get("/allhikes", getHikes);

router.post("/addhike", addhike);
router.put("/:hikeId/updateHikeTitle", updateHikeTitle);
router.delete("/:hikeId/removeHike", removeHike);

export default router;
