import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todoapi"],
    endpoints: (builder) => {
        return {
            gettodos: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },

                providesTags: ["todoapi"]
            }),
            addtodo: builder.mutation({
                query: userData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: userData
                    }
                },

                invalidatesTags: ["todoapi"]
            }),
            updetetodo: builder.mutation({
                query: todoData => {
                    return {
                        url: `/${todoData._id}`,
                        method: "UPDETE",
                        body: todoData
                    }
                },
                invalidatesTags: ["todoapi"]
            }),
            deletetodo: builder.mutation({
                query: id => {
                    return {
                        url: `/${id}`,
                        method: "DELETE",
                        // body: userData
                    }
                },
                invalidatesTags: ["todoapi"]
            }),

        }
    }
})

export const {
    useget
} = todoApi
