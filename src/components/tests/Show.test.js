import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

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

test('renders without errors', () => {
    render(<Show show={egShowData} selectedSeason={"none"}/>);
});

test('renders Loading component when prop show is null', () => { });

test('renders same number of options seasons are passed in', () => { });

test('handleSelect is called when an season is selected', () => { });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });
