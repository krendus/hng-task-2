import {Request, Response} from 'express';
import Person from '../models/person';

export const createPerson = async (req: Request, res: Response) => {
  let {name} = req.body;
  name = typeof name === 'string' && name.trim().length > 0 ? name.trim() : '';
  if (name) {
    const date = new Date();
    const person = await Person.create({
      name,
      created_at: date,
      updated_at: date,
    });
    if (person) {
      res.status(201).json({
        message: 'person created successfully',
        data: {
          id: person._id,
          name: person.name,
          created_at: person.created_at,
          updated_at: person.updated_at,
        },
      });
      return;
    } else {
      res.status(500).json({
        message: 'server error',
        status: 'error',
      });
      return;
    }
  } else {
    res.status(422).json({
      message: 'Please enter a valid name',
      status: 'error',
    });
  }
};

export const getSinglePerson = async (req: Request, res: Response) => {
  const {id} = req.params;
  if (id) {
    const person = await Person.findById(id);
    if (person) {
      res.status(200).json({
        message: 'Person found successfully',
        data: {
          id: person._id,
          name: person.name,
          created_at: person.created_at,
          updated_at: person.updated_at,
        },
      });
    } else {
      res.status(404).json({
        message: 'Person not found',
        status: 'error',
      });
    }
  } else {
    res.status(422).json({
      message: 'Please enter a valid id',
      status: 'error',
    });
  }
};
export const updateSinglePerson = async (req: Request, res: Response) => {
  const {id} = req.params;
  let {name} = req.body;
  name = typeof name === 'string' && name.trim().length > 0 ? name.trim() : '';
  if (id) {
    const person = await Person.findById(id);
    if (person) {
      const date = new Date();
      person.name = name;
      person.updated_at = date;
      await person.save();
      res.status(200).json({
        message: 'Person updated successfuly',
        data: {
          id: person._id,
          name: person.name,
          created_at: person.created_at,
          updated_at: person.updated_at,
        },
      });
    } else {
      res.status(404).json({
        message: 'Person not found',
        status: 'error',
      });
    }
  } else {
    res.status(422).json({
      message: 'Please enter a valid id',
      status: 'error',
    });
  }
};
export const deleteSinglePerson = async (req: Request, res: Response) => {
  const {id} = req.params;
  if (id) {
    const person = await Person.findById(id);
    if (person) {
      await person.deleteOne();
      res.json({
        message: 'person deleted successfully',
        data: null,
      });
    } else {
      res.status(404).json({
        message: 'Person not found',
        status: 'error',
      });
    }
  } else {
    res.status(422).json({
      message: 'Please enter a valid id',
      status: 'error',
    });
  }
};
