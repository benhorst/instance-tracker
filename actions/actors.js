import * as Types from '../constants/ActionTypes'
import * as ActorTypes from '../constants/ActorTypes'

export function addActor(type, name) {
  return { type: Types.ADD_ACTOR, name: name, actorType: type}
}

export function removeActor(id) {
  return { type: Types.REMOVE_ACTOR, id: id }
}

