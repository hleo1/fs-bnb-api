const User = require('../models/user-model');
const Provider = require('../models/provider-model');

module.exports = class AuthService {
    constructor(){}
    login(authUser) {
        return new Promise((resolve, reject)=>{
            User.prototype
                .getUsers()
                .then(dbUsers => {
                    let dbUser = dbUsers.filter(dbUsers => {
                        return dbUsers.email == authUser.email;
                    });
                    if (dbUser.length){
                        if(dbUser[0].password != authUser.password){
                            reject("Incorrect password");
                        }
                        else {
                            resolve(dbUser[0]);
                        }
                    }else {
                        reject("User not found!")
                    }
            }).catch(err=> {
                reject(err);
            });
        });
    };
    provider_login(authUser) {
        return new Promise((resolve, reject)=>{
            Provider.prototype
                .getProviders()
                .then(dbProviders => {
                    let dbProvider = dbProviders.filter(dbProviders => {
                        return dbProviders.email == authUser.email;
                    });
                    if (dbProvider.length){
                        if(dbProvider[0].password != authUser.password){
                            reject("Incorrect password");
                        }
                        else {
                            resolve(dbProvider[0]);
                        }
                    }else {
                        reject("User not found!")
                    }
            }).catch(err=> {
                reject(err);
            });
        });
    };
};