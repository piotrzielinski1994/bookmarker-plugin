import { Bookmark } from 'utils/api/api.interfaces';

abstract class Api {
  static getBookmarks = async (): Promise<Array<Bookmark>> => {
    const endpoint = `${process.env.REACT_APP_API_URL}/bookmarks`;

    const response = await fetch(endpoint);

    return await response.json();
  };
}

export default Api;
