ServerEvents.recipes(event => {

    event.remove({output: 'sophisticatedbackpacks:gold_backpack'})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "key": {
          "B": {
            "item": "sophisticatedbackpacks:iron_backpack"
          },
          "C": {
            "tag": 'c:storage_blocks/gold'
          }
        },
        "pattern": [
          "CCC",
          "CBC",
          "CCC"
        ],
        "result": {
          "count": 1,
          "id": "sophisticatedbackpacks:gold_backpack"
        }
    })
    .id('kubejs:backpacks/gold')

    event.remove({output: 'sophisticatedbackpacks:diamond_backpack'})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "key": {
          "B": {
            "item": "sophisticatedbackpacks:gold_backpack"
          },
          "C": {
            "tag": 'c:storage_blocks/diamond'
          }
        },
        "pattern": [
          "CCC",
          "CBC",
          "CCC"
        ],
        "result": {
          "count": 1,
          "id": "sophisticatedbackpacks:diamond_backpack"
        }
    })
    .id('kubejs:backpacks/diamond')
})