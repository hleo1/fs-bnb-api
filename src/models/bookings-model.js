const mysqlConn = require('../database/database');

module.exports = class Booking {
    constructor(booking, listingID){
        this.id;
        this.dateFrom = booking.dateFrom;
        this.dateTo = booking.dateTo;
        this.user_id = listingID;
        this.listings_id = listingID; //req.params.id
        this.guests = booking.guests;
        this.status = "NEW";
    }

    getBookings(){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('SELECT * FROM fs_bnb.bookings', (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        });
    }
    getBookingbyID(id){
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

    getMaxID(){
        return new Promise ((resolve, reject) => {
            mysqlConn.query('select * from fs_bnb.bookings ORDER BY id DESC LIMIT 1', id, (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        });
    }
    
}