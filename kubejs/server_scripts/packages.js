let iron_weapons = ['simplyswords:iron_longsword', 'simplyswords:iron_twinblade', 'simplyswords:iron_rapier', 'simplyswords:iron_katana', 'simplyswords:iron_sai', 'simplyswords:iron_spear', 'simplyswords:iron_glaive', 'simplyswords:iron_warglaive', 'simplyswords:iron_cutlass', 'simplyswords:iron_scythe', 'simplyswords:iron_chakram', 'simplyswords:iron_claymore', 'simplyswords:iron_greathammer', 'simplyswords:iron_greataxe', 'minecraft:iron_sword', 'minecraft:iron_axe']
let category = ['iron', 'diamond', 'gold', 'netherite']

category.forEach(material => {
    ItemEvents.rightClicked('kubejs:' + material + '_weapon_package', event => {
        event.item.consume(1, event.entity)
        iron_weapons.forEach(item => {
            event.getPlayer().give(item.replace('iron', material))    
        })    
    })

    ServerEvents.recipes(event => {
        event.recipes.create.compacting('kubejs:' + material + '_weapon_package', iron_weapons.concat('create:cardboard'))
    })
})
