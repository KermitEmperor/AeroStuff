StartupEvents.registry('item', event => {
    let category = ['iron', 'diamond', 'gold', 'netherite']
    category.forEach(item => {
        event.create(item + '_weapon_package')
            .use((level, player, hand) => true)
            .useAnimation('none')
            .texture('kubejs:item/crate_plain')
    })    
})