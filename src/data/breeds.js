/*
This file sets up the Breeds context.
I think this approach may be a bit overkill for fetching and storing an array,
but I wanted to keep the logic similar to the pictures context for future ease of development.
I chose to use the fetch api rather than some other library,
since the requests this makes are simple get requests and did not need any extra configuration.
I also recognize that api urls and any other secrets should be hidden in appropriate environment
variables for security reasons, but I saw no security concerns here as it was only getting
pictures of dogs and a list of dog breed names.
*/

import * as React from 'react';

const BreedContext = React.createContext();

function useBreeds() {
  const context = React.useContext(BreedContext);

  if (!context) {
    throw new Error('useBreed must be used within a BreedProvider');
  }

  return context;
}

function BreedProvider(props) {
  const [breeds, setBreeds] = React.useState([]);
  const value = React.useMemo(() => [breeds, setBreeds], [breeds]);

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          setBreeds(Object.keys(res.message));
        } else {
          throw res;
        }
      })
      .catch((error) => {
        console.error('Error Fetching Breeds: ', error);
        throw error;
      });
  }, []);

  return <BreedContext.Provider value={value} {...props} />;
}

export { BreedProvider, useBreeds };
