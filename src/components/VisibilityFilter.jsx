// VisibilityFilter.jsx
import {useNoteActions} from '../store'

const VisibilityFilter = ()=> {
	const {setFilter} = useNoteActions()
	return (
		<div>
			<input
				type="radio"
				name = "filter"
				onChange={()=>setFilter('ALL')}
			/>
			all
				<input
				type="radio"
				name = "filter"
				onChange={()=>setFilter('important')}
			/>
			important
				<input
				type="radio"
				name = "filter"
				onChange={()=>setFilter('nonimportant')}
			/>
			unimportant
		</div>
	)
}

export default VisibilityFilter