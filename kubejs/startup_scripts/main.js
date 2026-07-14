// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
    event.create('funny_pill')
        .maxStackSize(16)
        .food(food => {
            food
                .alwaysEdible()
                .effect('minecraft:instant_damage', 20, 252, 1)
                .effect('minecraft:nausea', 20, 1, 1)
                .fastToEat()                
        })
        .rarity('irons_spellbooks:cinderous')
        .useAnimation('drink')
        .tooltip('§8§oDespite being stackable, its one time use!§r')
})
