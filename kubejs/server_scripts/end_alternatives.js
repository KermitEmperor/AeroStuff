ServerEvents.recipes(event => {
    const { create } = event.recipes

    event.shaped('minecraft:dragon_head', [
        ' X ',
        'XHX',
        ' X '
    ], {
        X: 'productivebees:draconic_dust',
        H: '#minecraft:skulls'
    })

    create.filling('minecraft:dragon_head', [
        Ingredient.of('#minecraft:skulls'),
        Fluid.of('irons_spellbooks:evasion_elixir', 250)        
    ])
})