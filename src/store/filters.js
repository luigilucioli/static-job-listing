import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const getFiltersModel = ({ id }) => ({
  id,
  isOpen: false,
})

const store = (set) => ({
  filters: [],
  addFilters: (payload) => {
    set(
      (state) => {
        if (!state.filters.includes(payload)) {
          return ({
            filters: [...state.filters, payload]
          })
        }
      },
      false,
      'FILTERS/ADD_FILTERS',
    )
  },
  removeFilters: (payload) => {
    set(
      (state) => {
        if (state.filters.includes(payload)) {
          return ({
            filters: state.filters.filter(item => item !== payload)
          })
        }
      },
      false,
      'FILTERS/REMOVE_FILTERS',
    )
  },
  removeAllFilters: () => {
    set(
      () => ({ filters: [] }),
      false,
      'FILTERS/REMOVE_ALL_FILTERS',
    )
  },
})

const useFiltersStore = create(devtools(store, { name: 'Filters Store' }))

export default useFiltersStore
