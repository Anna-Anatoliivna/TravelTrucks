import css from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={css.footer}>
      <p>&copy; {currentYear} TravelTrucks. All rights reserved.</p>
      <p>
        Developed by{' '}
        <a
          href="https://github.com/Anna-Anatoliivna/TravelTrucks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anna Ivanova
        </a>
      </p>
    </div>
  );
};

export default Footer;
