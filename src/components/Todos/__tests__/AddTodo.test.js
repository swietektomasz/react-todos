import React from 'react'
import renderer from 'react-test-renderer'

import { AddTodo } from '../AddTodo'

const getWrapper = defaultProps => {
  const wrapper = renderer.create(<AddTodo {...defaultProps} />)

  return {
    wrapper,
    instance: wrapper.getInstance(),
    root: wrapper.root,
    json: wrapper.toJSON(),
  }
}

describe('<AddTodo />', () => {
  test('render', () => {
    const defaultProps = {
      addTodo: jest.fn(),
    }
    const { wrapper, root } = getWrapper(defaultProps)

    expect(wrapper).toMatchSnapshot()
    expect(root.findByType('input')).toBeDefined()
    expect(root.findByType('button')).toBeDefined()
  })

  test('input text', () => {
    const defaultProps = {
      addTodo: jest.fn(),
    }
    const { json, instance } = getWrapper(defaultProps)
    const insanceState = instance.state

    expect(json.children[0].props.value).toBe(insanceState.text)
  })

  test('calls addTodo on _handleSubmit', () => {
    const defaultProps = {
      addTodo: jest.fn(),
    }
    const { json, instance } = getWrapper(defaultProps)
    console.log(instance)
    const insanceState = instance.state
    instance._handleSubmit()
    expect(defaultProps.addTodo).toBeCalledWith('')

    instance._handleInputChange({ target: { value: '123' } })
    instance._handleSubmit()
    expect(defaultProps.addTodo).toBeCalledWith('123')

    expect(json.children[0].props.value).toBe(insanceState.text)
  })
})
