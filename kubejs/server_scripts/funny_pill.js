ServerEvents.recipes(event => {
    event.recipes.create.mixing('kubejs:funny_pill', [
        'minecraft:spider_eye', 
        'minecraft:fermented_spider_eye', 
        Fluid.of('createdieselgenerators:plant_oil', 250), 
        'minecraft:poisonous_potato', 
        'minecraft:ink_sac', 
        'minecraft:paper'
    ]).heated()
})