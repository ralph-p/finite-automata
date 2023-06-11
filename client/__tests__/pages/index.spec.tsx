import React from 'react'
import {render, screen} from '@testing-library/react'
import Home from '@/pages'
import '@testing-library/jest-dom'

describe('Landing Page render', () => { 
    it('should render page', () => {
        render(<Home />)
        const header = screen.getAllByRole('heading')
        const banner = screen.getByTestId("banner")
        const cards = screen.getByTestId("cards")
        expect(header[0]).toHaveTextContent("Finite Automata")
        expect(banner).toBeVisible()
        expect(cards).toBeVisible()
    })

 })