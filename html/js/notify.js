window.addEventListener('message', function (event) {
    switch(event.data.action) {
        default:
            Notify(event.data);
            break;  
    }
});

function Notify(data) {
    $('.notification').css('display', 'inline-block');
    var $notification = $('.notification.template').clone();
    $notification.removeClass('template');
    $notification.addClass(data.type);
    $notification.html(data.text);
    $notification.fadeIn();
    $('.notif-container').append($notification);
    setTimeout(function() {
        $.when($notification.fadeOut()).done(function() {
            $('.notification').css('display', 'none');
            $notification.remove()
        });
    }, data.length === undefined ? data.length : 2500);
}