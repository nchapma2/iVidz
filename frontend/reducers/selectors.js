export const allComments = (comments) => {
  return(
    Object.keys(comments).map(id => comments[id])
  );
};
