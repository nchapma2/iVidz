# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all
Comment.destroy_all

mickey = User.create(username:'MickeyMouse', password:'password1', email:'MickeyMouse@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/mickeymouse.jpg" )
daffy = User.create!(username:'DaffyDuck', password:'password2', email:'DaffyDuck@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/daffy-duck.jpg")
lone = User.create!(username:'LoneRanger', password:'password3', email:'LoneRanger@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/lone-ranger.jpg")
shark = User.create!(username:'SharkBoy', password:'password4', email:'SharkBoy@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/sharkboy.jpg")
jack = User.create!(username:'JacknJill', password:'password5', email:'JacknJill@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/adam-sandler.jpg" )
User.create!(username: 'guestAccount', password: 'hunter12', email: 'demo@gmail.com')


video = Video.create!(title:'Flower Video', category:"Entertainment",  description:'Beautiful flowers flowing in the breeze', uploader_id: jack.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/flower.mp4")
Video.create!(title:'Hot Coffee!', category: "Food", description:'It is being poured into a cup', uploader_id: shark.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/343647377.mp4")
Video.create!(title:'Roller Coasters Are Great!', category: "Entertainment", description:'Two girls decide to go on a roller coaster. Will they be afraid or excited?', uploader_id: lone.id, video: 'https://s3.amazonaws.com/ividz-dev/seeds/350950598.mp4')

Comment.create!(body: 'What a wonderful flower!', author_id: daffy.id, video_id: video.id)
