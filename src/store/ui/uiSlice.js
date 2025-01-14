import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isModalOpen: false,
    seccion: 'home'
  },
  reducers: {
    home: (state) => {
      state.isModalOpen = false
      state.seccion = 'home'
    },
    conocimientos: (state) => {
      state.isModalOpen = false
      state.seccion = 'conocimientos'
    },
    proyectos: (state) => {
      state.isModalOpen = false
      state.seccion = 'proyectos'
    },
    trayectoria: (state) => {
      state.isModalOpen = false
      state.seccion = 'trayectoria'
    },
    contacto: (state) => {
      state.isModalOpen = true
      state.seccion = 'contacto'
    },
  },
})

// Action creators are generated for each case reducer function
export const { home, conocimientos, proyectos, trayectoria, contacto } = uiSlice.actions