import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow'
import App from './App'

jest.mock('./api/fetchShow');

test('renders show information from API', async () => {
    mockFetchShow.mockResolvedValue({
        
    })
});

