import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCategoryFilter, useRestaurantFilter } from '../store/home.store';

import { useGetRestaurants } from '../hooks/home.hook';

const Filters = () => {
  const { cuisines } = useGetRestaurants();
  const { isOpen, price, setIsOpen, setPrice, resetFilters } =
    useRestaurantFilter();
  const { category, setCategory } = useCategoryFilter();
  const handleReset = () => {
    resetFilters();
    setCategory('');
  };

  return (
    <div className="w-full h-16 border-y border-gray-300">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center h-full w-full space-x-5">
          <h5 className="text-gray-600">Filter By:</h5>
          <div className="flex gap-x-2 border-b border-gray-400 text-sm py-0.5">
            <input
              type="checkbox"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
            />
            <h5>Open Now</h5>
          </div>
          {/* Select Input */}
          <div className="border-b border-gray-400">
            <Select onValueChange={setPrice} value={price}>
              <SelectTrigger className="w-24 bg-transparent h-auto border-0 shadow-none text-black  text-sm   focus:ring-0 focus:outline-none py-0.5 px-0">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$">$</SelectItem>
                <SelectItem value="$$">$$</SelectItem>
                <SelectItem value="$$$">$$$</SelectItem>
                <SelectItem value="$$$$">$$$$</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Select Categories */}
          <div className="border-b border-gray-400">
            <Select onValueChange={setCategory} value={category}>
              <SelectTrigger className="w-32 bg-transparent h-auto border-0 shadow-none text-black  text-sm   focus:ring-0 focus:outline-none py-0.5 px-0">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((cuisine, i) => (
                  <SelectItem key={i} value={cuisine}>
                    {cuisine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Clear Button */}
        </div>
        <Button
          className="rounded-sm text-light font-normal text-sm ml-auto text-gray-500 px-14"
          variant={'outline'}
          onClick={handleReset}
        >
          CLEAR ALL
        </Button>
      </div>
    </div>
  );
};

export default Filters;
