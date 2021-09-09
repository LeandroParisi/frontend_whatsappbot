import {
  activateEntityFactory, deactivateEntityFactory, saveFiltersFactory, setState,
} from 'store/sharedMethods/actions'
import { toast } from 'react-toastify'
import validationFactory from 'store/sharedMethods/validationFactory'
import * as providers from './provider'
import * as sharedProviders from '../sharedMethods/providers'
// import { normalizeEditPayload } from './serializers'
import { editValidations, errorsLib } from './validations'
import { normalizeEditPayload } from './serializers'

export default (store, setStore, useRoot) => {
  const { errorHandler } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchUserMenus = async (query = '') => {
    const { response } = await errorHandler(providers.fetchUserMenus(query))

    if (response) {
      setField('userMenus', response)
    }
  }

  const fetchUserBranches = async () => {
    const { response } = await errorHandler(sharedProviders.fetchUserBranches())

    if (response) {
      setField('userBranches', response)
    }
  }

  const fetchUserProducts = async (query = '') => {
    const { response } = await errorHandler(sharedProviders.fetchUserProducts(query))

    if (response) {
      setField('userProducts', response)
    }
  }

  const updateMenu = async ({ id, body }) => {
    console.log({ body })
    const { hasErrors, errors } = await validationFactory(body, editValidations, errorsLib)

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')

      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(providers.updateMenu(
      { id, body: normalizedBody },
    ))

    console.log({ response })

    if (response) {
      await fetchUserMenus()
    }

    return { hasErrors }
  }

  const deleteMenu = async (id) => {
    const { response } = await errorHandler(providers.deleteMenu(id))

    if (response) {
      await fetchUserMenus()
    }
  }

  const activateMenu = activateEntityFactory(setField, errorHandler, providers.activateMenu, 'userMenus', store)

  const deactivateMenu = deactivateEntityFactory(setField, errorHandler, providers.deactivateMenu, 'userMenus', store)

  return {
    setField,
    saveFilters,
    fetchUserMenus,
    activateMenu,
    deactivateMenu,
    fetchUserProducts,
    fetchUserBranches,
    updateMenu,
    deleteMenu,
  }
}
