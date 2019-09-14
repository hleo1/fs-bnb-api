const mysqlConn = require('../database/database');

//initiating object with variable

module.exports = class Provider{
    constructor(user){
        this.id;
        this.firstname= user.firstname;
    }

    getProviders(){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('SELECT * FROM fs_bnb.providers', (err,res)  =>  {
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
            mysqlConn.query('SELECT * FROM fs_bnb.providers WHERE id = ?', ID, (err,res)  =>  {
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
            mysqlConn.query("INSERT INTO `fs_bnb`.`providers` set ?", provider, (err,res)=>  {
                if (err){
                    reject(err)
                }else{
                    mysqlConn.query('SELECT * FROM fs_bnb.providers', (err,res)  =>  {
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
            mysqlConn.query('SELECT * FROM fs_bnb.users', (err,res)  =>  {
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
            let string = "DELETE FROM `fs_bnb`.`users` WHERE (`id` = " +`'${user.id}');`
            mysqlConn.query(string, (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    mysqlConn.query('SELECT * FROM fs_bnb.users', (err,res)  =>  {
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