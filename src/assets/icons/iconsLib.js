import {
  faTruck,
  faStore,
  faAngleDown,
  faAngleUp,
  faHands,
  faDollarSign,
  faArrowRight,
  faArrowLeft,
  faCheck,
  faClock,
  faUtensils,
  faWineGlassAlt,
  faGlassWhiskey,
  faPlus,
  faListUl,
  faUser,
  faPhoneAlt,
  faCreditCard,
  faBoxes,
  faSearchDollar,
  faReceipt,
  faIdBadge,
  faCog,
  faMapMarkerAlt,
  faHandHoldingUsd,
  faTruckLoading,
  faMoneyBillWave,
  faBan,
  faEdit,
  faTimes,
  faLock,
  faLockOpen,
  faFileAlt,
  faTrash,
  faCalendarAlt,
  faRulerHorizontal,
  faEllipsisH,
  faEllipsisV,
  faCalendarCheck,
  faMinus,
  faFileSignature,
  faStopwatch,
  faMoneyBill,
  faCalendarMinus,
  faStopwatch20,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons'

import { deliveryTypes } from 'shared/interfaces/deliveryTypes/deliveryTypes'
import { categories, attributes } from 'shared/interfaces/products/productsInterface'
import { paymentMethods } from 'shared/interfaces/paymentMethods/methods'
import { conditionsInterface } from 'shared/interfaces/coupons/couponsInterface'

export const menuIcons = {
  STORE: faStore,
  LIST: faListUl,
  PRODUCT: faBoxes,
  PROMOTION: faSearchDollar,
  COUPOM: faReceipt,
  ACCOUNT: faIdBadge,
  CONFIGURATIONS: faCog,
}

export const generalIcons = {
  MANAGER: faIdBadge,
  ADDRESS: faMapMarkerAlt,
  DELIVERY_FEE: faHandHoldingUsd,
  DELIVERY_TYPE: faTruckLoading,
  PAYMENT_TYPE: faMoneyBillWave,

  ARROW_DOWN: faAngleDown,
  ARROW_UP: faAngleUp,
  CLOCK: faClock,
  ARROW_RIGHT: faArrowRight,
  ARROW_LEFT: faArrowLeft,
  CHECKMARK: faCheck,
  USER: faUser,
  PHONE: faPhoneAlt,

  CLOSE: faTimes,

  PRICE: faDollarSign,

  OPENED: faLockOpen,
  CLOSED: faLock,

  ADD: faPlus,
  REMOVE: faMinus,

  DESCRIPTION: faFileAlt,
  TRASH: faTrash,
  CALENDAR: faCalendarAlt,
  CALENDAR_CHECK: faCalendarCheck,

  HORIZONTAL_DOTS: faEllipsisH,
  VERTICAL_DOTS: faEllipsisV,

  CONDITIONS: faFileSignature,

  COUNTER: faStopwatch,
}

export const deliveryIcons = {
  [deliveryTypes.DELIVERY]: faTruck,
  [deliveryTypes.COUNTER_PICKUP]: faHands,
  [deliveryTypes.ON_SPOT_CONSUMPTION]: faStore,
}

export const categoryIcons = {
  [categories.FOOD]: faUtensils,
  [categories.DRINK]: faGlassWhiskey,
  [categories.ALCOOHOLIC]: faWineGlassAlt,
}

export const attributeIcons = {
  [attributes.SIZES]: faRulerHorizontal,
  [attributes.ADDITIONALS]: faPlus,
}

export const conditionIcons = {
  [conditionsInterface.date_limit]: faCalendarMinus,
  [conditionsInterface.distance_limit]: faTachometerAlt,
  [conditionsInterface.price_limit]: faMoneyBill,
  [conditionsInterface.uses_limit]: faStopwatch20,
}

export const paymentIcons = {
  [paymentMethods.CREDIT]: faCreditCard,
  [paymentMethods.DEBIT]: faCreditCard,
  [paymentMethods.PIX]: 'pix',
  [paymentMethods.MONEY]: faDollarSign,
}

export const entityMenuIcons = {
  edit: faEdit,
}

export const groupedIcons = {
  ...menuIcons,
  ...generalIcons,
  ...deliveryIcons,
  ...categoryIcons,
  ...attributeIcons,
  ...paymentIcons,
  ...entityMenuIcons,
  ...conditionIcons,
}

export const customIcons = new Set([paymentMethods.PIX])

export const attributesWithoutQuantity = new Set([attributes.SIZES])

export const getIcon = (iconName) => groupedIcons[iconName] || faBan

// -----
// -----
// TOOLTIPS:

export const tooltips = {
  'credit-card': 'Cartão de crédito',
  'dollar-sign': 'Dinheiro',
  times: 'Fechar',

  edit: 'Editar',

  truck: 'Delivery',
  hands: 'Retirada',
  store: 'Consumo no local',
  [paymentMethods.PIX]: 'Pix',
  trash: 'Deletar',

  utensils: 'Comida',
  'glass-whiskey': 'Bebida',
  'wine-glass-alt': 'Bebida Alcoolica',
  'ellipsis-v': 'Opções',
  'ellipsis-h': 'Opções',

  'money-bill': 'Valor',
  'calendar-minus': 'Data',
  'stopwatch-20': 'Usos',
  'tachometer-alt': 'Distância',
}
