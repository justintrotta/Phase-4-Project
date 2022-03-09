# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


jim = Supplier.create(name: "Jims Junkyard", address: "123 Main St, Bismark, ND", phone: "318-555-6032")
bigtime = Supplier.create(name: "Big Time Parts", address: "415 Main St, New York City, NY", phone: "328-555-6131")
autosupply = Supplier.create(name: "Auto Supply Inc.", address: "12 NE Ave, Chicago, IL", phone: "414-555-1132")

order1 = Order.create(date: "2015-02-21", arrival: "2015-02-28", completed: true, supplier_id: autosupply.id)
order2 = Order.create(date: "2022-03-08", arrival: "2022-03-13", completed: false, supplier_id: jim.id)
order3 = Order.create(date: "2022-03-05", arrival: "2022-03-10", completed: false, supplier_id: bigtime.id)

Part.create(name: "WIX Oil Filter", model: "Accord 2.4L", year: "2013", make: "Honda", price: 7.50, description: "Replacement oil filter", order_id: order1.id)
Part.create(name: "iD Select Brake Rotor", model: "Accord 2.4L", year: "2013", make: "Honda", price: 22.70, description: "Quality brake rotor", order_id: order2.id)
Part.create(name: "NRG Innovation Steering Wheel", model: "Corolla", year: "1999", make: "Toyota", price: 180.00, description: "3 Spoke Reinforced w/ Slits", order_id: order3.id)
Part.create(name: "Sparco Shift Knob", model: "Corolla", year: "1999", make: "Toyota", price: 50.00, description: "Racing Series Shift Knob", order_id: order3.id)