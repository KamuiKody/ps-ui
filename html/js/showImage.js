$(function () {
    function display(bool) {
        if (bool) {
            $("#showImage").show();
        } else {
            $("#showImage").hide();
        }
    }
    
    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        display(false)
        if (item.type === "showImage") {
            if (item.status == true) {
                display(true)
                document.getElementById("imgcontainer").innerHTML = '<img class="contain" style="width:150px;height:150px;" src="'+item.image+'" alt="'+item.image+'"></img>';
                let element = document.getElementById("showImageClose");
                element.innerText = item.amount
                element.style.backgroundColor = item.color
                setTimeout(function() { display(false) }, item.duration);
            } else {
                display(false)
            }
        }
    })

    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post(`https://${GetParentResourceName()}/showItemImage-callback`, JSON.stringify({}));
            return
        }
    };

    $("#showImageClose").click(function () {
        $.post(`https://${GetParentResourceName()}/showItemImage-callback`, JSON.stringify({}));
        return
    })
})
