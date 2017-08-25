export const createVideo = (formData) => (
  $.ajax({
    method: 'POST',
    url: 'api/videos',
    data: formData,
    processData: false,
    contentType: false
  })
);
