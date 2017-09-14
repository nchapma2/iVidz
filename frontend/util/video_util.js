export const createVideo = (formData) => (
  $.ajax({
    method: 'POST',
    url: 'api/videos',
    data: formData,
    processData: false,
    contentType: false
  })
);

export const fetchSingleVideo = (videoId) => (
  $.ajax({
    method: 'GET',
    url: `api/videos/${videoId}`
  })
);

export const fetchVideos = (searchTerm) => (
  $.ajax({
    method: 'GET',
    url: 'api/videos',
    data: {
      video: {
        searchTerm
      }
    }
  })
);

export const fetchSearchResults = (searchTerm) => (
  $.ajax({
    method:'GET',
    url: 'api/videos',
    searchTerm
  })
);
