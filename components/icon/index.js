const icons = {
  back: {
    src: '/icons/back.svg',
    alt: 'Back',
  },
};

export default function Icon({ icon, onClick }) {
  return (
    <div onClick={onClick}>
      <img {...icons[icon]} />
    </div>
  );
}
