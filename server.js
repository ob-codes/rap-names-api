const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
  '21 savage' : {    
    'birthName' : 'Sheyaa Bin Abraham',
    'birthLocation' : 'London, England',
    'age' : 27
  },
  'chance the rapper' : {
    'birthName' : 'Chancelor',
    'birthLocation' : 'Chicago, USA',
    'age' : 29
  },
  'unknown' : {
    'birthName' : 'unknown',
    'birthLocation' : 'unknown',
    'age' : 0
  }
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
  const desiredRapperName = req.params.name.toLowerCase();
  
  if (rappers[desiredRapperName]) {
    res.json(rappers[desiredRapperName]);
  }
  else 
    res.json(rappers['unknown']);  
});

app.listen(process.env.PORT || PORT, ()=> {
  console.log(`serving is running on port: ${PORT}`);
});