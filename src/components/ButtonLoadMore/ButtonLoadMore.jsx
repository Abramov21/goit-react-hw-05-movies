export const ButtonLoadMore = ({ setPage }) => {
  return (
    <button
      onClick={() => {
        console.log(123);
        setPage(prev => prev + 1);
      }}
    >
      load more
    </button>
  );
};
