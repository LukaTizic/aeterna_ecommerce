"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus, Loader } from "lucide-react";
import { CartItem } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { useTransition } from "react";

// Small "Add" button for product cards. Uses the same cart action as the
// product page, so cart behaviour stays exactly the same.
const QuickAdd = ({ item }: { item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleAdd = () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast({ variant: "destructive", description: res.message });
        return;
      }

      toast({
        description: res.message,
        action: (
          <ToastAction altText="Go to cart" onClick={() => router.push("/cart")}>
            Go to cart
          </ToastAction>
        ),
      });
    });
  };

  return (
    <Button
      type="button"
      onClick={handleAdd}
      disabled={isPending}
      aria-label={`Add ${item.name} to cart`}
      className="h-11 w-11 shrink-0 rounded-full px-0 font-bold sm:w-auto sm:px-4"
    >
      {isPending ? (
        <Loader className="h-4 w-4 animate-spin" />
      ) : (
        <Plus className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">Add</span>
    </Button>
  );
};

export default QuickAdd;
