import { useMutation, useQuery } from '@tanstack/react-query';
import { createUser, getUsers } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { UserType } from '@/shared/types/user.type';
import { useAuth } from '../components/AuthProviders';

export const useCreateUser = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      navigate('/auth/login');
      toast({ description: 'Sign up success' });
    },
    onError: (error) => {
      console.error('Create User Error:', error);
      toast({ description: 'Something went wrong', variant: 'destructive' });
    },
  });
};

export const useGetUsers = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });

  return { users, isLoading, error };
};

export const useValidateUsername = () => {
  const [existingUsernames, setExistingUsernames] = useState<string[]>([]);
  const { toast } = useToast();
  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await getUsers();
        const usernames = response.map((user: UserType) => user.username);
        setExistingUsernames(usernames);
      } catch (error) {
        console.error('Error fetching usernames:', error);
      }
    };

    fetchUsernames();
  }, []);

  const isUsernameTaken = (username: string) => {
    if (existingUsernames.includes(username)) {
      toast({ description: 'Username already exists', variant: 'destructive' });
      return true;
    }
    return false;
  };
  console.log(existingUsernames);
  return { isUsernameTaken };
};

export const useValidateLogin = () => {
  const [existingUsers, setExistingUsers] = useState<UserType[] | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setExistingUsers(response);
      } catch (error) {
        console.error('Error fetching usernames:', error);
      }
    };

    fetchUsers();
  }, []);

  const validateLogin = async (username: string, password: string) => {
    const user = existingUsers?.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      login(user);
      toast({ description: 'Login successful!' });
      navigate('/');
    } else {
      toast({
        description: 'Invalid username or password',
        variant: 'destructive',
      });
    }
  };

  return { validateLogin };
};
