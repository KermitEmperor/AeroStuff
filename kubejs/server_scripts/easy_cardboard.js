ServerEvents.recipes(event => {
    const { createdieselgenerators } = event.recipes

    createdieselgenerators.hammering('create:cardboard', 'create:pulp')
     
    event.shaped(Item.of('create:pulp', 2), [
        'PPP',
        'PWP',
        'PPP'
    ], {
        P: '#create:pulpifiable',
        W: 'minecraft:water_bucket'
    })
})