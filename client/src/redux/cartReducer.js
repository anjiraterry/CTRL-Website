import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle", // idle, loading, succeeded, failed
  error: null,
  isReset: false,
};

// Async Thunks for backend synchronization

// Fetch cart items
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
 
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/api/users/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Add item to cart
export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ token, item, user }, { rejectWithValue }) => {
    try {
      // Include the user_id in the request payload
      const itemWithUser = { ...item, user_id: user.id }; // Assuming user.id holds the user ID
      const response = await axios.post(
        "http://localhost:8000/api/users/cartUpdate",
        itemWithUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);


// Remove item from cart
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async ({ token, id, user }, { rejectWithValue }) => {
    try {
      const itemWithUser = { id, user_id: user.id }; 

      
      const response = await axios.delete(
        `http://localhost:8000/api/users/cart/${id}`,
        {
          headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json" 
          },
          data: itemWithUser 
        }
      );
      return id; 
    } catch (err) {
      console.error("Error removing item from cart:", err);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async ({ token, user }, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/cart/clear`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { user_id: user.id },
      });
      return true; 
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Slice definition
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    // Fetch Cart Items
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; // Populate products from API
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Add Item to Cart
    builder
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const item = state.products.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity += action.payload.quantity;
        } else {
          state.products.push(action.payload);
        }
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.error = action.payload;
      });

        builder
          .addCase(clearCart.fulfilled, (state) => {
            state.products = []; // Clear the cart in Redux state
          })
          .addCase(clearCart.rejected, (state, action) => {
            state.error = action.payload;
          });
    
  },
});

// Action creators for synchronous actions


// Action creators are generated for each case reducer function
export const { resetCart } = cartSlice.actions;

export default cartSlice.reducer;
