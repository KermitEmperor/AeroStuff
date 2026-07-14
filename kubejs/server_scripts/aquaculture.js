let tools = ['aquaculturedelight:neptunium_knife', 'aquaculture:neptunium_fishing_rod', 'aquaculture:neptunium_pickaxe', 'aquaculture:neptunium_shovel', 'aquaculture:neptunium_axe', 'aquaculture:neptunium_hoe', 'aquaculture:neptunium_sword', 'aquaculture:neptunium_bow', 'aquaculture:neptunium_fillet_knife']
let armor = ['aquaculture:neptunium_helmet', 'aquaculture:neptunium_chestplate', 'aquaculture:neptunium_leggings', 'aquaculture:neptunium_boots']
let misc  = ['aquaculture:neptunium_ingot', 'aquaculture:neptunium_nugget', 'aquaculture:neptunium_block', 'aquaculture:neptunes_bounty']

ServerEvents.recipes(event => {    
    tools.forEach(tool => {
        event.remove({output: tool})
    })

    armor.forEach(piece => {
        event.remove({output: piece})
    })

    misc.forEach(item => {
        event.remove({output: item})
    })
})

RecipeViewerEvents.removeEntries('item', event => {    
    tools.forEach(tool => {
        event.remove(tool)
    })

    armor.forEach(piece => {
        event.remove(piece)
    })

    misc.forEach(item => {
        event.remove(item)
    })
})