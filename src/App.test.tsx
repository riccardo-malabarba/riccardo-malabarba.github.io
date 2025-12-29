import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main application with hero section', () => {
    render(<App />)
    expect(screen.getByText('Riccardo')).toBeInTheDocument()
    expect(screen.getByText('Malabarba')).toBeInTheDocument()
  })
})