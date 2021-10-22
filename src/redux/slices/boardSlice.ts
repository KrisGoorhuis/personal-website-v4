import { createSlice } from "@reduxjs/toolkit"


interface BookDataState {

}

const initialBoardDataState: BookDataState = {

}

const bookDataSlice = createSlice({
   name: "BoardSlice",
   initialState: initialBoardDataState,
   reducers: {
      placeholder: () => {}
   },
})

export const {
   placeholder
} = bookDataSlice.actions

export default bookDataSlice
