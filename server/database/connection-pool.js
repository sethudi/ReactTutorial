
const db =require('../config/db');
const mysql =require('mysql');

const connectionPool ={
    pool:null,
    init: function(){
        this.pool =mysql.createPool(db);
    },
    getPool: function(){
        return this.pool;
    }
}

module.exports =connectionPool;