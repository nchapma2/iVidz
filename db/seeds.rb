# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all

new_user = User.create(username:'MickeyMouse', password:'password1', email:'MickeyMouse@myemail.com')
User.create!(username:'DaffyDuck', password:'password2', email:'DaffyDuck@myemail.com')
User.create!(username:'LoneRanger', password:'password3', email:'LoneRanger@myemail.com')
User.create!(username:'SharkBoy', password:'password4', email:'SharkBoy@myemail.com')
User.create!(username:'JacknJill', password:'password5', email:'JacknJill@myemail.com')
User.create!(username: 'guestAccount', password: 'hunter12', email: 'demo@gmail.com')


Video.create!(title:'new video1', description:'new video1', uploader_id: new_user.id)
Video.create!(title:'new video2', description:'new video2', uploader_id: new_user.id)
Video.create!(title:'new video3', description:'new video3', uploader_id: new_user.id)
