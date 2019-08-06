const mysqlConn = require('../database/database');
var Booking = require('./bookings-model')
//initiating object with variable

module.exports = class Listing{

    constructor(details){
        this.id, 
        this.name = details.name,
        this.location = details.location,
        this.image_url = details.image_url,
        this.price = details.price,
        this.provider_id = details.provider_id,
        this.description = details.description
    }

    getListings(){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('SELECT * FROM fs_bnb.listings', (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        });
    }
getListingsByID(id){
    return new Promise ((resolve, reject) => {
        mysqlConn.query('SELECT * FROM fs_bnb.listings WHERE id = ?', id, (err,res)  =>  {
            if (err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    });
}    

getListingsbyProviderID(id){
    return new Promise ((resolve, reject) => {
        mysqlConn.query('SELECT * FROM fs_bnb.listings WHERE provider_id = ?', id, (err,res)  =>  {
            if (err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    });
}    

getListingsID(id){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('SELECT * FROM fs_bnb.listings WHERE id = ?', id, (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        });
    }

    createListing(newListingDetails){
        return new Promise ((resolve, reject) => {
            mysqlConn.query("INSERT INTO `fs_bnb`.`listings` set ?", newListingDetails, (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve("New Listing Created!")
                }
            })
        });
    }

    updateListing(newDetails, ListingID){
        return new Promise ((resolve, reject) => {
            mysqlConn.query("UPDATE listings set ? WHERE id = ?",
            [newDetails, ListingID], (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve("New Listing Updated!")
                }
            })
        });
    }
//delete Listing by ID
    deleteListing(id){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('DELETE FROM fs_bnb.listings WHERE id = ?', id, (err,res)  =>  {
                if (err){
                    reject(err)
                }else {
                    const mess = 'listing of deleted of id: ' + id
                    resolve(mess);
                }
            })
        });
    }
    createBooking(details, listingID){
        const array = new Booking (details, listingID)
        return new Promise ((resolve, reject) => {
            mysqlConn.query("INSERT INTO `fs_bnb`.`bookings` set ?", array, (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    Booking.prototype.getMaxID()
                    .then(newBooking => {
                        resolve(newBooking);
                    }).catch(err => {
                        reject(err);
                    })
                }
            })
        });
    }
    //input: specific id
    //getListings & read them into an array
    // loop through each of the id, and find the one
    //resolve it back 
    //output: complete information of that ID.
  
    
}