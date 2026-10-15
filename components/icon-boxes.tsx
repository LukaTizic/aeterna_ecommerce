import React from "react";
import { CreditCard, Headset, RotateCcw, Truck } from "lucide-react";

const items = [
  { icon: Truck, title: "Free shipping", text: "On orders above €100" },
  {
    icon: RotateCcw,
    title: "Money back guarantee",
    text: "Within 30 days of purchase",
  },
  {
    icon: CreditCard,
    title: "Flexible payment",
    text: "Card, PayPal or cash on delivery",
  },
  { icon: Headset, title: "Support any time", text: "We reply around the clock" },
];

const IconsBoxes = () => {
  return (
    <section
      aria-label="Our service"
      className="grid gap-4 pt-14 sm:grid-cols-2 lg:grid-cols-4"
    >
      {items.map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="flex flex-col gap-3.5 rounded-[20px] border bg-card p-6"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-muted text-primary">
            <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
          </span>
          <div>
            <div className="font-bold">{title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{text}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default IconsBoxes;
