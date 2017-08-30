export const createLike = liked_id => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {
      liked_id
    }
  })
);
