
class time {

    setTime(tm = 0) {


        let date_ob = new Date(tm);

        // current date
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // current year
        let year = date_ob.getFullYear();

        // current hours
        let hours = date_ob.getHours();

        // current minutes
        let minutes = date_ob.getMinutes();


        // prints date & time in YYYY-MM-DD HH:MM:SS format
        return (year + "-" + month + "-" + date + " " + hours + ":" + minutes);
    }
}

module.exports= new time