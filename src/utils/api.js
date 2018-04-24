import axios from "axios";

export const fetchByLanguage = async lang => {
  const URL = `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc`;
  const response = await axios(URL);
  const data = await response.data.items;

  return data;
};
