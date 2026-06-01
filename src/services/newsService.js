const API_BASE_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

if (!API_KEY) {
  throw new Error(
    "Missing NewsAPI key. Set REACT_APP_NEWS_API_KEY in an .env.local file.",
  );
}

export async function fetchTopHeadlines(
  page = 1,
  pageSize = 12,
  country = "us",
) {
  const url = `${API_BASE_URL}?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `NewsAPI request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
