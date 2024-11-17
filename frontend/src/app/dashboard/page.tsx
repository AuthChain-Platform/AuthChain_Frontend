import { DashboardMetrics } from "./components/dashboard-metrics"
import { AnalyticsChart } from "./components/analytics-chart"
import { OrderRequests } from "./components/order-requests"
import { StaffManagement } from "./components/staff-management"
import ProductsHeader from './components/product-header';

export default function DashboardPage() {
  return (
    <>
      <ProductsHeader />
      <DashboardMetrics />
      <div className="space-y-6 mt-6">
        <AnalyticsChart />
        <OrderRequests />
        <StaffManagement />
      </div>
    </>
  )
}