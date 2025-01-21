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
import { useValidateLogin } from '@/features/auth/hooks/auth.hook';
import { loginFormSchema } from '@/shared/schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const Login = () => {
  const navigate = useNavigate();
  const { validateLogin } = useValidateLogin();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLogin = (values: z.infer<typeof loginFormSchema>) => {
    validateLogin(values.username, values.password);
  };

  return (
    <div className="w-full items-center flex justify-center min-h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <Icon />
          <CardTitle className="text-2xl text-center my-5 font-bold">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Don&apos;t have an account yet?{' '}
            <span
              className="text-indigo-600 font-medium cursor-pointer hover:text-indigo-400 duration-200"
              onClick={() => navigate('/auth/register')}
            >
              Sign up
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)}>
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
              <Button className="w-full mt-7" size={'lg'} type="submit">
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
