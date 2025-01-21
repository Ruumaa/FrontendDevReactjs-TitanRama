import { UserType } from '@/shared/types/user.type';

export const createUser = async (data: UserType) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(`HTTP error! ${(response.status, errorData.message)}`);
    throw new Error(`${errorData.message}`);
  }

  return await response.json();
};

export const getUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(`HTTP error! ${(response.status, errorData.message)}`);
    throw new Error(`${errorData.message}`);
  }

  return await response.json();
};
