"use client";

import React, { useState } from "react";
import { Container } from "./ui/Container";
import { Headings } from "./ui/Headings";
import { appointmentLists, contacts } from "@/utils/constant";
import Image from "next/image";
import { Input } from "./ui/input";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const AppointmentType: React.FC<{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setValue, value }) => {
  return (
    <div className=" flex-1">
      <p className=" max-sm:text-[14px] ">
        Appointment type <span className="text-red-500">*</span>
      </p>
      <Select value={value} onValueChange={(value) => setValue(value)}>
        <SelectTrigger className=" w-full">
          <SelectValue placeholder="appointment type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {appointmentLists.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export function AppointmentDate({
  setDate,
  date,
}: {
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  date: Date | undefined;
}) {
  return (
    <Field className="mx-auto  flex-1 -space-y-2">
      <FieldLabel className=" max-sm:text-[14px]" htmlFor="date-picker-simple">
        Date
        <span className="text-red-500">*</span>
      </FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="justify-start font-normal"
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}

const CommonInput: React.FC<{
  value: string;
  title: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ title, setValue, value }) => {
  return (
    <div className=" flex flex-col sm:gap-1">
      <p className=" max-sm:text-[14px]">
        {title}
        <span className=" text-red-500">*</span>
      </p>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`${title}`}
      />
    </div>
  );
};

const BookForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [appointmentType, setAppointmentType] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [moreInfo, setMoreInfo] = useState<string>();
  const [booking, setBooking] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !phoneNo || !appointmentType)
      return alert(
        "Please we need all the information in the appointment fields",
      );
    setBooking(true);
    //  submit to the backend
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phoneNo,
          appointmentType,
          date,
          moreInfo,
        }),
      });
      if (response.ok) {
        setEmail("");
        setName("");
        setPhoneNo("");
        setAppointmentType("");
        setDate(undefined);
        setMoreInfo("");
        toast.success("appointment scheduled successfully!!");
      } else {
        toast.error("something went wrong!!");
      }
    } catch (error) {
      toast.error("something went wrong!!");
    } finally {
      setBooking(false);
    }
  };

  return (
    <div className=" flex-1">
      <form
        onSubmit={handleFormSubmit}
        className=" w-full h-fit p-6 rounded-2xl bg-white"
      >
        <p className=" text-blue-900 text-xl font-bold">Request Appointment</p>
        <div className=" flex flex-col gap-2">
          <CommonInput value={name} setValue={setName} title="Name" />
          <div className=" flex flex-col sm:flex-row item-center gap-2">
            <div className=" flex-1">
              <CommonInput value={email} setValue={setEmail} title="Email" />
            </div>
            <div className=" flex-1">
              <CommonInput
                value={phoneNo}
                setValue={setPhoneNo}
                title="Phone"
              />
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row sm:items-center gap-2">
            <AppointmentType
              value={appointmentType}
              setValue={setAppointmentType}
            />
            <AppointmentDate date={date} setDate={setDate} />
          </div>
          <div className=" flex flex-col gap-1">
            <p className=" max-sm:text-[14px]">Additional information</p>
            <Textarea
              value={moreInfo}
              onChange={(e) => setMoreInfo(e.target.value)}
              placeholder="More information"
              className=" h-37.5"
            />
          </div>
          <Button
            disabled={booking}
            className=" bg-blue-900 py-6 cursor-pointer hover:bg-blue-800"
          >
            {booking ? "Booking Appointment..." : "Book Appointment"}
          </Button>
          <small className=" text-center">
            By submitting this form, you agree to our privacy policy and consent
            to be contacted
          </small>
        </div>
      </form>
    </div>
  );
};

const OtherDetails = () => {
  return (
    <div className=" fllex-1 flex flex-col gap-3">
      <div className=" grid grid-cols-2 gap-2">
        {contacts.map((item, index) => (
          <div
            className=" p-4 bg-white rounded-2xl flex flex-col gap-1"
            key={index}
          >
            <div className=" w-8 h-8 rounded-sm flex items-center justify-center bg-[#D2F2E5] text-green-700">
              {<item.icon />}
            </div>
            <p className=" text-blue-900 font-semibold">{item.title}</p>
            <div className=" text-[14px] wrap-break-word">
              {item.subtitle.map((sub, i) => (
                <p className={` text-[10px]  md:text-[12px]`} key={i}>
                  {sub}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full aspect-[2] rounded-2xl overflow-hidden relative ">
        <Image
          className=" w-full h-full object-cover"
          src={"/joy.png"}
          alt=""
          width={200}
          height={200}
        />
        <div className=" absolute inset-0 bg-linear-to-b from-transparent p-2 flex  items-end  to-blue-500/40">
          <div className=" text-white">
            <p className=" font-semibold">Your recorvery our priority </p>
            <p>We can't wait to see you smile with testimonies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingDown = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-4">
      <BookForm />
      <OtherDetails />
    </div>
  );
};

const Booking = () => {
  return (
    <div
      id="contact"
      className="bg-linear-to-br from-[#DCEFFA] via-[#E8F6F2] to-[#D2F2E5]"
    >
      <Container>
        <div className=" py-24 flex flex-col gap-10">
          <Headings
            intro="GET IN TOUCH"
            heading="Schedule an Appointment"
            subtext="Taking new patients and accepting flexible payments. Book your appointment today and take the first step toward better health"
          />
          <BookingDown />
        </div>
      </Container>
    </div>
  );
};

export default Booking;
