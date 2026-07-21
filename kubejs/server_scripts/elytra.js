ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:elytra'), [
        'P P',
        'MNS',
        'PGP'
    ], {
        P: 'minecraft:phantom_membrane',        
        M: 'minecraft:magma_cream',
        N: 'minecraft:netherite_ingot',
        S: 'minecraft:slime_ball',
        G: 'minecraft:potion[potion_contents={potion:"minecraft:long_slow_falling"}]'
    })
})