const pg = require('pg');

const dbconnect = async () => {
    const connect =  Client({
        connectionString: process.env.CONNECTION_URL,
    })}