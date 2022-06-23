export const removeLastChunkPath = url => {
  const urlStart = new URL(url);
  const pathTokens = urlStart.pathname.split('/');
  const lastIndex = pathTokens.length - 1;
  const newPath = pathTokens.reduce((concat, token, index) => {
    return index < lastIndex ? concat + token : concat;
  }, '');
  return `${urlStart.origin}/${newPath}`;
};
export const getSurveyRootUrl = url => {
  const urlStart = new URL(url);
  return `${urlStart.origin}/${urlStart.pathname.split('/')[1]}`;
};
export const extractQuestionnaireUrl = res => res.data[0].url;
