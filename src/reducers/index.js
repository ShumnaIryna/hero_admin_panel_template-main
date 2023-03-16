const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}
// heroesLoadingStatus: 'idle'----state when nothing happens
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
//---FILTERS
case 'FILTERS_FETCHING':
    return {
        ...state,
        filtersLoadingStatus: 'loading'
    }
case 'FILTERS_FETCHED':
    return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: 'idle'
    }
case 'FILTERS_FETCHING_ERROR':
    return {
        ...state,
        filtersLoadingStatus: 'error'
    }

//ACTIVE_FILTER
case 'ACTIVE_FILTER_CHANGED':
    return {
        ...state,
        activeFilter: action.payload,
    }

//---HERO_CREATED
        case 'HERO_CREATED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }

//---HERO_DELETED----            
        case 'HERO_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload)
            }
        default: return state
    }
}

export default reducer;