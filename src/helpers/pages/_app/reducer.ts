type HomeRecent = {
    id: string
    tag: string
    type: string
    image: string
}

export type StateUser = {
    pages: {
        home: {
            recent: any
        }
    }
}

export type StateActions = {
    type: string
    payload: HomeRecent | any
}

// const payload = {
//     id: '1',
//     title: 'test',
//     type: 'test',
//     image: 'https://picsum.photos/200/300',
// }

const reducer = (state: StateUser, action: StateActions) => {
    switch (action.type) {
        case 'add_recent':
            return {
                pages: {
                    ...state.pages,
                    home: {
                        recent: (function () {
                            if (
                                state.pages.home.recent.find(
                                    (item: HomeRecent) =>
                                        item.id === action.payload.id
                                )
                            ) {
                                return state.pages.home.recent
                            } else if (state.pages.home.recent.length < 5) {
                                return [
                                    action.payload,
                                    ...state.pages.home.recent,
                                ]
                            } else {
                                return [
                                    action.payload,
                                    ...state.pages.home.recent.pop(),
                                ]
                            }
                        })(),
                    },
                },
            }
            break

        default:
            return state
    }
}
export default reducer
