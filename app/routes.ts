import { PrismaClient } from '@prisma/client'
import { Router } from 'express';

const prisma = new PrismaClient()
const router = Router()

router.get('/', (req, res) => {
    return res.json({ message: 'API Home!' })
})

router.post('/programs', async (req, res) => {
    try {
        const { name, url } = req.body
        const slug = name.toLowerCase().replace(/ /g, '-')

        const newProgram = await prisma.program.create({
            data: {
              name: name,
              slug: slug,
              url: url
            },
          })
          res.json(newProgram)

    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
})

router.get('/programs', (req, res) => {
    return res.json({ message: 'Programs' })
})

router.get('/episodes', (req, res) => {
    return res.json({ message: 'Episodes' })
})


export {router as publicApiRoutes};