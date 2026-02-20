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
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const {} = useForm({
    defaultValues: {},
  });
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-[18px] font-semibold">Sign In</CardTitle>
        <CardDescription>
          Sign in to start tracking your expenses
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Email</Label>
              </div>
              <Input
                id="password"
                type="email"
                required
                placeholder="juan@example.com"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="***********"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" size={"lg"}>
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
