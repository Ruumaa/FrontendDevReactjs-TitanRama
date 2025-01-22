import { useQuery } from '@tanstack/react-query';
import { getRestaurantById, getRestaurants } from '../services/home.service';
import { useCategoryFilter, useRestaurantFilter } from '../store/home.store';
import { Restaurant } from '@/shared/types/restaurant.type';
import { useEffect, useState } from 'react';

export const useGetRestaurants = () => {
  const { category } = useCategoryFilter();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setIsLoading(true);
        const response = await getRestaurants();

        const responseCuisines = response.map(
          (restaurant: Restaurant) => restaurant.cuisine
        );

        setCuisines(responseCuisines);

        const filteredByCategory = response.filter((restaurant: Restaurant) =>
          restaurant.cuisine.includes(category)
        );

        setRestaurants(category !== '' ? filteredByCategory : response);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRestaurants();
  }, [category]);

  return { restaurants, cuisines, isLoading };
};

export const useFilteredRestaurants = (restaurants: Restaurant[]) => {
  const { isOpen, price } = useRestaurantFilter();

  return restaurants?.filter((restaurant) => {
    const matchesOpen = isOpen ? restaurant.isOpen : true;
    const matchesPrice = price ? restaurant.price_range === price : true;

    return matchesOpen && matchesPrice;
  });
};

export const useGetRestausrantById = (id: string) => {
  const {
    data: restaurant,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['restaurant', id],
    queryFn: () => getRestaurantById(id),
  });

  return { restaurant, isLoading, error };
};
