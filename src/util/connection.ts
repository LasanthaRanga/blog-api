const mysql = require('mysql2');
export class MysqlConn {
    public static getConnection() {
        return mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'my_nestjs_project'
        });
    }
}

