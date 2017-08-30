export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {
      like
    }
  })
);
