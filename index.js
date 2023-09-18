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
  
    if (!validarCorreo(correoUser) || contieneCaracteresNoDeseados(correoUser)) {
      return res.status(400).send('<h1>El correo no es válido o contiene caracteres no permitidos.</h1>');
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
  
  function validarCorreo(correo) {
    // Expresión regular para validar el formato de correo electrónico.
    const correoRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return correoRegExp.test(correo);
  }



app.listen(port, () => console.log(`Example app listening on port ${port}!`))