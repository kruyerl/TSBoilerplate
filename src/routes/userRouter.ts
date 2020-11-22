const router = require('express').Router()

// test

router.get('/test', async (req: any, res: any) =>
  res.status(200).json({ msg: 'working.' })
)

module.exports = router
