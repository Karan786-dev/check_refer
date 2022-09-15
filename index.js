var express = require("express");

var app = express()

app.listen(3000)

const path = require('path')

const axios = require('axios')

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

const router = express.Router()

const app_name = 'check-refer'

var link = 'Your Api Url From Panel'

app.use('/' + app_name,router)

router.get('/',(req,res)=>{

  res.render('home')

})

router.get('/final',async (req,res)=>{

  let result = await axios.get(link)

  result = result.data

  const {

    number

  } = req.query

  if(result == 'Invalid Token'){

    res.send("<script>alert('Wrong Url'); window.location.href = './'</script>")

    return

  }

  res.render('final',{data:result,number:number})

})

