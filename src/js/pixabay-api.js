// ==========функція відправлення кур'єра на сервер===========

import axios from 'axios';

export async function fetchImages(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const url = `${BASE_URL}${END_POINT}`;

  const params = {
    key: '42263617-81d7156b9f7b88cd7b1016c2a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 150,
    page: currentPage,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

//============ chat gpt працюючий варіант ===================

// import axios from 'axios';

// export async function fetchImages(query) {
//   const BASE_URL = 'https://pixabay.com/api/';

//   const params = {
//     key: '42263617-81d7156b9f7b88cd7b1016c2a',
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   };

//   const url = `${BASE_URL}?${new URLSearchParams(params)}`;

//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error;
//   }
// }
