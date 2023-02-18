import React from 'react';
import { render, fireEvent, screen, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import mockFetch from "../../api/fetchShow"

jest.mock("../../api/fetchShow");

const egShowData = {
    name: "The Office",
    summary: "The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees at the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company.",
    seasons: [
        {id: 0, name: "Season 1", episodes: []},
        {id: 1, name: "Season 2", episodes: []},
        {id: 2, name: "Season 3", episodes: []},
        {id: 3, name: "Season 4", episodes: []},
        {id: 4, name: "Season 5", episodes: []},
        {id: 5, name: "Season 6", episodes: []},
        {id: 6, name: "Season 7", episodes: []},
        {id: 7, name: "Season 8", episodes: []},
        {id: 8, name: "Season 9", episodes: []}
    ]
}

test('renders without errors with no props', async () => {
    render(<Display/>);
});

test('renders Show component when the button is clicked ', async () => {
    render(<Display/>);
    mockFetch.mockResolvedValueOnce(egShowData);
    fireEvent.click(screen.getByRole("button"));
    await wait();
    expect(screen.getByTestId("show-container")).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', () => { });
