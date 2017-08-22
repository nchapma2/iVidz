# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create(username:'MickeyMouse', password:'password1', email:'MickeyMouse@myemail.com')
User.create(username:'DaffyDuck', password:'password2', email:'DaffyDuck@myemail.com')
User.create(username:'LoneRanger', password:'password3', email:'LoneRanger@myemail.com')
User.create(username:'SharkBoy', password:'password4', email:'SharkBoy@myemail.com')
User.create(username:'JacknJill', password:'password5', email:'JacknJill@myemail.com')
