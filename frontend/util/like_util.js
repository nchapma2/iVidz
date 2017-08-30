export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {
      like
    }
  })
);

export const destroyLike = like_id => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${like_id}`,
  })
);
