ServerEvents.recipes(event => {
  const { create } = event.recipes  
      
  event.remove({id:"create:sequenced_assembly/precision_mechanism"})
  create.sequenced_assembly([ // Outputs:
      Item.of('create:precision_mechanism'), // Main output, will appear in JEI as the result
    ], // Input:
      'create:golden_sheet', 
    [ // Sequence:
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
      create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel',]),
      create.pressing('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism']),
      create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:iron_sheet',]),
      create.pressing('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism']),
      create.filling('create:incomplete_precision_mechanism', [Fluid.of('minecraft:water', 250), "create:incomplete_precision_mechanism"])
    ]
  ).transitionalItem('create:incomplete_precision_mechanism')

  event.remove({id:"createbigcannons:cutting/spring_wire_iron"})
  event.remove({id:"createbigcannons:cutting/spring_wire_steel"})
  create.cutting('createbigcannons:spring_wire', 'simulated:spring')
})

ServerEvents.recipes(event => {
  

  event.remove({id:"minecraft:iron_helmet"})
  event.shaped(Item.of('minecraft:iron_helmet'),
    [
      'ABA',
      'C C', 
      '   '
    ],
    {
      A: '#c:wires/iron',
      B: 'minecraft:iron_ingot',  
      C: 'create:iron_sheet'
    }
  )

  event.remove({id:"minecraft:iron_chestplate"})
  event.shaped(Item.of('minecraft:iron_chestplate'),
    [
      'C C',
      'ADA', 
      'BBB'
    ],
    {
      A: '#c:wires/iron',
      B: 'minecraft:iron_ingot',  
      C: 'create:iron_sheet',
      D: 'minecraft:iron_block'
    }
  )

  event.remove({id:"minecraft:iron_leggings"})
  event.shaped(Item.of('minecraft:iron_leggings'),
    [
      'ABA',
      'C C', 
      'C C'
    ],
    {
      A: '#c:wires/iron',
      B: 'minecraft:iron_ingot',  
      C: 'create:iron_sheet'
    }
  )

  event.remove({id:"minecraft:iron_boots"})
  event.shaped(Item.of('minecraft:iron_boots'),
    [
      'C C',
      'B B', 
      '   '
    ],
    {
      B: 'minecraft:iron_ingot',  
      C: 'create:iron_sheet'
    }
  )

  event.remove({id: 'minecraft:diamond_helmet'})
  event.shaped(Item.of('minecraft:diamond_helmet'),
    [
      'CCC',
      'CBC', 
      '   '
    ],
    {
      B: 'minecraft:iron_helmet',  
      C: 'minecraft:diamond'
    }
  )

  event.remove({id: 'minecraft:diamond_chestplate'})
  event.shaped(Item.of('minecraft:diamond_chestplate'),
    [
      'C C',
      'CBC', 
      'CCC'
    ],
    {
      B: 'minecraft:iron_chestplate',  
      C: 'minecraft:diamond'
    }
  )

  event.remove({id: 'minecraft:diamond_leggings'})
  event.shaped(Item.of('minecraft:diamond_leggings'),
    [
      'CCC',
      'CBC', 
      'C C'
    ],
    {
      B: 'minecraft:iron_leggings',  
      C: 'minecraft:diamond'
    }
  )

  event.remove({id: 'minecraft:diamond_boots'})
  event.shaped(Item.of('minecraft:diamond_boots'),
    [
      'CBC',
      'C C', 
      '   '
    ],
    {
      B: 'minecraft:iron_boots',  
      C: 'minecraft:diamond'
    }
  )

  event.remove({id:"createaddition:rolling/gold_plate"})
  event.remove({id:"createaddition:rolling/iron_plate"})
  event.remove({id:"createaddition:rolling/copper_plate"})


  event.shapeless(
    Item.of("powergrid:iron_wire"),
    [
      "createaddition:iron_wire"
    ]
  )

  event.shapeless(
    Item.of("powergrid:golden_wire"),
    [
      "createaddition:gold_wire"
    ]
  )

  event.shapeless(
    Item.of("powergrid:wire"),
    [
      "createaddition:copper_wire"
    ]
  )

  event.shapeless(
    Item.of("createaddition:iron_wire"),
    [
      "powergrid:iron_wire"
    ]
  )

  event.shapeless(
    Item.of("createaddition:gold_wire"),
    [
      "powergrid:golden_wire"
    ]
  )

  event.shapeless(
    Item.of("createaddition:copper_wire"),
    [
      "powergrid:wire"
    ]
  )

  console.log('Hello! The recipe event has fired!')
})
