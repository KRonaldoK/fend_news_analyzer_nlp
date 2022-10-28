const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const  bodyParser = require('body-parser')
const cors = require('cors')
const nodeFetch = require('node-fetch')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
  res.json(mockAPIResponse)
})

app.post('/meaningCloudSentimentAnalysis', async function(req, res) {
    const {MEANING_CLOUD_SENTIMENT_ANALYSIS_API_BASE_URL, API_KEY} = require('./constants.js')
    const userInput = req.body.url
    const apiURL = `${MEANING_CLOUD_SENTIMENT_ANALYSIS_API_BASE_URL}key=${API_KEY}&url=${userInput}&lang=en`
    try {
      const response = await nodeFetch(apiURL)
      const mcData = await response.json()
      res.send(mcData)
    } catch (e) {
      console.log(e)
    }
})

app.listen(8081, function () {
  console.log('Sentiment Analysis API app listening on port 8081!')
})
