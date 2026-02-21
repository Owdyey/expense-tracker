import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IconCalendar, IconCalendarEvent } from "@tabler/icons-react";
import { useState } from "react";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";

type CalendarInputFieldProps = ControllerRenderProps<
  FieldValues,
  "asOfDate"
> & {
  label: string;
};

export default function CalendarInputField({
  label,
  value,
  onChange,
  ...props
}: CalendarInputFieldProps) {
  const [dateSelected, setDateSelected] = useState<Date | undefined>(undefined);
  const [openPopover, setOpenPopover] = useState(false);

  const handlePickDate = (dateSelected: Date | undefined) => {
    onChange(dateSelected);
    setOpenPopover(false);
  };

  return (
    <>
      <Field className="gap-0.5">
        <FieldLabel>{label}</FieldLabel>
        <InputGroup>
          <InputGroupInput
            value={value ? value.toDateString() : ""}
            {...props}
            readOnly
          />
          <Popover open={openPopover} onOpenChange={setOpenPopover}>
            <PopoverTrigger asChild>
              <InputGroupButton className="me-2">
                <IconCalendarEvent />
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent align="center" className="p-0 shadow-none">
              <Calendar
                mode="single"
                className="rounded-lg"
                selected={dateSelected}
                onSelect={setDateSelected}
              />
              <div className=" p-2 flex justify-end ">
                <Button
                  className="text-xs"
                  onClick={() => handlePickDate(dateSelected)}
                >
                  Pick Date
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </InputGroup>
      </Field>
    </>
  );
}
