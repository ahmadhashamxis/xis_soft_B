const Theme:React.FC = () => {
  return (
    <>
      <div
        style={{
          top: '-50%',
          left: '0%',
          zIndex: '-1',
          borderRadius: '1431px',
          background: 'rgba(62, 95, 170, 0.25)',
          filter: 'blur(250px)',
        }}
        className="absolute h-full w-full overflow-hidden"
      ></div>

      <div
        style={{
          bottom: '0%',
          left: '20%',
          zIndex: '-1',
          borderRadius: '665px',
          background: 'rgba(36, 0, 136, 0.22)',
          filter: 'blur(250px)',
        }}
        className="absolute  h-64 w-9/12 overflow-hidden"
      ></div>
    </>
  );
};

export default Theme;
