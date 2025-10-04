const API_KEY = '52591555-089c8d48efe1c098578f49548';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const url = new URL(BASE_URL);
  url.searchParams.set('key', API_KEY);
  url.searchParams.set('q', query);
  url.searchParams.set('image_type', 'photo');
  url.searchParams.set('orientation', 'horizontal');
  url.searchParams.set('safesearch', 'true');
  url.searchParams.set('per_page', String(PER_PAGE));
  url.searchParams.set('page', String(page));

  try {
    const resp = await fetch(url.toString());
    if (!resp.ok) {
      throw new Error(`Pixabay API error: ${resp.status}`);
    }
    const data = await resp.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export { PER_PAGE };
