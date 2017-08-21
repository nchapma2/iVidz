# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Videos

- `GET /api/videos`
  - video index and search
  - accepts `title` query param to list videos by title
  - may eventually accept keyword/tag query param
- `POST /api/video`
- `GET /api/video/:id`
- `DELETE /api/video/:id`


### Comments

- `GET /api/video/:video_id/comments`
  - comment index for specific video
- `POST /api/video/:video_id/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Likes

- `POST /api/video/:video_id/likes`
  - one like per user/video
- `POST /api/comment/:comment_id/likes`
  - allows for comment liking
- `DELETE /api/like/:id`
