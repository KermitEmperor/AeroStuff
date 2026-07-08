RecipeViewerEvents.removeEntries('item',event => {    
    event.remove('#simplyswords:uniques')
    event.remove('#simplyswords:runic_weapons')
})


ServerEvents.recipes(event => {
    event.remove({output: '#simplyswords:uniques'})
    event.remove({output: '#simplyswords:runic_weapons'})
})