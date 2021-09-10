import api from 'services/api'
import getRoute from 'services/config'

const fetchCategories = () => async () => {
  const { url, method } = getRoute('products', 'categories')

  const response = await api({
    url,
    method,
  })

  return response
}

const fetchUserProducts = (query = '') => async () => {
  const { url, method } = getRoute('products', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

export { fetchCategories, fetchUserProducts }
