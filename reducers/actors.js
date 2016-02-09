import { ADD_ACTOR, INSERT_ACTOR, DELETE_ACTOR, UPDATE_ACTOR } from '../constants/ActionTypes'

const initialState = []

export default function actors(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTOR:
      return [
        {
          _id: id(),
          actorType: action.actorType,
          name: action.name
        },
        ...state
      ]

    case INSERT_ACTOR:
      return [
        action.actor,
        ...state
      ]

    case DELETE_ACTOR:
      return state.filter(actor =>
        actor._id !== action.id
      )

    case UPDATE_ACTOR:
      return state.map(actor =>
        actor._id === action.actor._id ?
          action.actor :
          actor
      )

    default:
      return state
  }
}

function id() {
  return Math.random().toString(36).substring(7);
}
