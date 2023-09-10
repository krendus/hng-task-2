import { Request, Response } from "express";
import Person from "../models/person";

export const createPerson =async (req: Request, res: Response) => {
    let { name } = req.body;
    name = typeof(name) === 'string' && name.trim().length > 0 ? name.trim() : '';
    if (name) {
        const personFound = await Person.findOne({ name });
        if(personFound) {
            res.status(400).json({
                message: "User already exists",
                status: "error"
            })
            return
        }
        const date = new Date();
        const person = await Person.create({
            name,
            created_at: date,
            updated_at: date,
        })
        if (person) {
            res.status(201).json({
                message: "person created successfully",
                data: person
            })
            return;
        } else {
            res.status(500).json({
                message: "server error",
                status: "error"
            })
            return;
        }
    } else {
        res.status(422).json({
            message: "Please enter a valid name",
            status: "error"
        })
    }
}

export const getSinglePerson = async (req: Request, res: Response) => {
    let { name } = req.query;
    name = typeof(name) === 'string' && name.trim().length > 0 ? name.trim() : '';
    if(name) {
        const person = await Person.findOne({ name });
        if (person) {
            res.status(200).json({
                message: "Person found successfully",
                data: person,
            })
        } else {
            res.status(404).json({
                message: "Person not found",
                status: "error"
            })
        }
    } else {
        res.status(422).json({
            message: "Please enter a valid name",
            status: "error"
        })
    }
}
export const updateSinglePerson = async (req: Request, res: Response) => {
    let {name: queryName} = req.query
    let { name } = req.body;
    name = typeof(name) === 'string' && name.trim().length > 0 ? name.trim() : '';
    if (name) {
        const person = await Person.findOne({ name: queryName });
        if (person) {
            const date = new Date();
            person.name = name;
            person.updated_at = date;
            await person.save();
            res.status(200).json({
                message: "Person updated successfuly",
                data: person,
            })
        } else {
            res.status(404).json({
                message: "Person not found",
                status: "error"
            })
        }
    } else {
        res.status(422).json({
            message: "Please enter a valid name",
            status: "error"
        })
    }
}
export const deleteSinglePerson = async (req: Request, res: Response) => {
    let { name } = req.query;
    name = typeof(name) === 'string' && name.trim().length > 0 ? name.trim() : '';
    if(name) {
        const person = await Person.findOne({ name });
        if (person) {
            const deletedPerson = await Person.deleteOne({ name });
            res.json({
                message: "person deleted successfully",
                data: deletedPerson,
            })
        } else {
            res.status(404).json({
                message: "Person not found",
                status: "error"
            })
        }
    } else {
        res.status(422).json({
            message: "Please enter a valid name",
            status: "error"
        })
    }
}

