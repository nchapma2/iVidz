## Component Hierarchy

**SessionFormContainer**
  - SessionForm

**Navbar**
  - Navbar
    + Searchbar
      - SearchbarForm
    + Dropdown for toggleable secondary Navbar
  - AppBar

**HomeContainer**
  - Home
    + VideoIndex
      - VideoIndexItems

**SearchContainer**
  - SearchResults
    + VideoIndex
      - VideoIndexItems

**VideoUploadContainer**
  - VideoUpload
    + FileUpload
    + UploadForm

**VideoShowContainer**
  - VideoPlayer
  - VideoDetail
    + Likes
  - Comments

**UserHomeContainer**
  - ChannelHeader
  - VideoDetail
  - Feeds



## Routes
| Path | Component |
|------|-----------|
| `/sign-up` | `SessionFormContainer` |
| `/sign-in` | `SessionFormContainer` |
| `/` | `HomeContainer` |
| `/results` | `SearchContainer` |
| `/upload` | `VideoUploadContainer` |
| `/watch/:videoId` | `VideoShowContainer` |
| `/user/:userId` | `UserHomeContainer` |
