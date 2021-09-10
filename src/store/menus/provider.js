import api from 'services/api'
import getRoute from 'services/config'

const fetchUserMenus = (query = '') => async () => {
  const { url, method } = getRoute('menus', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

const activateMenu = (id) => async () => {
  const { url, method } = getRoute('menus', 'activate')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const deactivateMenu = (id) => async () => {
  const { url, method } = getRoute('menus', 'deactivate')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const updateMenu = ({ id, body }) => async () => {
  const { url, method } = getRoute('menus', 'updateOne')

  const response = await api({
    url: `${url}/${id}`,
    method,
    body,
  })

  return response
}

const deleteMenu = (id) => async () => {
  const { url, method } = getRoute('menus', 'deleteOne')

  const response = await api({
    url: `${url}/${id}`,
    method,
  })

  return response
}

const createMenu = (body) => async () => {
  const { url, method } = getRoute('menus', 'create')

  const response = await api({
    url,
    method,
    body,
  })

  return response
}

export {
  fetchUserMenus,
  createMenu,
  activateMenu,
  deactivateMenu,
  updateMenu,
  deleteMenu,
}
