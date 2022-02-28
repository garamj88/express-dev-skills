import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET skills page. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)

/* POST new skill */
router.post('/', skillsCtrl.create)

/* DELETE existing skill */
router.delete('/:id', skillsCtrl.delete)


export { 
  router
}
