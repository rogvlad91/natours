import express from 'express';
import {
  checkBody,
  checkId,
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} from '../controllers/tourControllers.js';
const router = express.Router();

router.param('id', checkId);

router.route('/').get(getAllTours).post(checkBody, createTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);
export default router;
