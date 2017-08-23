# iVidz

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://ividz.herokuapp.com/
[trello]: https://trello.com/b/TDY3NdYF/ividz

## Minimum Viable Product

iVidz is a web application inspired by Youtube built using Ruby on Rails and React/Redux. The app will have features implemented smoothly, with bug-free navigation and a seeded database to allow for use of all following:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Video uploading and playing
- [ ] Commenting on videos and other comments
- [ ] Liking videos and comments
- [ ] User subscriptions to other users


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: https://github.com/nchapma2/iVidz-Proposal/blob/master/docs/wireframes
[components]: https://github.com/nchapma2/iVidz-Proposal/blob/master/docs/component-hierarchy.md
[sample-state]: https://github.com/nchapma2/iVidz-Proposal/blob/master/docs/sample-state.md
[api-endpoints]: https://github.com/nchapma2/iVidz-Proposal/blob/master/docs/api-endpoints.md
[schema]: https://github.com/nchapma2/iVidz-Proposal/blob/master/docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Get a functioning rails project with front-end Authentication up and running, have the session form page appropriately styled

### Phase 2: Video Model, API, and components (2 days)

**Objective:** Videos can be uploaded, destroyed, read and edited through the API, video show page is styled

### Phase 3: Comments (2 days)

**Objective:** Comments can belong to videos or other comments and can be created, read, edited and destroyed through the API

### Phase 4: Subscriptions and Likes (1 day)

**Objective:** Both subscriptions and likes can be created and destroyed, and given appropriate icons when clicked and un-clicked

### Phase 5: Search Form and Engine (1 day)

**Objective:** Adds search bar to the header using ruby gem pg and trigram

### Bonus Features (TBD)
- [ ] Search Form and Engine
- [ ] Dislikes
- [ ] Playlists
