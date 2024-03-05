import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_URL } from "../utils/constants";

const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.userToken = action.payload;
        },
        removeUser: () => {
            return {
                loading: false,
                userInfo: null,
                userToken: null,
                error: null,
                success: false,
            }
        },
        clearError: (state) => {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload?.msg) {
                    state.error = action.payload.msg;
                    state.success = false;
                }
                else {
                    console.log(action.payload)
                    state.userInfo = action.payload?.user?.name;
                    state.userToken = action.payload?.token;
                }
            })
            .addCase(loginAsync.rejected, (state) => {
                state.loading = false;
                state.success = true;
                state.error = "Authentication failed"
            })
            .addCase(createUserAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload?.msg) {
                    state.error = action.payload.msg;
                    state.success = false;
                }
                else {
                    console.log(action.payload)
                    state.userInfo = action.payload?.user?.name;
                    state.userToken = action.payload?.token;
                }
            })
            .addCase(createUserAsync.rejected, (state) => {
                state.loading = false;
                state.success = true;
                state.error = "Registration failed"
            })
    }
})

export const loginAsync = createAsyncThunk(
    "user/loginAsync",
    async (raw) => {
        try {
            const response = await fetch(`${AUTH_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: raw,
                redirect: 'follow'
            });
            const result = await response.json()
            // console.log('result', result)
            return result;

        } catch (error) {
            console.log('error', error)
        }

    }
)

export const createUserAsync = createAsyncThunk(
    "user/createUserAsync",
    async (newUser) => {
        try {
            const response = await fetch(`${AUTH_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: newUser,
                redirect: 'follow'
            });
            const result = await response.json()
            // console.log('result', result)
            return result;

        } catch (error) {
            console.log('error', error)
        }

    }
)

export default userSlice.reducer;
export const { addUser, removeUser, clearError } = userSlice.actions;