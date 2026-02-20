"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUp } from "@/types/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function SignUpForm() {
  const { control, handleSubmit, reset } = useForm<SignUp>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onsubmit: SubmitHandler<SignUp> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-[18px] font-semibold">
          Create account
        </CardTitle>
        <CardDescription>
          Start tracking your expenses in minutes.
        </CardDescription>
        <CardAction>
          <Button variant={"outline"} className="rounded-full">
            Sign In
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onsubmit)} id="sign-up-form">
          <div className="flex flex-col gap-6">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <div className="grid gap-2">
                  <Label htmlFor="email">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Hungry Potato"
                    required
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Email</Label>
                  </div>
                  <Input
                    id="password"
                    type="email"
                    required
                    placeholder="juan@example.com"
                    {...field}
                  />
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="********"
                    {...field}
                  />
                </div>
              )}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" form="sign-up-form">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
