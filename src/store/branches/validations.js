import branchInterface from 'interfaces/branches/branchesInterface'
// import { validateCep } from 'store/sharedMethods/providers'
import validateCepApi from 'cep-promise'
import { deliveryFeeTypes } from 'interfaces/deliveryFees/deliveryFeeTypes'
import { isNotEmpty, isNumber, setNotEmpty } from '../sharedMethods/validations'

const validateCep = async (cep) => {
  try {
    await validateCepApi(cep)
    return true
  } catch (error) {
    return false
  }
}

const validateDeliveryFees = async ({ fees, type: { id } }) => {
  if (id === deliveryFeeTypes.unique) {
    return !!fees.length && isNumber(fees)
  }
  if (id === deliveryFeeTypes.radius) {
    if (!fees.length) return false
    return fees.every(([distance, value]) => (
      distance > 0 && value >= 0 && isNumber(distance) && isNumber(value)))
  }
}

export const errorsLib = {
  [branchInterface.postalCode]: 'CEP inválido',
  [branchInterface.countryName]: 'Favor selecionar um país',
  [branchInterface.stateName]: 'Favor selecionar um estado',
  [branchInterface.cityName]: 'Favor selecionar uma cidade',
  [branchInterface.deliveryFees]: 'Favor definir ao menos um valor',
  [branchInterface.branchName]: 'Favor definir o nome para a filial',
  [branchInterface.managerName]: 'Favor definir o nome do gerente',
  [branchInterface.neighborhood]: 'Favor definir um bairro',
  [branchInterface.street]: 'Favor definir uma rua',
  [branchInterface.deliveryTypes]: 'Favor definir ao menos um tipo de entrega',
  [branchInterface.paymentMethods]: 'Favor definir ao menos um método de pagamento',
  [branchInterface.streetNumber]: 'Favor definir um número',
}

export const editValidations = {
  [branchInterface.branchName]: (branchName) => isNotEmpty(branchName),
  [branchInterface.managerName]: (branchName) => isNotEmpty(branchName),

  [branchInterface.countryName]: ({ id }) => id > 0,
  [branchInterface.stateName]: ({ id }) => id > 0,
  [branchInterface.cityName]: ({ id }) => id > 0,
  [branchInterface.postalCode]: validateCep,
  [branchInterface.neighborhood]: (branchName) => isNotEmpty(branchName),
  [branchInterface.street]: (branchName) => isNotEmpty(branchName),
  [branchInterface.streetNumber]: (branchName) => isNotEmpty(branchName),

  [branchInterface.deliveryFees]: validateDeliveryFees,
}

export const createValidations = {
  ...editValidations,
  [branchInterface.deliveryTypes]: (deliveryType) => setNotEmpty(deliveryType),
  [branchInterface.paymentMethods]: (paymentMethod) => setNotEmpty(paymentMethod),
}
