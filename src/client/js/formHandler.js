function handleSubmit(event) {
  event.preventDefault()

  let informedUrl = document.getElementById('url').value

  if(Client.checkForURL(informedUrl)) {
    const NEWS_ANALYZER_API_BASE_URL = require('./constants.js')
    postData(NEWS_ANALYZER_API_BASE_URL, {url: informedUrl})
      .then(function(res) {
        handleAnalysisResponse(res);
      }).catch(function(reason) {console.log(reason)})
  } else {
    alert('This is an invalid URL, check it out, please.')
  }

  function handleAnalysisResponse({agreement, confidence, irony, score_tag, subjectivity}) {
    const polarityChecker = (score) => {
      let display
      switch (score){
        case 'P+':
          display = 'strong positive'
          break;
        case 'P':
          display = 'positive'
          break;
        case 'NEW':
          display = 'neutral'
          break;
        case 'N':
          display = 'negative'
          break;
        case 'N+':
          display = 'strong negative'
          break;
        case 'NONE':
          display = 'no sentiment'
      }
      return display.toUpperCase()
    }
    document.getElementById("polarity").innerHTML = 'Polarity: ' + polarityChecker(score_tag)
    document.getElementById("agreement").innerHTML = `Agreement: ${agreement}`
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${subjectivity}`
    document.getElementById("confidence").innerHTML = `Confidence: ${confidence}`
    document.getElementById("irony").innerHTML = `Irony: ${irony}`
  }
}

const postData = async (url = "", data = {}) => {
  console.log('Analyzing:', data)
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const newData = await response.json()
    console.log('Data received:', newData)
    return newData
  } catch (error) {
    console.log('error', error)
  }
}

export { handleSubmit }
