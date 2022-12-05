import Async from './Async'
import { render, screen } from '@testing-library/react';

describe('Async', () => {
    test('render Posts', async () => {
       window.fetch = jest.fn();
       window.fetch.mockResolvedValueOnce({
           json: async () => [{id: 'p1', title: 'First post'}],
       });
        render(<Async/>);

        const listelement = await screen.findAllByRole('listitem');
        expect(listelement).not.toHaveLength(0);
    })
})
