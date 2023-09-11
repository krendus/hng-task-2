import {Router} from 'express';
import {
  createPerson,
  deleteSinglePerson,
  getSinglePerson,
  updateSinglePerson,
} from '../controllers/person';

const personRouter = Router();

// To get a single user
personRouter.get('/:id', getSinglePerson);

// To create a user
personRouter.post('/', createPerson);

// To update a user
personRouter.patch('/:id', updateSinglePerson);

// To delete a user
personRouter.delete('/:id', deleteSinglePerson);

export default personRouter;
