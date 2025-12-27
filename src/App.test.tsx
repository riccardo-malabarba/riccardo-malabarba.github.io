import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main application with hero section', () => {
    render(<App />)
    expect(screen.getByText('Head of')).toBeInTheDocument()
    expect(screen.getByText('Data & AI')).toBeInTheDocument()
  })
})