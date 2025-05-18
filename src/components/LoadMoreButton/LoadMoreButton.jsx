import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={s.loadMoreBtn} onClick={onClick} type="button">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
