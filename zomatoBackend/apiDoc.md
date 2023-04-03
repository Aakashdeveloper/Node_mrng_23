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
#  http://localhost:3400/menuItem
{"id":[4,5,6]}
> Place Order
# http://localhost:3400/placeOrder
{
    "orderId": 3,
    "name": "Isha",
    "email": "isha@gmail.com",
    "address": "Hom 65",
    "phone": 8934645457,
    "cost": 255,
    "menuItem": [
        12,10
    ]
}

* Page5(viewOrder)
> List all the orders
# http://localhost:3400/orders
> List all the orders wrt to email
# http://localhost:3400/orders?email=isha@gmail.com


> update Orders
# http://localhost:3400/updateOrder
{
        "_id": "642a31646a5daa13032fa221",
        "status":"On The Way"
}


> Delete Orders
# http://localhost:3400/removeOrder
{
    "_id": "642a31aa6a5daa13032fa223"
}
