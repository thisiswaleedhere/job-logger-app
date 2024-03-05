import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JOBS_URL } from "../utils/constants";

const initialState = {
    loading: false,
    count: 0,
    jobs: [],
    success: false,
    error: null,
    cuderror: null,
    editJob: null
}

const jobSlice = createSlice({
    name: "job",
    initialState: initialState,
    reducers: {
        editJobAction: (state, action) => {
            state.editJob = action.payload
        },
        cudErrorDisplay: (state, action) => {
            state.cuderror = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getAllJobsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(getAllJobsAsync.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload?.msg) {
                    state.error = action.payload.msg;
                    state.success = false;
                }
                else {
                    state.count = action.payload?.count;
                    state.jobs = action.payload?.jobs;
                }
            })
            .addCase(getAllJobsAsync.rejected, (state) => {
                state.loading = false;
                state.success = true;
                state.error = "Failed to fetch your jobs"
            })
    }
})

export const getAllJobsAsync = createAsyncThunk(
    "job/getAllJobsAsync",
    async (userToken) => {
        try {
            let headers = { "Authorization": `Bearer ${userToken}` };

            const response = await fetch(JOBS_URL, {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            })

            const result = await response.json()
            // console.log('jobs', result)
            return result
        } catch (error) {
            console.log('error', error)
        }

    })


export default jobSlice.reducer;
export const { editJobAction, cudErrorDisplay } = jobSlice.actions;