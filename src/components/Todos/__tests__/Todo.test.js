import React from 'react'
import renderer from 'react-test-renderer'

import Todo from '../Todo'

describe('<Todo />', () => {
  test('render', () => {
    const defaultProps = {}
    const wrapper = renderer.create(<Todo {...defaultProps} />)

    expect(wrapper).toMatchSnapshot()
  })

  test('on checkbox click calls handleChecking from props', () => {
    const defaultProps = {
      id: 1,
      title: 'test',
      done: false,
      handleChecking: jest.fn(),
    }
    const wrapper = renderer.create(<Todo {...defaultProps} />)
    const root = wrapper.root

    expect(root.findByType('input')).toBeDefined()
    expect(root.findAllByType('label')).toHaveLength(1)

    root.findByType('input').props.onChange()
    expect(defaultProps.handleChecking).toBeCalledWith(defaultProps.id)
  })
})
