import { Router } from "express";
import { createPerson, deleteSinglePerson, getSinglePerson, updateSinglePerson } from "../controllers/person";

const personRouter = Router();

// To get a single user
personRouter.get("/", getSinglePerson)

// To create a user
personRouter.post("/", createPerson)

// To update a user
personRouter.patch("/", updateSinglePerson)

// To delete a user
personRouter.delete("/", deleteSinglePerson)

export default personRouter;
