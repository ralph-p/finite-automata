import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ModThree from '@/pages/mod-three'

describe('Mod Three Page render', () => { 
    it('should render page', () => {
        // Running into some trouble with D3 here, need to maybe send in correct context
        render(<ModThree />)
        const inputContainer = screen.getByTestId("mod-three-input-container")
        expect(inputContainer).toBeVisible()
    })

 })