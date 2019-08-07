const mysqlConn = require('../database/database');

//initiating object with variable

module.exports = class Provider{
    constructor(user){
        this.id;
        this.firstname= user.firstname;
    }

    getProviders(){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('SELECT * FROM heroku_375ce2b690d04ff.providers', (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        });
    }
    getProviderbyID(ID){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('SELECT * FROM heroku_375ce2b690d04ff.providers WHERE id = ?', ID, (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        });
    }
    
    createProvider(provider){
        return new Promise ((resolve, reject) => {
            mysqlConn.query("INSERT INTO `heroku_375ce2b690d04ff`.`providers` set ?", provider, (err,res)=>  {
                if (err){
                    reject(err)
                }else{
                    mysqlConn.query('SELECT * FROM heroku_375ce2b690d04ff.providers', (err,res)  =>  {
                        if (err){
                            reject(err);
                        }else{
                            resolve(res);
                        }
                    });
                }
            })
        });
    }
    //update user by ID
    updateUser(user){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('SELECT * FROM heroku_375ce2b690d04ff.users', (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        });
    }
    //delete user by ID
    deleteUser(user){
        const id = user.id;
        console.log(id);
        return new Promise ((resolve, reject) => {
            let string = "DELETE FROM `heroku_375ce2b690d04ff`.`users` WHERE (`id` = " +`'${user.id}');`
            mysqlConn.query(string, (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    mysqlConn.query('SELECT * FROM heroku_375ce2b690d04ff.users', (err,res)  =>  {
                        if (err){
                            reject(err)
                        }else{
                            resolve(res)
                        }
                    })
                }
            })
        });
    }
}