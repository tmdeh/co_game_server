var express = require('express');
const save = require('../my_modules/score_save');
const get = require('../my_modules/score_get');
var router = express.Router();

router.post('/',  async(req, res, next) => {
  const{nickname, score} = req.body;
  try {
    await save(nickname, score);
    res.status(201).json({
      msg : "CREATED"
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg : "FAIL"
    })
  }
});

router.get('/', async(req, res, next) => {
  try {
    let data = await get();
    if(data.length == 0) {
      throw "데이터가 없습니다."
    } 
    res.status(200).json({
      msg : "OK",
      data: data
    })
  } catch (error) {
    console.log(error)
    res.status(200).json({
      msg : "데이터가 없습니다."
    })
  }
});

module.exports = router;
