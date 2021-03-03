const size = {
  mobile: '425px',
  tablet: '768px',
  laptop: '992px',
  desktop: '2560px'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `only screen and (min-device-width: 768px) and (max-device-width: 1024px) `,
  laptop: `(min-width: ${size.laptop})`,
};
