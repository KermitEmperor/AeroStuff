RecipeViewerEvents.removeEntries('item', event => {
    event.remove('createaddition:straw')

})

ServerEvents.recipes(event => {
    event.remove({output: 'createaddition:straw'})    
    event.remove({type: 'createaddition:liquid_burning'})
})