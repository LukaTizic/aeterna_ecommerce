import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOrderSummary } from "@/lib/actions/order.actions";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { BadgeEuroIcon, Barcode, CreditCard, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const AdminOverviewPage = async () => {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    throw new Error("User is not authorized");
  }

  const summary = await getOrderSummary();

  return (
    <div className="space-y-2">
      <h1 className="h2-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row item-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>{" "}
            <BadgeEuroIcon />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">
              {formatCurrency(
                summary.totalSales._sum.totalPrice?.toString() || 0
              )}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row item-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>{" "}
            <CreditCard />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">
              {formatNumber(summary.ordersCount)}
            </div>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader className="flex flex-row item-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>{" "}
            <Users />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">
              {formatNumber(summary.usersCount)}
            </div>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader className="flex flex-row item-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Barcode />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">
              {formatNumber(summary.productsCount)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
