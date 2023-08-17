import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getBooks: builder.query({
          query:()=> '/books',
        }),
    
        getSingleBook: builder.query({
          query:(id)=> `/book/${id}`,
        }),
    
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
    
      })
})

export const {useGetBooksQuery, useGetSingleBookQuery, usePostCommentMutation, useGetCommentQuery} = bookApi;
