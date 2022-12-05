import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello Word as a Text', () => {
        render(<Greeting/>);
        const hellowWord = screen.getByText('Hello Word');
        expect(hellowWord).toBeInTheDocument();
    });

    test('Not clicked', () => {
        render(<Greeting/>);
        const output = screen.getByText('It\'s good', {exact: false});
        expect(output).toBeInTheDocument();
    });

    test('Is Clicked', () => {
        render(<Greeting/>);

        const buttonevent = screen.getByRole('button');
        userEvent.click(buttonevent);


        const output = screen.getByText('Changed', {exact: true});
        expect(output).toBeInTheDocument();
    });

    test('not render after the click', () => {
        render(<Greeting/>);

        const buttonevent = screen.getByRole('button');
        userEvent.click(buttonevent);

        const output = screen.queryByText('It\'s good', {exact: false});
        expect(output).toBeNull();
    });
});
