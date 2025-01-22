import RestaurantCard from './RestaurantCard';
import Filters from './Filters';
import { useFilteredRestaurants, useGetRestaurants } from '../hooks/home.hook';
import LoadingScreen from '@/components/LoadingScreen';

const HomeContent = () => {
  const { restaurants, isLoading } = useGetRestaurants();
  const filteredRestaurants = useFilteredRestaurants(restaurants);

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <div className="my-20">
        {/* Header */}
        <div>
          <h1 className="font-light text-5xl">Restaurants</h1>
          <p className="text-gray-600 font-extralight max-w-xl my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            repudiandae impedit asperiores illum, commodi ad aliquid, quasi.
          </p>
        </div>

        {/* Filters */}
        <Filters />

        {/* Cards */}
        <div className="my-10 w-full h-full">
          <h3 className="font-light text-3xl mb-8">All Restaurant</h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-16">
            <RestaurantCard restaurants={filteredRestaurants} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
