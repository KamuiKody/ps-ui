local backgroundColors = {
    add = '#3498db',
    remove = '#3C3C3C'
}

local function SetDisplay(bool, img, duration, amount, _type)
    --SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "showImage",
        image = img,
        status = bool,
        duration = duration or 5000,
        amount = amount or 1,
        color = backgroundColors[_type] or backgroundColors.add
    })
end

local function ShowImage(img, duration, amount, _type)
    SetDisplay(true, img, duration, amount, _type)
end

RegisterNUICallback("showItemImage-callback", function(data, cb)
    SetDisplay(false)
    cb('ok')
end)

exports("ShowImage", ShowImage)