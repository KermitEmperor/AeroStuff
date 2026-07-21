ServerEvents.recipes(event => {
    event.remove({id: 'productivebees:bee_produce/alloys/steel_bee'})
    event.remove({id: 'productivebees:centrifuge/alloys/honeycomb_steel'})

    event.remove({id: 'productivebees:bee_produce/alloys/electrum_bee'})
    event.remove({id: 'productivebees:centrifuge/alloys/honeycomb_electrum'})

    event.remove({id: 'productivebees:bee_produce/alloys/bronze_bee'})
    event.remove({id: 'productivebees:centrifuge/alloys/honeycomb_bronze'})

    event.remove({id: 'productivebees:bee_produce/aquaculture/neptunium_bee'})
    event.remove({id: 'productivebees:centrifuge/aquaculture/honeycomb_neptunium'})

    event.remove({id: 'productivebees:bee_produce/chemlib/neptunium_bee'})
    event.remove({id: 'productivebees:centrifuge/chemlib/honeycomb_neptunium'})

    event.remove({id: 'productivebees:bee_produce/gems/diamond_bee'})
    event.remove({id: 'productivebees:centrifuge/gems/honeycomb_diamond'})

    event.remove({id: 'productivebees:bee_produce/gems/emerald_bee'})
    event.remove({id: 'productivebees:centrifuge/gems/honeycomb_emerald'})

    event.remove({id: 'productivebees:bee_produce/gems/rose_quartz_bee'})
    event.remove({id: 'productivebees:centrifuge/gems/honeycomb_rose_quartz'})

    event.remove({id: 'productivebees:bee_produce/raw_materials/netherite_bee'})
    event.remove({id: 'productivebees:centrifuge/raw_materials/honeycomb_netherite'})

    event.remove({id: 'productivebees:bee_produce/raw_materials/netherite_bee'})
    event.remove({id: 'productivebees:centrifuge/raw_materials/honeycomb_netherite'})

    event.remove({id: 'productivebees:bee_produce/alloys/brass_bee'})
    event.remove({id: 'productivebees:centrifuge/alloys/honeycomb_brass'})


    event.recipes.create.compacting(Fluid.of('createdieselgenerators:crude_oil', 1000), [
        '10000x #c:honey'
    ]).superheated()

    
    event.custom({
        "type": "productivebees:advanced_beehive",
        "ingredient": "productivebees:phantom",
        "results": [
            {
                "item": {
                    "type": "productivebees:component",
                    "components": {
                        "productivebees:bee_type": "productivebees:phantom"
                    },
                    "items": "productivebees:configurable_honeycomb"
                }
            },
            {
                "item": {
                    "tag": "c:pollens"
                },
                "chance": 0.1
            }
        ]
    })
    .id('kubejs:prodbees/prod/phantom')

    event.custom({
        "type": "productivebees:advanced_beehive",
        "ingredient": "productivebees:inky",
        "results": [
            {
                "item": {
                    "type": "productivebees:component",
                    "components": {
                        "productivebees:bee_type": "productivebees:inky"
                    },
                    "items": "productivebees:configurable_honeycomb"
                }
            },
            {
                "item": {
                    "tag": "c:pollens"
                },
                "chance": 0.1
            }
        ]
    })
    .id('kubejs:prodbees/prod/inky')

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "productivebees:component",
            "components": {
                "productivebees:bee_type": "productivebees:phantom"
            },
            "items": "productivebees:configurable_honeycomb"
        },
        "outputs": [
            {
                "item": {
                    "item": 'minecraft:phantom_membrane'
                },
                "chance": 0.5
            },
            {
                "item": {
                    "item": "productivebees:wax"
                }
            }
        ]
    })
    .id('kubejs:prodbees/centrifuge/phantom')

    event.custom({
        "type": "productivebees:centrifuge",
        "ingredient": {
            "type": "productivebees:component",
            "components": {
                "productivebees:bee_type": "productivebees:inky"
            },
            "items": "productivebees:configurable_honeycomb"
        },
        "outputs": [
            {
                "item": {
                    "item": 'minecraft:ink_sac'
                },
                "chance": 0.75
            },
            {
                "item": {
                    "item": "productivebees:wax"
                }
            }
        ]
    })
    .id('kubejs:prodbees/centrifuge/inky')
})

