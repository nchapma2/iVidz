```js
{
  session: {
    currentUser: {
      id: 1,
      username: 'Sample Sam'
    },
    errors: []
  },
  ui: {
    page: "upload"
  },
  entities: {
    videos: {
      currentVideo: {
        id: 3
      },
      videoList:{
        3: {
          id: 3,
          title: 'Amazing Video!',
          description: 'Sample vid',
          video: '/dog_videos/video_4',
          views: 1337,
          comments_ids: [1, 4, 5],
          uploader: {

          }
        }
        4: {
          id: 5,
          title: 'Amazing Cat Backflips!',
          description: 'Sample vid 2 ',
          video_url: '/cat_videos/video_9',
          views: 5309,
          comments_ids: [3, 12, 16],
          uploader: {

          }
        }
      },
      comments: {
        28: {
          id: 28,
          author_id: 1,
          body: 'Man, that cat can really flip!',
          video_id: 4
        },
        73: {
          id: 73,
          author_id: 2,
          body: "I'm so jealous!",
          video_id: 4
        }
      }
    }
  }
}









```
