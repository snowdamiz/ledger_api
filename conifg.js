const fs = require('fs')
require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://zsqidrbz:SgluDTJZUVp41qHBFclj9XJmMRJ89wFA@kashin.db.elephantsql.com/zsqidrbz',
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        }
    },
    // production: {
    //     username: process.env.DB_USERNAME,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_NAME,
    //     host: '127.0.0.1',
    //     port: 5432,
    //     dialect: 'postgres',
    //     dialectOptions: {
    //         bigNumberStrings: true,
    //     }
    // }
}