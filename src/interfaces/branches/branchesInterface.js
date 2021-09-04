import { deliveryFeeTypes } from 'interfaces/deliveryFees/deliveryFeeTypes'

const branchInterface = {
  id: 'id',
  branchName: 'branchName',
  cityName: 'cityName',
  countryName: 'countryName',
  createdAt: 'createdAt',
  deliveryType: 'deliveryType',
  managerName: 'managerName',
  neighborhood: 'neighborhood',
  postalCode: 'postalCode',
  stateName: 'stateName',
  street: 'street',
  streetComplement: 'streetComplement',
  deliveryFees: 'deliveryFees',
  deliveryTypes: 'deliveryTypes',
  isActive: 'isActive',
  logo: 'logo',
  paymentMethods: 'paymentMethods',
  streetNumber: 'streetNumber',
  openingHours: 'openingHours',
  countryId: 'countryId',
  stateId: 'stateId',
  cityId: 'cityId',
}

export const defaultValues = {
  id: '',
  branchName: '',
  countryName: 'Brazil',
  stateName: 'São Paulo',
  cityName: 'São Paulo',
  createdAt: '',
  managerName: '',
  neighborhood: '',
  postalCode: '',
  street: '',
  streetComplement: '',
  deliveryFees: {
    fees: null,
    type: deliveryFeeTypes.unique,
  },
  deliveryTypes: [],
  isActive: true,
  logo: '',
  paymentMethods: [],
  streetNumber: '',
  openingHours: {
    monday: { hours: [null, null], isOpened: true, overnight: false },
    tuesday: { hours: [null, null], isOpened: true, overnight: false },
    wednesday: { hours: [null, null], isOpened: true, overnight: false },
    thursday: { hours: [null, null], isOpened: true, overnight: false },
    friday: { hours: [null, null], isOpened: true, overnight: false },
    saturday: { hours: [null, null], isOpened: true, overnight: false },
    sunday: { hours: [null, null], isOpened: true, overnight: false },
  },
  countryId: '',
  stateId: '',
  cityId: '',
}

export default branchInterface
