const connection = require("../config/connection.js");

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
        
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(table, updateColName, updateRowValue, searchColName, searchRowVal, cb) {
        let queryString = "UPDATE " + table;

        connection.query(queryString, [table, updateColName, updateRowValue, searchColName, searchRowVal], function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;