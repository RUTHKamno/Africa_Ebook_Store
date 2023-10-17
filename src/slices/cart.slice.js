import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api';

const initialState = { cart : [] };

export const fetchCarts = createAsyncThunk(
    'carts/fetchAll',
    async (thunkAPI) => {
      const rep = await API.get('carts');
      return rep.data;
    }
);

export const addToCart = createAsyncThunk(
    'carts/store',
    async (id, thunkAPI) => {
        console.log("thunkAPI",thunkAPI);
      const rep = await API.post("carts/" + id);
      return rep.data;
    }
);

export const deleteCart = createAsyncThunk(
    'carts/delete',
    async (id, thunkAPI) => {
      const rep = await API.delete("carts/" + id);
      return rep.data;
    }
);


const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    getCarts(state) {
      return state.cart; // ca me retourne un tableau vide
    },

  },
  extraReducers: builder => {

    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      console.log("carts get done")
      state.cart = action.payload;
      console.log(state.cart)
    });

    builder.addCase(deleteCart.fulfilled, (state, action) => {
        state.cart = state.cart.filter(singleCart => singleCart.id !== action.payload )
    });

    builder.addCase(addToCart.fulfilled, (state, action) => {
       const  modifiedProduct = action.payload
        // on parcoure d'abord tout le tableau si il y'a un produit dont l'id correspond à 
        //celui de la constante modified product, 
        /**alors on a juste modifié donc on applique
         * le code pour modifier sinon il s'agit d'un produit ajouté donc on 
         * applique l'action pour l'ajout 
         */
        const cartById = state.cart.find((cart) => cart.id === modifiedProduct.id);
        if (cartById) {
            // alors on a trouvé le produit il faut juste le modifier
            state.cart = state.cart.map(
                (cart) => cart.id === modifiedProduct.id ? modifiedProduct : cart
          );
        }else {
            // alors on ajoute le produit au panier
            state.cart = [action.payload, ...state.cart];
        }
    });


  },
});

export const { getCarts } = cartsSlice.actions;
export default cartsSlice.reducer;
