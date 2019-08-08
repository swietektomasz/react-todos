import reducer from '../reducer'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../types'

describe('todoReducer', () => {
  it(`should resolve ${ADD_TODO} type`, () => {
    const payload = 'test'
    expect(reducer([], { payload, type: ADD_TODO })).toEqual([payload])
    expect(reducer(undefined, { payload, type: ADD_TODO })).toEqual([payload])
  })

  it(`should resolve ${REMOVE_TODO} type`, () => {
    const payload = 1
    expect(reducer([{ id: 1 }, { id: 2 }], { payload, type: REMOVE_TODO })).toEqual([{ id: 2 }])
    expect(reducer([{ id: 2 }], { payload, type: REMOVE_TODO })).toEqual([{ id: 2 }])
    expect(reducer(undefined, { payload, type: REMOVE_TODO })).toEqual([])
  })

  //TODO add tests for TOGGLE_TODO
})
