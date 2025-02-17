const initialState = {
  isOpen: false,
  type: null,
  size: 'md',
  props: {},
  onAction: null,
  onClose: null
}

export const createModalSlice = (set) => ({
  ...initialState,
  openModal: (params) => set({ ...params, isOpen: true }),
  closeModal: () => set(initialState)
})
