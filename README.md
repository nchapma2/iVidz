# iVidz

![logo](/app/assets/images/ividz-logo.png)
<br></br>
[Heroku link][heroku]

[heroku]: https://ividz.herokuapp.com/

<b>iVidz</b> is a full-stack web application in the same vein as YouTube. Users can upload video content, share their opinions on these videos, and subscribe to other users they like. <b>iVidz</b> utilizes a Ruby on Rails backend and a PostgreSQL database. This backend is combined with React.js and a Redux philosophy and framework on the frontend to create a seamless user video experience.

## Features & Implementation

<b>iVidz</b> was written using Redux state. It contains several notable features, but the  following either had special challenges during implementation or required an involved solution.

### Dual Login Page

Upon choosing to log in, the user is first directed to a login page with a username field. If the user enters an non-existing username, the form renders errors. Else, the user is directed to a page with a password input, as well as a link directing the user back to the username field if they entered the wrong username.

The implementation of this dual login form required going outside of RESTful conventions. Errors from the username page also needed to be cleared out upon successful redirecting to the password page.

![session-form](/app/assets/images/session-form.gif)

For the dual login form, a new route was created and a 'Check' action was added to the sessions controller; this checks the existence of the username and either returns errors or the valid username. The session form component then re-renders to display the password field.

Clearing out errors required dispatching a 'Clear Errors' to the Session Reducer, which changed the session slice of Redux state to clear errors.

### Subscriptions and Likes

Subscriptions and likes required similar implementations in that they both could be created and destroyed, and had different renderings based on the current user's status. <b>iVidz</b> also kept track of the count of each.

![likes](/app/assets/images/likes.gif)

The components containing these features needed to keep track of the current user in order to display the correct symbol, as well as dispatching the correct action, create or destroy.

### Search

Search was implemented leveraging the PgSearch library, using `tsearch` and `trigram` search methods, allowing for slight misspellings of words. Search terms are checked against all videos' titles, descriptions and categories. A search term was kept in the UI slice of Redux state; the search page would send an API request containing the search term to the Videos Controller, which would send back the resulting videos.

Having a search bar allowing for users to search for specific content increases the time spent on the site per user, as well as making an easy way to navigate around <b>iVidz</b>.

## Future Direction


### User Channels

Users will soon be able to create and personalize their own channel page, complete with a 'displayed-videos' section for visitors.
