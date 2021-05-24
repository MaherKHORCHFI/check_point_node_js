
function timer (req, res, next) {
    var date = new Date();
    var requestDate = date.getDay();1
    var requestHour = date.getHours()-1;
    console.log(requestHour)  
    if ( [1,2,3,4,5].indexOf(requestDate)!==-1 && requestHour>=9 && requestHour<=16){
        // res.send('horaire exact')
        next()
    }else{
        res.send('Sorry We can not load the page')
    }
}

module.exports = timer ;