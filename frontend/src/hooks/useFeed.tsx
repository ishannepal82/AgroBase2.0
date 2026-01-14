import type { FeedItem } from "../types/feed-item.types";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
export default function useFeed() {
    const handlefetchFeedItems = async () => {
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
    const handlefetchAIResponse = async (plant: FeedItem) => {
      try {
        const response = await fetch(`${apiBaseUrl}/ai/plant/info`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "prompt":plant }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok', { cause: response });
        }
        const data = await response.json();
        const responseText = data.response;
        console.log(responseText);
        return responseText;
      } catch (error) {
        console.error('Error fetching AI response:', error);
        throw error;
      }
    }
  return (
    { handlefetchFeedItems, handlefetchAIResponse }
  )
}
