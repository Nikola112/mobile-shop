$(function()
{
    // this will always be 3 more days
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 3);

    $("#best-deal-countdown .text").countdown(expireDate, function(event) 
    {
        $(this).text(event.strftime('%I:%M:%S'));
    });
});