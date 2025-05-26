import s from './NoResultsMessage.module.css';

const NoResultsMessage = () => {
  return (
    <div className={s.noResultsContent}>
      <p className={s.message}>
        <span className={s.partOne}>
          🚙 Your perfect ride isn’t on this path.
        </span>
        <span className={s.partTwo}>Shift the filters and try again!</span>
      </p>
    </div>
  );
};
export default NoResultsMessage;
