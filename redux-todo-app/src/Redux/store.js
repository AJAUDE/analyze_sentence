import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
})

export default store