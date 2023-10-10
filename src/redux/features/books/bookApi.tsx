import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getBooks: builder.query({
          query:()=> '/books',
        }),

        postBook: builder.mutation({
          query:({data})=>({
            url: '/book',
            method: 'POST',
            body: data,
          }),
          // invalidatesTags:['books refetch']
        }),
    
        getSingleBook: builder.query({
          query:(id)=> `/book/${id}`,
        }),

        //for update book
        editBook: builder.query({
          query:(id)=> `/book/${id}`,
        }),

        updateBook: builder.mutation({
          query:({data})=>({
            url: '/book',
            method: 'PATCH',
            body: data,
          }),
          // invalidatesTags:['books refetch']
        }),

        //end update book
    
        postComment: builder.mutation({
          query:({id, data})=>({
            url: `/comment/${id}`,
            method: 'POST',
            body: data,
          }),
          invalidatesTags:['comments refetch']
        }),
    
        getComment: builder.query({
          query:(id)=> `/comment/${id}`,
          providesTags:['comments refetch'],
        }),

           // New endpoint for deleting a product
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE',
      }),
      // Optionally, you can add invalidation logic for any affected queries here
    }),
    
      })
})

export const {useGetBooksQuery, usePostBookMutation, useGetSingleBookQuery, useEditBookQuery, useUpdateBookMutation, usePostCommentMutation, useGetCommentQuery, useDeleteBookMutation} = bookApi;
