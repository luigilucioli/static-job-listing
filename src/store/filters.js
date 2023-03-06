import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

/*------------------------------
To look at the store's changes, open the inspect mode redux tab
------------------------------*/
const store = (set) => ({
  /*------------------------------
  Filters initial state
  ------------------------------*/
  filters: [],
  /*------------------------------
  Action to add filters
  ------------------------------*/
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
  /*------------------------------
  Action to remove filters
  ------------------------------*/
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
  /*------------------------------
  Action to remove all filters
  ------------------------------*/
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
