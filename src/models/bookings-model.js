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
            mysqlConn.query('SELECT * FROM heroku_375ce2b690d04ff.bookings', (err,res)  =>  {
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
            mysqlConn.query('SELECT * FROM heroku_375ce2b690d04ff.listings WHERE id = ?', id, (err,res)  =>  {
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
            mysqlConn.query('select * from heroku_375ce2b690d04ff.bookings ORDER BY id DESC LIMIT 1', id, (err,res)  =>  {
                if (err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        });
    }
    
}