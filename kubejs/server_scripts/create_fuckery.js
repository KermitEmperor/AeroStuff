ServerEvents.recipes(event => {
    const { create } = event.recipes

    event.remove({id: 'create:splashing/gravel'})
    create.splashing(CreateItem.of('minecraft:flint', 0.25), 'minecraft:gravel')

    event.remove({id: 'create:splashing/soul_sand'})
    
    function moarCrushing(result, ore, additional ,remove) {
        if (remove === undefined) remove = true
        if (additional === undefined) additional = 0

        let id = Item.of(ore).getId().split(':')
        let deepslate_version = id[0] + ':deepslate_' + id[1]
        if (remove) {
            event.remove({input: ore, type: 'create:crushing'})
            event.remove({input: deepslate_version, type: 'create:crushing'})
        }
        create.crushing(
            [
                Item.of(result, 2 + additional),
                CreateItem.of('create:experience_nugget', 0.75),
                CreateItem.of('minecraft:cobblestone', 0.75)
            ], 
            ore
        )
        
        create.crushing(
            [
                Item.of(result, 3 + additional),
                CreateItem.of('create:experience_nugget', 0.75),
                CreateItem.of('minecraft:cobbled_deepslate', 0.75)
            ], 
            deepslate_version
        )
    }

    moarCrushing('minecraft:coal', 'minecraft:coal_ore')
    moarCrushing('create:crushed_raw_iron','minecraft:iron_ore')
    moarCrushing('create:crushed_raw_copper', 'minecraft:copper_ore', 5)
    moarCrushing('create:crushed_raw_gold', 'minecraft:gold_ore')
    moarCrushing('create:crushed_raw_zinc', 'create:zinc_ore')
    moarCrushing('create:crushed_raw_platinum', 'createpropulsion:platinum_ore')
    moarCrushing('minecraft:redstone', 'minecraft:redstone_ore', 5)
    moarCrushing('minecraft:emerald', 'minecraft:emerald_ore')
    moarCrushing('minecraft:lapis_lazuli','minecraft:lapis_ore', 11)
    moarCrushing('minecraft:diamond', 'minecraft:diamond_ore')
    moarCrushing('irons_spellbooks:mithril_scrap','irons_spellbooks:mithril_ore', 0, false)

    
})