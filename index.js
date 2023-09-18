const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const port = 3000

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => res.sendFile("index.html"))



app.post('/login', (req, res) => {
    const correoUser = req.body["correo"];
    const contraUser = req.body["pass"];
  
    if (contieneCaracteresNoDeseados(correoUser) ) {
      return res.status(400).send('<h1>El correo  contiene caracteres no permitidos.</h1>');
    }
  
    setTimeout(() => {
      res.render("index.ejs", { correo: correoUser, contra: contraUser });
    }, 2000);
  });
  
  function contieneCaracteresNoDeseados(correo) {
    const caracteresNoDeseados = ["'", ";", "--", "/*", "*/"];
    for (const caracter of caracteresNoDeseados) {
      if (correo.includes(caracter)) {
        return true;
      }
    }
    return false;
  }
  




app.listen(port, () => console.log(`Example app listening on port ${port}!`))