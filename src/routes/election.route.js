import { Router } from 'express'
import {
  getElectionById,
  createElection,
  getAllElection,
  updateElection,
  deleteElectionById
} from '../controllers/election/election.controller.js'

const router = Router()

router.get('/:id', getElectionById)
router.get('/', getAllElection)
router.post('/', createElection)
router.put('/:id', updateElection)
router.delete('/:id', deleteElectionById)

export { router as electionRoutes }
