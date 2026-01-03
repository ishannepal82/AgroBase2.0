const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
export default function useFeed() {
    const fetchFeedItems = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/plants/1`);
        if (!response.ok) {
          throw new Error('Network response was not ok', { cause: response });
        }
        const data = await response.json();
        const items = data.response;
        return items;
      } catch (error) { 
        console.error('Error fetching feed items:', error);
        throw error;
      }
    };
  return (
    { fetchFeedItems }
  )
}
