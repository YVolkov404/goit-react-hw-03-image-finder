import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      width="44"
      height="44"
      radius="48"
      color="#4c4c6d"
      ariaLabel="watch-loading"
      wrapperStyle={{
        marginRight: 50,
      }}
      wrapperClassName=""
    />
  );
};
