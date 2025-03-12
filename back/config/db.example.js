// Database configuration template
// Copy this file to db.js and update with your actual credentials

export default {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
    port: 3306,
    // Additional options
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
