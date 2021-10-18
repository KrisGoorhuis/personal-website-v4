import { createSlice } from "@reduxjs/toolkit"
import _ from 'lodash'


interface BookDataState {

}

const initialBoardDataState: BookDataState = {

}

const bookDataSlice = createSlice({
   name: "BoardSlice",
   initialState: initialBoardDataState,
   reducers: {

   },
})

export const {

} = bookDataSlice.actions

export default bookDataSlice
