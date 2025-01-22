import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Rating from '@/features/home/components/Rating';
import { useRestaurant } from '@/features/home/store/home.store';

const Restaurant = () => {
  const { restaurant } = useRestaurant();
  const avgRating =
    restaurant && restaurant?.reviews.length > 0
      ? Math.round(
          restaurant?.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
            restaurant?.reviews.length
        )
      : 0;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full h-[90vh] border-y border-gray-300 flex">
        {/* Image */}
        <div className="w-full h-full py-10">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover object-center"
              src={restaurant?.image_url}
              alt="restaurant-img"
            />
          </div>
        </div>

        {/* Divider Vertical */}
        <div className="border-l border-gray-300 h-full mx-10 "></div>

        {/* Details */}
        <div className="w-full h-full  py-10">
          <div className=" w-full h-full">
            {/* Restaurant Name */}
            <h1 className=" text-5xl">{restaurant?.name}</h1>

            <div className="flex items-center justify-between text-gray-600 text-xl mt-2 mb-6">
              <div className="flex items-center gap-x-1  ">
                <p>{restaurant?.cuisine}</p>
                <p className="text-2xl">·</p>
                <p>{restaurant?.price_range}</p>
              </div>
              <div className="flex items-center gap-x-1">
                <div
                  className={`size-2 rounded-full ${
                    restaurant?.isOpen ? 'bg-[#04E7A1]' : 'bg-red-500'
                  }`}
                />
                <p>{restaurant?.isOpen ? 'OPEN' : 'CLOSED'}</p>
              </div>
            </div>

            {/* Restaurant Rating */}
            <div className="flex items-center gap-x-3">
              <Rating
                reviews={restaurant?.reviews || []}
                className="text-4xl"
              />
              <p className="text-xl">
                (<span className="font-semibold">{avgRating}</span> from{' '}
                {restaurant?.reviews?.length} Reviews)
              </p>
            </div>
            <div className="flex flex-col gap-y-3 mt-6">
              {restaurant?.reviews.map((review, i) => (
                <Card
                  className="bg-transparent rounded-sm shadow-sm p-3"
                  key={i}
                >
                  <CardHeader className="p-3">
                    <Rating reviews={[review]} className="text-3xl" />
                  </CardHeader>
                  <CardContent className="p-3">
                    <p>"{review.text}"</p>
                  </CardContent>
                  <CardFooter className="p-3">
                    <div className="flex h-full items-center gap-x-3">
                      <img
                        src={review.image}
                        alt="user-img"
                        className="size-10 rounded-full"
                      />
                      <p className="font-medium">{review.name}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
