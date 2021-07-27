import orderStatus from 'interfaces/orders/orderStatus'
import React from 'react'
import { useDashboard } from 'store'
import DashboardColumn from '../../components/DashboardColumn/DashboardColumn'
import styles from './DashboardContainer.module.scss'

const DashboardContainer = () => {
  const { getOrders } = useDashboard()

  const orders = getOrders()

  return (
    <main className={styles.dashboardContainer}>
      {orderStatus.map((status, index) => (
        <DashboardColumn orders={orders[status]} step={index} />
      ))}
    </main>
  )
}

export default DashboardContainer
