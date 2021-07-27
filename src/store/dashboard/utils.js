/* eslint-disable import/prefer-default-export */

import orderStatus from 'interfaces/orders/orderStatus'
import toSnakeCase from 'services/utils/toSnakeCase'

export const extractNextStatus = (currentStep, type) => {
  let nextStatus = ''
  if (type === 'back') {
    nextStatus = orderStatus[currentStep - 1] || 'placed'
  } else {
    nextStatus = orderStatus[currentStep + 1] || 'fullfilled'
  }

  return toSnakeCase(nextStatus)
}
