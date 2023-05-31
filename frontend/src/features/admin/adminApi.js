import { apiSlice } from '../api/apiSlice';

export const adminApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// Get company info
		getCompanyAdmin: builder.query({
			query: () => '/admin/company',
			providesTags: ['Company'],
		}),

		// get all users
		allUsers: builder.query({
			query: () => '/users',
			providesTags: ['Users'],
		}),

		// get single user by id
		getSingleUserAdmin: builder.query({
			query: (id) => `/admin/user/${id}`,
			providesTags: ['Users'],
		}),
		// delete user
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `/admin/user/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Users'],
		}),

		// get all prices
		getAllPrices: builder.query({
			query: () => '/admin/prices',
			providesTags: ['Prices'],
		}),

		// cerate new price
		createPrice: builder.mutation({
			query: (body) => ({
				url: '/create-price',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Prices'],
		}),
	}),
});

export const {
	useGetCompanyAdminQuery,
	useAllUsersQuery,
	useGetSingleUserAdminQuery,
	useCreatePriceMutation,
	useDeleteUserMutation,
} = adminApi;
