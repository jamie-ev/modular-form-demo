export const VegetableBackgroundImage = () => (
  <>
    <div
      style={{
        backgroundImage: 'url("/vegetable-background.png")',
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
        backgroundColor: 'rgba(220,255,240,0.45)',
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
