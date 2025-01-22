import { Button } from '@/components/ui/button';
import { Restaurant } from '@/shared/types/restaurant.type';
import { useNavigate } from 'react-router-dom';
import Rating from './Rating';
import { useRestaurant } from '../store/home.store';

const RestaurantCard = ({ restaurants }: { restaurants: Restaurant[] }) => {
  const navigate = useNavigate();
  const { setRestaurant } = useRestaurant();
  const handleClick = (id: number) => {
    navigate(`/restaurant/${id}`);
    setRestaurant(restaurants.find((r) => r.id === id) || null);
  };

  if (restaurants.length === 0)
    return <h5 className="italic">Restaurant not Found</h5>;
  return (
    <>
      {restaurants.map((restaurant, i) => (
        <div className="h-[350px] w-full flex flex-col" key={i}>
          {/* Image */}
          <img
            className="h-[190px] w-full object-cover object-center"
            src={restaurant.image_url}
          />
          {/* Title */}
          <h3 className="font-medium text-lg leading-6 my-1 line-clamp-2">
            {restaurant.name}
          </h3>
          {/* Rating */}
          <div className="flex items-center -mt-1 mb-1">
            <Rating reviews={restaurant.reviews} />
          </div>
          {/* Cuisine, price, isOpen */}
          <div className="flex items-center justify-between text-gray-600 text-xs">
            <div className="flex items-center gap-x-1  ">
              <p>{restaurant.cuisine}</p>
              <p className="!text-xl">·</p>
              <p>{restaurant.price_range}</p>
            </div>
            <div className="flex items-center gap-x-1">
              <div
                className={`size-1.5 rounded-full ${
                  restaurant.isOpen ? 'bg-[#04E7A1]' : 'bg-red-500'
                }`}
              />
              <p>{restaurant.isOpen ? 'OPEN' : 'CLOSED'}</p>
            </div>
          </div>
          {/* Learn more button */}
          <div className="mt-auto">
            <Button
              className="w-full bg-[#0C2B56] rounded-none hover:bg-[#0C2B56]/90"
              onClick={() => handleClick(restaurant.id)}
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default RestaurantCard;
