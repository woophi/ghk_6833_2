import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '0 16px 24px',
  flexDirection: 'column',
  gap: '1rem',
  background: 'linear-gradient(180deg, #072C60 0%, #2F0438 50%, #121213 100%)',
  alignItems: 'center',
  textAlign: 'center',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const cell = style({
  backgroundColor: '#1C1C1E',
  borderRadius: '16px',
  padding: '1rem',
});

const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '12px',
  width: '100%',
});
const gridItem = style({
  backgroundColor: '#625267',
  borderRadius: '16px',
  padding: '16px',
  border: '1px solid #E9E9FA5E',
  textAlign: 'center',
});

const banner = style({
  backgroundColor: '#1E2C37',
  borderRadius: '12px',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  textAlign: 'left',
  marginTop: '.5rem',
});

const bannerImg = style({
  margin: '-24px 0 -24px -30px',
});

const cell2 = style({
  backgroundColor: '#1C1C1E',
  borderRadius: '12px',
  padding: '12px 16px',
  overflow: 'hidden',
});
const cell2Img = style({
  marginRight: '-16px',
  marginBottom: '-12px',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  cell,
  grid,
  gridItem,
  banner,
  bannerImg,
  cell2,
  cell2Img,
};
