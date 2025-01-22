import { Restaurant } from '@/shared/types/restaurant.type';
import { create } from 'zustand';

interface FilterState {
  isOpen: boolean;
  price: string;
  setIsOpen: (isOpen: boolean) => void;
  setPrice: (price: string) => void;
  resetFilters: () => void;
}

export const useRestaurantFilter = create<FilterState>((set) => ({
  isOpen: false,
  price: '',
  setIsOpen: (isOpen) => set({ isOpen }),
  setPrice: (price) => set({ price }),
  resetFilters: () => set({ isOpen: false, price: '' }),
}));

interface CategoryState {
  category: string;
  setCategory: (category: string) => void;
}

export const useCategoryFilter = create<CategoryState>((set) => ({
  category: '',
  setCategory: (category) => set({ category }),
}));

interface RestaurantState {
  restaurant: Restaurant | null;
  setRestaurant: (restaurant: Restaurant | null) => void;
}

export const useRestaurant = create<RestaurantState>((set) => ({
  restaurant: null,
  setRestaurant: (restaurant) => set({ restaurant }),
}));
