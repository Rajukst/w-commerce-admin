import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { signInWithEmailAndPassword,} from "firebase/auth";
import auth from "../../../Firebase/firebase.config"
const initialState={
    email: "",
    role: "",
    isLoading: true,
    isError: false,
    error: "",

};

export const loginUser=createAsyncThunk("auth/loginUser", async({email, password})=>{
const data= await signInWithEmailAndPassword(auth, email, password);
return data.user.email;
})


const authSlice=createSlice({
    name: "auth",
    initialState,
    reducers:{
        logOut: (state)=>{
            state.email=""
        },
        setUser: (state, {payload})=>{
            state.email= payload;
            state.isLoading= false;
        },
        toggleLoading:(state)=>{
            state.isLoading=false
        }
    },
    extraReducers:(builder)=>{
        builder
        //this actions are aplicable only for sign in users
        .addCase(loginUser.pending,(state)=>{
            state.isLoading= true;
            state.isError= false;
            state.error=""
        })
        .addCase(loginUser.fulfilled,(state,{payload})=>{
            state.isLoading= false;
            state.isError= false;
            state.error=""
            state.email= payload
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.error= action.error.message
            state.email= ""
        })
 
    }
});
export const {logOut, setUser, toggleLoading}= authSlice.actions
export default authSlice.reducer;