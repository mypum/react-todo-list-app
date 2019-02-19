export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return { ...state, ...payload }

    default:
      return state
  }
}
