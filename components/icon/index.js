const icons = {
  back: {
    src: '/icons/back.svg',
    alt: 'Back',
  },
};

export default function Icon({ icon }) {
  return (
    <div>
      <img {...icons[icon]} />
    </div>
  );
}
