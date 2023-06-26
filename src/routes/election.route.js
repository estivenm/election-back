import { Router } from 'express'
import {
  getElectionById,
  createElection,
  getAllElection,
  updateElection
} from '../controllers/election/election.controller.js'

const router = Router()

router.get('/:id', getElectionById)
router.get('/', getAllElection)
router.post('/', createElection)
router.put('/:id', updateElection)

export { router as electionRoutes }
