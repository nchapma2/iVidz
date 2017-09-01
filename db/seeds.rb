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
Like.destroy_all
Subscription.destroy_all

mickey = User.create(username:'MickeyMouse', password:'password1', email:'MickeyMouse@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/mickeymouse.jpg" )
daffy = User.create!(username:'DaffyDuck', password:'password2', email:'DaffyDuck@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/daffy-duck.jpg")
lone = User.create!(username:'LoneRanger', password:'password3', email:'LoneRanger@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/lone-ranger.jpg")
shark = User.create!(username:'SharkBoy', password:'password4', email:'SharkBoy@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/sharkboy.jpg")
jack = User.create!(username:'JacknJill', password:'password5', email:'JacknJill@myemail.com', avatar: "https://s3.amazonaws.com/ividz-dev/seeds/adam-sandler.jpg" )
User.create!(username: 'guestAccount', password: 'hunter12', email: 'demo@gmail.com')

ids = [mickey.id, daffy.id, lone.id, shark.id, jack.id]

video = Video.create!(title:'A Lovely Flower!', views:142, category:"Entertainment",  description:'Beautiful flowers flowing in the breeze', uploader_id: jack.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/flower.mp4")
Video.create!(title:'Hot Coffee Here', views: 9813, category: "Food", description:'It is being poured into a cup', uploader_id: shark.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/343647377.mp4")
Video.create!(title:'Roller Coasters Are Great!', views: 96201, category: "Entertainment", description:'Two girls decide to go on a roller coaster. Will they be afraid or excited?', uploader_id: lone.id, video: 'https://s3.amazonaws.com/ividz-dev/seeds/350950598.mp4')
Video.create!(title:"Hedghog Having Fun", views: rand(10000), category:"Pets & Animals", description:"Isn't he just the cutest little hedgehog? I want one.", uploader_id: daffy.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/Hedgehog+-+4250.mp4" )
Video.create!(title:"Yummy Mushrooms", views: rand(10000), category:"Food", description:"A delicious recipe I decided to whip up one day. Try it!", uploader_id: daffy.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/Mushroom+-+11716.mp4")
video2 = Video.create!(title:"Beautiful Music Box", views: rand(10000), category:"Music", description:"It's kind of a creepy song, isn't it?", uploader_id: jack.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/Music+Box+-+11543.mp4" )
Video.create!(title:"Sushi!!!!", views: rand(10000), category:"Food", description:"I wish I had this for lunch, but I don't.", uploader_id: jack.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/Sushi+-+11291.mp4" )
Video.create!(title:"Oh Shenandoah", views: rand(10000), category:"Beauty & Fashion", description:"This beautiful river makes up the boundaries between Georgia and Alabama. Queen of the South, they call her.", uploader_id: mickey.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/The+Sound+Of+The+Creek+-+10001.mp4")
video1 = Video.create!(title:"Dad's at it again", views: rand(10000), category:"Education", description:'I caught my dad weed-whacking the grass. I think the lawnmower is broken.', uploader_id: daffy.id, video: "https://s3.amazonaws.com/ividz-dev/seeds/Trimmer+-+11167.mp4" )


Comment.create!(body: 'What a wonderful flower!', author_id: daffy.id, video_id: video.id)
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video1.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video1.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video1.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video1.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video1.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video2.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video2.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video2.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video2.id )
Comment.create!(body: Faker::Lovecraft.sentence, author_id: ids.sample, video_id: video2.id )
