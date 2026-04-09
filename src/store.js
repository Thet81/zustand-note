// store.js

import {create} from 'zustand'

const useFeedBackStore = create(set => ({
	feedback : {
		good : 0,
		neutral : 0,
		bad : 0,
		total : 0
	},
	actions : {
		good : ()=> set(state => ({feedback : {...state.feedback, good :state.feedback.good + 1 ,total : state.feedback.total + 1}})),
		bad : ()=> set(state => ({feedback : {...state.feedback, bad : state.feedback.bad + 1 , total : state.feedback.total + 1}})),
		neutral : ()=> set(state => ({feedback : {...state.feedback, neutral : state.feedback.neutral + 1 , total : state.feedback.total + 1}}))
	}
}))

 export const useFeedBack = ()=> useFeedBackStore(state => state.feedback)
 export const useFeedBackActions = () => useFeedBackStore(state => state.actions)