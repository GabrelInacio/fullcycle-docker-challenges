const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const config = {
    host : 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) values('Gabriel')`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
    const sql = `SELECT name FROM people`;
    connection.query(sql, function(error, results, fields) {
        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <ul>
                ${results.map(result => `<li>${result.name}</li>`).join('')}
            </ul>
        `);
    });
})

app.listen(port, () => {
    console.log('Port: ${port}!')
});