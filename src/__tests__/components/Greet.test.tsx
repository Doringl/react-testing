import { render, screen } from '@testing-library/react'
import Greet from '../../components/Greet/Greet'

test('Greet component renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
})

test('Greet component renders with a name', () => {
    render(<Greet name='Sefa' />)
    const textElement = screen.getByText(/Hello Sefa/)
    expect(textElement).toBeInTheDocument()
})
