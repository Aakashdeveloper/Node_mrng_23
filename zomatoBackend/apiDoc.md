* Page1 (Search)

> List of city
# http://localhost:3400/location
> Restaurants wrt to city
# http://localhost:3400/restaurants?stateId=1
> List of mealType
# http://localhost:3400/mealType
# http://localhost:3400/restaurants?mealId=3&stateId=1


* Page2(Listing)
> Restaurnats wrt to mealType
# http://localhost:3400/restaurants?mealId=3
> Restaurnats wrt to mealType + Cuisine
# http://localhost:3400/filter/1?cuisineId=2
> Restaurnats wrt to mealType + Cost
# http://localhost:3400/filter/1?lcost=100&hcost=500
# http://localhost:3400/filter/1?cuisineId=1&sort=-1
# http://localhost:3400/filter/1?cuisineId=1&sort=-1&skip=2&limit=2

* Page3(details)
> Details of the restaurant
# http://localhost:3400/details/6288d22dbb17b75750d11cb1
> Menu wrt to restaurant
# http://localhost:3400/menu/9

* Page4(Order)
> Menu details wrt to choice
> Place Order

* Page5(viewOrder)
> List all the orders
# http://localhost:3400/orders
> List all the orders wrt to email
# http://localhost:3400/orders?email=isha@gmail.com