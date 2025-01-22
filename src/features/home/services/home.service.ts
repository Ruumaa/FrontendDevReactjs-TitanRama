export const getRestaurants = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/restaurants`);

  if (!response.ok) {
    const errorData = await response.json();
    console.error(`HTTP error! ${(response.status, errorData.message)}`);
    throw new Error(`${errorData.message}`);
  }

  return await response.json();
};

export const getRestaurantById = async (id: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/restaurants/${id}`
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error(`HTTP error! ${(response.status, errorData.message)}`);
    throw new Error(`${errorData.message}`);
  }

  return await response.json();
};
