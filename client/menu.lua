local buttons = {}

local function CreateMenu(MenuData)
    buttons = MenuData
    SendNUIMessage({
        action = "menu-open",
        data = MenuData
    })
    SetNuiFocus(true, true)
end
exports("CreateMenu", CreateMenu)

RegisterNetEvent("ps-ui:CreateMenu", function(MenuData)
    CreateMenu(MenuData)
end)

local function CloseMenu()
    SetNuiFocus(false, false)
end
exports("CloseMenu", CloseMenu)

RegisterNetEvent("ps-ui:CloseMenu", function()
    CloseMenu()
end)

RegisterNUICallback('menuClose', function(data, cb)
    CloseMenu()
    cb('ok')
end)

RegisterNUICallback('MenuSelect', function(info, cb)
    local data = buttons[info.data]
    if not data then return end
    if not data.event then return end
    if data.server then TriggerServerEvent(data.event, table.unpack(data.args)) return end
    TriggerEvent(data.event, table.unpack(data.args))
    cb('ok')
end)
