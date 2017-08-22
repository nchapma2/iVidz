## Component Hierarchy

**SessionFormContainer**
  - SessionForm

**NavbarContainer**
  - Navbar 
  - SearchForm
  - Dropdown for toggleable secondary Navbar


**HomeContainer**
  - Home
    + VideoIndex
      - VideoIndexItems

**SearchContainer**
  - SearchForm
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

**UserShowContainer**
  - ChannelHeader
  - VideoDetail



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
