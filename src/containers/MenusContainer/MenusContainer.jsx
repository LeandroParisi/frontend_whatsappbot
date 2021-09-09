import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useMenus, useRoot } from 'store'
import { entitiesTypes } from 'interfaces/entities'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { MainPageFilter } from 'components'

const MenusContainer = () => {
  const {
    activateMenu,
    deactivateMenu,
    getAdaptedMenus,
    getAdaptedEditMenus,
    getFilters,
    saveFilters,
    updateMenu,
    getDefaultEntity,
    deleteMenu,
  } = useMenus()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedMenus()

  const adaptedEditEntities = getAdaptedEditMenus()

  const defaultCreateEntity = getDefaultEntity()

  return (
    <>
      <MainPageFilter
        filters={filters}
        saveFilters={saveFilters}
      />
      {getIsLoading()
        ? (
          <ReactLoader />
        )
        : (
          <EntitiesContainer
            entities={adaptedEntities}
            editEntities={adaptedEditEntities}
            createEntity={defaultCreateEntity}
            type={entitiesTypes.menus}
            editRequest={updateMenu}
            activate={activateMenu}
            deactivate={deactivateMenu}
            deleteRequest={deleteMenu}
          />
        )}
    </>
  )
}

export default MenusContainer
