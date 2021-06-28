const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MySQL username
        user: 'root',
        //Your MySQL password
        password: 'ju878848!',
        database: 'election'
    },
    console.log('connected to the election database')
);

//GET test route
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

//query database to test connection
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//function that starts Express.js serer on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});