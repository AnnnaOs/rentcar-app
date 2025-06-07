import Icons from '../../assets/icons.svg';

const Icon = ({ name, className }) => (
  <svg className={className} aria-hidden="true">
    <use href={`${Icons}#${name}`} />
  </svg>
);

export default Icon;
