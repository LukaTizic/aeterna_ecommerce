"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const TARGET_DATE = new Date(Date.now() + 8 * 24 * 60 * 60 * 1000);
// static date
// const TARGET_DATE = new Date("2025-01-20T00:00:00");

const calculateTimeRemaining = (targetDate: Date) => {
  const currentTime = new Date();
  const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0);
  return {
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  };
};

const DealCountdown = () => {
  const [time, setTime] = useState<ReturnType<typeof calculateTimeRemaining>>();

  useEffect(() => {
    // Calculate initial time on client
    setTime(calculateTimeRemaining(TARGET_DATE));

    const timerInterval = setInterval(() => {
      const newTime = calculateTimeRemaining(TARGET_DATE);
      setTime(newTime);

      if (
        newTime.days === 0 &&
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0
      ) {
        clearInterval(timerInterval);
      }
    }, 1000);

    // Stop the timer when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  const ended =
    !!time &&
    time.days === 0 &&
    time.hours === 0 &&
    time.minutes === 0 &&
    time.seconds === 0;

  return (
    <section id="deal" className="grid scroll-mt-6 gap-5 pt-14 lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-5 rounded-[28px] bg-[#14161A] p-8 text-white dark:border dark:bg-card md:p-14">
        <span className="self-start rounded-full bg-primary px-3.5 py-2 text-sm font-bold text-primary-foreground">
          Deal of the month
        </span>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {ended ? "This deal has ended" : "A better price, not for long."}
        </h2>
        <p className="max-w-md text-[17px] leading-relaxed text-[#B9BEC8]">
          {ended
            ? "This deal is no longer available. Check out our latest products instead."
            : "Every month we drop the price on selected pieces. When the timer runs out, the deal is gone."}
        </p>
        {!ended && (
          <ul className="grid max-w-md grid-cols-4 gap-2.5">
            <StatBox label="days" value={time?.days} />
            <StatBox label="hours" value={time?.hours} />
            <StatBox label="min" value={time?.minutes} />
            <StatBox label="sec" value={time?.seconds} />
          </ul>
        )}
        <div>
          <Link
            href="/search"
            className="inline-flex h-14 items-center rounded-full bg-white px-7 font-bold text-[#14161A] hover:bg-white/90"
          >
            View products
          </Link>
        </div>
      </div>
      <div className="flex min-h-[360px] items-center justify-center rounded-[28px] border bg-white lg:min-h-[480px]">
        <Image
          src="/images/promo.jpg"
          alt="Deal of the month"
          width={600}
          height={600}
          sizes="(min-width: 1024px) 380px, 70vw"
          className="h-auto w-[62%]"
        />
      </div>
    </section>
  );
};

const StatBox = ({ label, value }: { label: string; value?: number }) => (
  <li className="rounded-2xl bg-white/[0.08] px-1.5 py-3.5 text-center">
    <p className="text-3xl font-extrabold leading-none tabular-nums">
      {value === undefined ? "--" : String(value).padStart(2, "0")}
    </p>
    <p className="mt-1.5 text-xs text-[#B9BEC8]">{label}</p>
  </li>
);

export default DealCountdown;
