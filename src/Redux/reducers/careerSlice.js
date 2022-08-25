import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    vacancies: []
}

export const careerSlice = createSlice({
    name: 'careers',
    initialState,
    reducers: {
        setVacancy: (state, action) =>{
            state.vacancies = action.payload
        }
    }
})

export const { setVacancy } = careerSlice.actions

export default careerSlice.reducer