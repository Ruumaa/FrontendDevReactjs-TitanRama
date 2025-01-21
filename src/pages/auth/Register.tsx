import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  useCreateUser,
  useValidateUsername,
} from '@/features/auth/hooks/auth.hook';
import { registerFormSchema } from '@/shared/schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const Register = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const { mutate: createUser, isPending } = useCreateUser();
  const { isUsernameTaken } = useValidateUsername();

  const handleRegister = (values: z.infer<typeof registerFormSchema>) => {
    console.log(isUsernameTaken(values.username));
    if (isUsernameTaken(values.username)) {
      return;
    }
    createUser(values);
  };

  return (
    <div className="w-full items-center flex justify-center min-h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <Icon />
          <CardTitle className="text-2xl text-center my-5 font-bold">
            Get Started with Us
          </CardTitle>
          <CardDescription className="text-center">
            Already have an account?{' '}
            <span
              className="text-indigo-600 font-medium cursor-pointer hover:text-indigo-400 duration-200"
              onClick={() => navigate('/auth/login')}
            >
              Sign in
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegister)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="johndoe@mail.com"
                            type="email"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="****"
                            type="password"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                className="w-full mt-7"
                size={'lg'}
                type="submit"
                disabled={isPending}
              >
                {isPending ? 'Signing up...' : 'Sign up'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
