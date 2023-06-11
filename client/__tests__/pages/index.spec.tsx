import React from 'react'
import {render, screen} from '@testing-library/react'
import Home from '@/pages'
import '@testing-library/jest-dom'

describe('Landing Page render', () => { 
    it('should render page', () => {
        render(<Home />)
        const cards = screen.getByTestId("cards")
        expect(cards).toBeVisible()
    })

 })