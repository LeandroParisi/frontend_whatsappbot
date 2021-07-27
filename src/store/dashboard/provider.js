import api from 'services/api'
import getRoute from 'services/config'

const fetchUserBranches = async () => {
  const { url, method } = getRoute('branches', 'findAll')

  const query = '?columns=id,isActive,managerName,branchName'

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

const fetchBranchOrders = (query) => async () => {
  const { url, method } = getRoute('orders', 'findAll')

  const response = await api({
    url: `${url}${query}`,
    method,
  })
  return response
}

const updateOrder = ({ body, id }) => async () => {
  const { url, method } = getRoute('orders', 'updateOne')

  const endpoint = `${url}/${id}`

  const response = await api({
    body, url: endpoint, method,
  })
  return response
}

export { fetchUserBranches, fetchBranchOrders, updateOrder }
