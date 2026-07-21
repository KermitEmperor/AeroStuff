ServerEvents.recipes(event => {

    function changeArmor(armor) {
        armor.forEach(piece => {
            //event.replaceInput({id: piece}, )
            let splitname = piece.split('_')
            let type = splitname[splitname.length - 1]
            event.replaceInput(
                {id: piece}, 
                'minecraft:netherite_'+type,
                'create:cardboard_'+type
            )
        })
    }

    changeArmor(['fantasy_armor:eclipse_soldier_helmet', 'fantasy_armor:eclipse_soldier_chestplate', 'fantasy_armor:eclipse_soldier_leggings', 'fantasy_armor:eclipse_soldier_boots'])
    changeArmor(['fantasy_armor:dragonslayer_helmet', 'fantasy_armor:dragonslayer_chestplate', 'fantasy_armor:dragonslayer_leggings', 'fantasy_armor:dragonslayer_boots'])
    changeArmor(['fantasy_armor:golden_horns_helmet', 'fantasy_armor:golden_horns_chestplate', 'fantasy_armor:golden_horns_leggings', 'fantasy_armor:golden_horns_boots'])
    changeArmor(['fantasy_armor:hero_helmet', 'fantasy_armor:hero_chestplate', 'fantasy_armor:hero_leggings', 'fantasy_armor:hero_boots'])
    changeArmor(['fantasy_armor:thief_helmet', 'fantasy_armor:thief_chestplate', 'fantasy_armor:thief_leggings', 'fantasy_armor:thief_boots'])
    changeArmor(['fantasy_armor:wandering_wizard_helmet', 'fantasy_armor:wandering_wizard_chestplate', 'fantasy_armor:wandering_wizard_leggings', 'fantasy_armor:wandering_wizard_boots'])
    changeArmor(['fantasy_armor:chess_board_knight_helmet', 'fantasy_armor:chess_board_knight_chestplate', 'fantasy_armor:chess_board_knight_leggings', 'fantasy_armor:chess_board_knight_boots'])
    changeArmor(['fantasy_armor:dark_lord_helmet', 'fantasy_armor:dark_lord_chestplate', 'fantasy_armor:dark_lord_leggings', 'fantasy_armor:dark_lord_boots'])
    changeArmor(['fantasy_armor:redeemer_helmet', 'fantasy_armor:redeemer_chestplate', 'fantasy_armor:redeemer_leggings', 'fantasy_armor:redeemer_boots'])
    changeArmor(['fantasy_armor:sunset_wings_helmet', 'fantasy_armor:sunset_wings_chestplate', 'fantasy_armor:sunset_wings_leggings', 'fantasy_armor:sunset_wings_boots'])
    changeArmor(['fantasy_armor:fog_guard_helmet', 'fantasy_armor:fog_guard_chestplate', 'fantasy_armor:fog_guard_leggings', 'fantasy_armor:fog_guard_boots'])
    changeArmor(['fantasy_armor:dark_cover_helmet', 'fantasy_armor:dark_cover_chestplate', 'fantasy_armor:dark_cover_leggings', 'fantasy_armor:dark_cover_boots'])
    changeArmor(['fantasy_armor:spark_of_dawn_helmet', 'fantasy_armor:spark_of_dawn_chestplate', 'fantasy_armor:spark_of_dawn_leggings', 'fantasy_armor:spark_of_dawn_boots'])
    changeArmor(['fantasy_armor:golden_execution_helmet', 'fantasy_armor:golden_execution_chestplate', 'fantasy_armor:golden_execution_leggings', 'fantasy_armor:golden_execution_boots'])
    changeArmor(['fantasy_armor:forgotten_trace_helmet', 'fantasy_armor:forgotten_trace_chestplate', 'fantasy_armor:forgotten_trace_leggings', 'fantasy_armor:forgotten_trace_boots'])
    changeArmor(['fantasy_armor:malenia_helmet', 'fantasy_armor:malenia_chestplate', 'fantasy_armor:malenia_leggings', 'fantasy_armor:malenia_boots'])
    changeArmor(['fantasy_armor:twinned_helmet', 'fantasy_armor:twinned_chestplate', 'fantasy_armor:twinned_leggings', 'fantasy_armor:twinned_boots'])
    changeArmor(['fantasy_armor:gilded_hunt_helmet', 'fantasy_armor:gilded_hunt_chestplate', 'fantasy_armor:gilded_hunt_leggings', 'fantasy_armor:gilded_hunt_boots'])
    changeArmor(['fantasy_armor:lady_maria_helmet', 'fantasy_armor:lady_maria_chestplate', 'fantasy_armor:lady_maria_leggings', 'fantasy_armor:lady_maria_boots'])
    changeArmor(['fantasy_armor:crucible_knight_helmet', 'fantasy_armor:crucible_knight_chestplate', 'fantasy_armor:crucible_knight_leggings', 'fantasy_armor:crucible_knight_boots'])
    changeArmor(['fantasy_armor:evening_ghost_helmet', 'fantasy_armor:evening_ghost_chestplate', 'fantasy_armor:evening_ghost_leggings', 'fantasy_armor:evening_ghost_boots'])
    changeArmor(['fantasy_armor:ronin_helmet', 'fantasy_armor:ronin_chestplate', 'fantasy_armor:ronin_leggings', 'fantasy_armor:ronin_boots'])
    changeArmor(['fantasy_armor:ornstein_helmet', 'fantasy_armor:ornstein_chestplate', 'fantasy_armor:ornstein_leggings', 'fantasy_armor:ornstein_boots'])
    changeArmor(['fantasy_armor:old_knight_helmet', 'fantasy_armor:old_knight_chestplate', 'fantasy_armor:old_knight_leggings', 'fantasy_armor:old_knight_boots'])
    changeArmor(['fantasy_armor:silver_knight_helmet', 'fantasy_armor:silver_knight_chestplate', 'fantasy_armor:silver_knight_leggings', 'fantasy_armor:silver_knight_boots'])
    changeArmor(['fantasy_armor:dead_gladiator_helmet', 'fantasy_armor:dead_gladiator_chestplate', 'fantasy_armor:dead_gladiator_leggings', 'fantasy_armor:dead_gladiator_boots'])
    changeArmor(['fantasy_armor:flesh_of_the_feaster_helmet', 'fantasy_armor:flesh_of_the_feaster_chestplate', 'fantasy_armor:flesh_of_the_feaster_leggings', 'fantasy_armor:flesh_of_the_feaster_boots'])
    changeArmor(['fantasy_armor:wind_worshipper_helmet', 'fantasy_armor:wind_worshipper_chestplate', 'fantasy_armor:wind_worshipper_leggings', 'fantasy_armor:wind_worshipper_boots'])
    changeArmor(['fantasy_armor:grave_sentinel_helmet', 'fantasy_armor:grave_sentinel_chestplate', 'fantasy_armor:grave_sentinel_leggings', 'fantasy_armor:grave_sentinel_boots'])



    event.remove({output: 'fantasy_armor:moon_crystal'})
    event.shaped('fantasy_armor:moon_crystal', [
        ' A ',
        'CAC',
        ' A '
    ], {
        A: 'minecraft:amethyst_shard',
        C: '#c:plates/copper'
    })
    
    event.custom({
        "type": "createaddition:charging",
        "energy": 8000,
        "ingredients": [
            {
                "item": 'minecraft:amethyst_shard'
            }
        ],
        "max_charge_rate": 360,
        "results": [
            {
                "id": 'fantasy_armor:moon_crystal'
            }
        ]
    })
    .id('kubejs:createaddition/charging/moon_crystal')
})