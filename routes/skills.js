import { Router } from 'express'
const router = Router()

/* GET skills page. */
router.get('/', function(req, res) {
  res.send('respond') 
})

export { 
  router
}
