const API_BASE_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "b612678753c64e459e103771e6782a17";

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
