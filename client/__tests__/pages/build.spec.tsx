import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Build from '@/pages/build'

describe('Mod Three Page render', () => { 
    it('should render page', () => {
        // Running into some trouble with D3 here, need to maybe send in correct context
        render(<Build />)
        
        const buildContainer = screen.getByTestId("build-container")
        expect(buildContainer).toBeVisible()
    })

 })