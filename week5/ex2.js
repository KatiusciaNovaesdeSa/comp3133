

// 1.find all restaurants with Japanese cuisine
db.getCollection('Restaurants').find({ 'cuisine': 'Japanese' })

// 2.using projections
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { 'cuisine': 1, 'name': 1 })

// 3. using sort asc
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { 'cuisine': 1, 'name': 1 }).sort({ KEY: 1 })

// 4.new query
db.getCollection('Restaurants').find({ 'cuisine': { $eq: 'Japanese' } }, { '_id': 1, 'cuisine': 1, 'name': 1, 'city': 1, 'restaurant_id': 1 }).sort({ 'restaurant_id': 1 })

