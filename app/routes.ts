import { Router } from 'express';


const router = Router()

router.get('/', (req, res) => {
    return res.json({ message: 'API Home!' })
})

router.get('/programs', (req, res) => {
    return res.json({ message: 'Programs' })
})

router.get('/episodes', (req, res) => {
    return res.json({ message: 'Episodes' })
})


export {router as publicApiRoutes};