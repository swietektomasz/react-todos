import React from 'react'
import renderer from 'react-test-renderer'

import Todos from '../Todos'

jest.mock('../Todos/Todo', () => () => <div>Todo</div>)

describe('<Todos />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<Todos {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('renders one item', () => {
    const defaultProps = {
      list: [{ id: 0, title: 'test', done: false }],
      updateCheckedTodos: jest.fn(),
    }
    const wrapper = renderer.create(<Todos {...defaultProps} />)
    const instance = wrapper.root

    expect(instance.findByType('div')).toBeDefined()
  })

  test('renders three items', () => {
    const defaultProps = {
      list: [
        { id: 0, title: 'test', done: false },
        { id: 1, title: 'test', done: false },
        { id: 2, title: 'test', done: false },
      ],
      updateCheckedTodos: jest.fn(),
    }
    const wrapper = renderer.create(<Todos {...defaultProps} />)
    const instance = wrapper.root

    expect(instance.findByType('div')).toBeDefined()
    expect(instance.findAllByType('div')).toHaveLength(4)
    const jsonInstance = wrapper.toJSON()
    expect(jsonInstance.children).toHaveLength(3)
  })
})
