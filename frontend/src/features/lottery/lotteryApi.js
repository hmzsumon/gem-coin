import { apiSlice } from '../api/apiSlice';

export const lotteryApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getLotteries: builder.query({
			query: (limit) => `/tickets?limit=${limit}`,
			providesTags: (result) => [...(result?.lottery?.tags ?? ['Lottery'])],
		}),

		// buy ticket
		buyTicket: builder.mutation({
			query: (id) => ({
				url: `/ticket/buy/${id}`,
				method: 'POST',
				body: id,
			}),
			invalidatesTags: ['Lottery'],
		}),
	}),
});

export const { useGetLotteriesQuery, useBuyTicketMutation } = lotteryApi;
