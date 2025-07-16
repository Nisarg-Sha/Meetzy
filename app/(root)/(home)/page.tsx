"use client";

import React, { useEffect, useState } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const updateTimeAndDate = () => {
    const now = new Date();

    const newTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeZone: "Asia/Kolkata",
    }).format(now);

    setTime(newTime);
    setDate(newDate);
  };

  useEffect(() => {
    updateTimeAndDate();

    // Sync to the start of the next minute
    const now = new Date();
    const secondsUntilNextMinute = 60 - now.getSeconds();
    const timeoutId = setTimeout(() => {
      updateTimeAndDate();
      const intervalId = setInterval(updateTimeAndDate, 60 * 1000);
      // Save to clear if needed
      return () => clearInterval(intervalId);
    }, secondsUntilNextMinute * 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
