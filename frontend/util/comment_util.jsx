export const createComment = comment => (
  $.ajax({
    method:'POST',
    url: 'api/comments',
    data: {comment}
  })
);

export const fetchComments = videoId => (
  $.ajax({
    method:'GET',
    url: 'api/comments',
    data: {
      videoId
    }
  })
);
