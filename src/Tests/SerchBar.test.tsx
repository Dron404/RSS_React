import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import SearchBar from '../components/SerchBar';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('Search bar', () => {
  it('Shold save value in local storge', async () => {
    const { unmount } = render(
      <Provider store={store}>
        <SearchBar InputHeandlet={(value) => value} isLoading={false} error={undefined} />
      </Provider>
    );
    const testValue = 'Hello Test';

    let input = screen.getByPlaceholderText<HTMLInputElement>('Enter a character name');
    await userEvent.type(input, testValue);

    unmount();
    render(
      <Provider store={store}>
        <SearchBar InputHeandlet={(value) => value + 1} isLoading={false} error={undefined} />
      </Provider>
    );

    input = screen.getByPlaceholderText('Enter a character name');

    expect(input.value).toBe(testValue);
  });
});
