import App from './App'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'

describe('App Tests', () => {
  it('Basic Render Tests', async () => {
    render(<App />)

    // await userEvent.click(screen.getByRole('button', { name: 'click' }))
  })
})
