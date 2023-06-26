import { Router } from 'express'

const router = Router()

router.get('/:id', (req, res) => {
  // return res.json({ message: `Test get id successful ${req.id}` })
})

router.get('/', (req, res) => {
  return res.json({ message: 'Test get successful' })
})

// router.post('/', createElection)
// router.put('/:id', updateElection)

export { router as testRoutes }
