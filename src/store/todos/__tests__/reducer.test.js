import reducer from '../reducer'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../types'

const initialReducer = {
  nodes: [],
  byId: {},
}

describe('todoReducer', () => {
  it(`should resolve ${ADD_TODO} type`, () => {
    const payload = { title: 'test', description: 'test', id: 1, done: false }

    expect(reducer(initialReducer, { payload, type: ADD_TODO })).toEqual({
      byId: {},
      nodes: [payload],
    })
  })

  it(`should resolve ${REMOVE_TODO} type`, () => {
    const payload = { title: 'test', description: 'test', id: 1, done: false }

    expect(
      reducer(
        {
          ...initialReducer,
          nodes: [
            { title: 'test', description: 'test', id: 1, done: false },
            { title: 'test', description: 'test', id: 2, done: false },
          ],
        },
        { payload, type: REMOVE_TODO },
      ),
    ).toEqual({
      ...initialReducer,
      nodes: [{ title: 'test', description: 'test', id: 2, done: false }],
    })

    expect(
      reducer(
        { ...initialReducer, nodes: [{ title: 'test', description: 'test', id: 2, done: false }] },
        {
          payload,
          type: REMOVE_TODO,
        },
      ),
    ).toEqual({
      ...initialReducer,
      nodes: [{ title: 'test', description: 'test', id: 2, done: false }],
    })

    expect(reducer(initialReducer, { payload, type: REMOVE_TODO })).toEqual(initialReducer)
  })
})
