import fruitBackground from '/fruit-background.png';

export const FruitBackgroundImage = () => (
  <>
    <div
      style={{
        backgroundImage: `url("${fruitBackground}")`,
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-1',
      }}
    />
    <div
      style={{
        backgroundColor: 'rgba(245,220,240,0.45)',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-1',
      }}
    />
  </>
);
