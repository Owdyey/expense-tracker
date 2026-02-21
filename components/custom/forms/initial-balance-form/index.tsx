"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { IconInfoCircle } from "@tabler/icons-react";
import { Controller, useForm } from "react-hook-form";
import CalendarInputField from "../../inputs/calendar-input-field";

export type InitialBalanceForm = {
  amountBalance: number;
  currency: Date | undefined;
  asOfDate: string;
};

export default function InitialBalanceForm() {
  const { control, handleSubmit, reset } = useForm<InitialBalanceForm>({
    defaultValues: {
      amountBalance: 0,
      asOfDate: "",
    },
  });
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Current Balance</CardTitle>
        <CardDescription>
          We&apos;ll use this as the baseline for your reports and dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-5">
          <div className="grid grid-cols-2 gap-5">
            <Controller
              name="amountBalance"
              control={control}
              render={({ field }) => (
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Balance Amount</Label>
                  </div>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="1000" {...field} />
                    <InputGroupAddon align="inline-end">0.00 </InputGroupAddon>
                  </InputGroup>
                </div>
              )}
            />

            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Currency</Label>
                  </div>
                  <Input />
                </div>
              )}
            />

            <Controller
              name="asOfDate"
              control={control}
              render={({ field, fieldState }) => {
                console.log(fieldState);
                return <CalendarInputField label="Hello" {...field} />;
              }}
            />

            <Controller
              name="amountBalance"
              control={control}
              render={({ field }) => (
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Balance Amount</Label>
                  </div>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="1000" {...field} />
                    <InputGroupAddon align="inline-end">0.00 </InputGroupAddon>
                  </InputGroup>
                </div>
              )}
            />
          </div>

          <Controller
            name="amountBalance"
            control={control}
            render={({ field }) => (
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Notes (optional)</Label>
                </div>
                <InputGroup>
                  <InputGroupTextarea />
                  <InputGroupAddon align="inline-end">0.00 </InputGroupAddon>
                </InputGroup>
              </div>
            )}
          />
        </form>
      </CardContent>
      <CardFooter className="bg-white border-none justify-between">
        <div className=" bg-amber-100 text-amber-800 py-1 px-3 rounded-md">
          <p className="text-xs flex gap-1">
            <IconInfoCircle size={14} />
            You can always update this later from Settings.
          </p>
        </div>
        <div className="gap-2 justify-end flex flex-row flex-1">
          <Button variant="outline">Back</Button>
          <Button>Save & Continue</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
