export default ($store) => {
  const getTEMPLATE = () => $store

  const getUserBranches = () => $store.userBranches

  const getFilters = () => $store.filters

  return { getUserBranches, getFilters }
}
