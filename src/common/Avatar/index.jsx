import './index.scss';

const Avatar = ({ src, className }) => {
  return <img src={src} className={`avatar ${className && className}`} alt="avatar" />;
};

export default Avatar;
