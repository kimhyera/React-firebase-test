import React, { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
	goods: [
		{
			id: '252372',
			sGoodsName: '음식이름 ',
			sSellStatus: '2',
			sOrdStatus: '2',
			iSellPrice: '10000',
			iaccumulate: '750',
		},
	],
};

// create context
export const GoodsContext = createContext(initialState);

// create provider
const GoodsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	// Action
	const removeUser = (id) => {
		dispatch({
			type: 'REMOVE_USER',
			payload: id,
		});
	};

	const addUser = (goods) => {
		dispatch({
			type: 'ADD_USER',
			payload: goods,
		});
	};

	const editUser = (goods) => {
		dispatch({
			type: 'EDIT_USER',
			payload: goods,
		});
	};
	return (
		<GoodsContext.Provider
			value={{
				goods: state.goods,
				removeUser: removeUser,
				addUser: addUser,
				editUser: editUser,
			}}
		>
			{children}
		</GoodsContext.Provider>
	);
};

export default GoodsProvider;
