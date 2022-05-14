const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let data = ["Mangue","Citron", "Orange", "Banane"];

app.get("/", (req, res) => {

    let list = "<a href='/add'>Text</a><br/><ul>"

    data.forEach(d => list +=`<li>${d}</li>`)

    list += "</ul>"

    res.send(list);

  });

  app.get("/add", (req, res) => {

    res.send(`
  
          <!DOCTYPE html>
  
              <html lang="en">
  
              <head>
  
                  <meta charset="UTF-8">
  
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
                  <title>Quizw3d5</title>
  
              </head>
  
              <body>
  
                  <form method="POST" action="/add">
  
                     <label>Name</label>
  
                     <input type="text" name="text" />
  
                     <input type="submit" id="submit" value="Submit Text">
  
                  </form>
  
              </body>
  
          </html>
  
      `);
  
  });
  
  
  
  app.post("/add", (req, res) => {
  
    const { text } = req.body;
  
    let copyData = [...data];
  
    copyData.push(text);
  
    data = copyData;
  
    res.redirect('/');
  
  });
  
  
  
  app.listen(3000);