import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import mockFetch from "../../api/fetchShow"
import { egShowData } from './Show.test';

jest.mock("../../api/fetchShow");

test('renders without errors with no props', async () => {
    render(<Display/>);
});

test('renders Show component when the button is clicked ', async () => {

    mockFetch.mockResolvedValueOnce(egShowData);
    render(<Display/>);;
    userEvent.click(screen.getByRole("button"));
    
    const show = await screen.findByTestId("show-container");
    expect(show).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', () => { });
