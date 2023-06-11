import { ModThreeInput } from "@/components/ModThreeInput";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('ModThreeInput', () => { 
    it('should render the component', () => {
        const { getByTestId } = render(<ModThreeInput />);
        expect(getByTestId('sa-component')).toBeVisible()
        expect(getByTestId('sa-title')).toBeVisible()
        expect(getByTestId('no-input')).toBeVisible()
    })
 })