const icons = {
  back: {
    src: '/icons/back',
    alt: 'Back',
  },
  home: {
    src: '/icons/home',
    alt: 'Home',
  },
  bag: {
    src: '/icons/bag',
    alt: 'Bag',
  },
  profile: {
    src: '/icons/profile',
    alt: 'Profile',
  },
};

export default function Icon({ icon, onClick, active }) {
  const src = `${icons[icon].src}Outline.svg`;
  const activeSrc = `${icons[icon].src}.svg`;
  return (
    <div onClick={onClick}>
      <img {...icons[icon]} src={active ? activeSrc : src} />
    </div>
  );
}
