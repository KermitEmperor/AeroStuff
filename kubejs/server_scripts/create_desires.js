ServerEvents.recipes(event => {
	event.remove({id:"dndesires:crafting/handheld_drill"})
	event.remove({id:"dndesires:crafting/handheld_saw"})
	event.remove({id:"dndesires:mechanical_crafting/gatling_breaker"})
	event.remove({id:"dndesires:crafting/fan_catalyst/blasting_sail"})
	event.remove({id:"dndesires:crafting/fan_catalyst/dragon_breathing_sail"})
	event.remove({id:"dndesires:crafting/fan_catalyst/freezing_sail"})
	event.remove({id:"dndesires:crafting/fan_catalyst/haunting_sail"})
	event.remove({id:"dndesires:crafting/fan_catalyst/sanding_sail"})
	event.remove({id:"dndesires:crafting/fan_catalyst/seething_sail"})
	event.remove({id:"dndesires:crafting/fan_catalyst/smoking_sail"})
	event.remove({id:"dndesires:crafting/fan_catalyst/splashing_sail"})
	event.remove({id:"create_connected:item_application/seething_catalyst_from_empty"})
	event.remove({id:"dndesires:burner_smoking"})
	event.remove({id:"dndesires:burner_smelting"})
	event.remove({id:"dndesires:burner_blasting"})
	event.remove({id:"dndesires:crafting/burner"})
})

RecipeViewerEvents.removeEntries('item', event => {
	const items = ['dndesires:blasting_sail', 'dndesires:dragon_breathing_sail', 'dndesires:freezing_sail', 'dndesires:haunting_sail', 'dndesires:sanding_sail', 'dndesires:seething_sail', 'dndesires:splashing_sail', 'dndesires:smoking_sail', 'dndesires:gatling_breaker', 'dndesires:handheld_saw', 'dndesires:handheld_drill', 'dndesires:burner']
	items.forEach(item => {
		event.remove(item)
	})
})