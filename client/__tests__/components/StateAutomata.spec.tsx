import { StateAutomata } from "@/components/StateAutomata";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('StateAutomata', () => { 
    it('should render the component', () => {
        const { getByTestId } = render(<StateAutomata />);
        expect(getByTestId('sa-component')).toBeVisible()
        expect(getByTestId('sa-title')).toBeVisible()
        expect(getByTestId('no-input')).toBeVisible()
    })
 })