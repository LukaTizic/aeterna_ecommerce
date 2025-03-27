"use client";

import { Review } from "@/types";
import Link from "next/link";
import { useState } from "react";
import ReviewForm from "./review-form";

const ReviewList = ({
  userId,
  productId,
  productSlug,
}: {
  userId: string;
  productId: string;
  productSlug: string;
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const reload = () => {
    console.log("Submitted");
  };

  return (
    <div className="space-y-4">
      {reviews.length === 0 && <div>No reviews yet</div>}
      {userId ? (
        <ReviewForm
          userId={userId}
          productId={productId}
          onReviewSubmitted={reload}
        />
      ) : (
        <div>
          <Link
            className="text-cyan-500 pr-2 font-bold underline uppercase "
            href={`/sign-in?callbackUrl=/product/${productSlug}`}
          >
            sign In
          </Link>
          to write a review.
        </div>
      )}

      <div className="flex flex-col gap-3">{/* TODO: Reviews */}</div>
    </div>
  );
};

export default ReviewList;
