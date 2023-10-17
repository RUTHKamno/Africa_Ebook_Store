import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api';

const initialState = { books: [], currentBook: {}, };

// export const storeBook = createAsyncThunk(
//   'books/store',
//   async (data, thunkAPI) => {
//     console.log(thunkAPI);
//     const rep = await API.post('register', data);
//     return rep.data;
//   }
// );

export const fetchBooks = createAsyncThunk(
    'books/fetchAll',
    async (thunkAPI) => {
      const rep = await API.get('books');
      return rep.data;
    }
);

export const storeBooks = createAsyncThunk(
  'books/store',
  async (data, thunkAPI) => {
    const rep = await API.post('books', data);
    return rep.data;
  }
);

export const deleteBooks = createAsyncThunk(
  'books/delete',
  async (id, thunkAPI) => {
    const rep = await API.delete('books/' + id);
    return rep.data;
  }
);

export const updateBooks = createAsyncThunk(
  'books/update',
  async ({id, data}, thunkAPI) => {
    const rep = await API.put(('books/' + id), data)
    return rep.data;
  }
);

export const fetchBook = createAsyncThunk(
  'books/fetchOne',
  async (id, thunkAPI) => {
    const rep = await API.get('books/' + id)
    return rep.data;
  }
);


const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks(state) {
      return state.books; // ca me retourne un tableau vide
    },

  },
  extraReducers: builder => {

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      console.log("books get done")
      state.books = action.payload;
    });

    builder.addCase(deleteBooks.fulfilled, (state, action) => {
      
      state.books = state.books.filter(book => book.id !== action.payload )
    });

    builder.addCase(updateBooks.fulfilled, (state, action) => {
      // Chercher le livre modifié dans le payload
      const modifiedBook = action.payload;
      // Mise à jour du state avec les livres modifiés et non modifiés
      state.books = state.books.map((book) =>
        book.id === modifiedBook.id ? modifiedBook : book
      );
    });

    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.currentBook = action.payload
    });

    builder.addCase(storeBooks.fulfilled, (state, action) => {
      state.books = [action.payload, ...state.books];
    });

  },
});

export const { getBooks } = booksSlice.actions;
export default booksSlice.reducer;
