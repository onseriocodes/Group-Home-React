//! DATA
import svg3 from '../../images/svg-3.svg';
import svg2 from '../../images/svg-2.svg';
import svg1 from '../../images/svg-1.svg';
import form from '../../images/form.svg';
import doc from '../../images/doc.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'ABOUT',
  headline: 'Accommodations for the disabled should be the norm',
  description:
    'A group home allows its residents a certain level of independence while also assisting with routine care',
  buttonLabel: 'Learn More',
  imgStart: false,
  img: doc,
  alt: 'Person image',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'DISCOVER',
  headline: 'Residential Care Home',
  description:
    'A group home for disabled residents. On site staff to assist with meals, cleaning, daily activites i.e dressing and bathing',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: svg2,
  alt: 'Person image',
  dark: true,
  primary: true,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'SIGN UP',
  headline: 'Patient Registration',
  description:
    'A group home allows its residents a certain level of independence while also assisting with routine care',
  buttonLabel: 'Register',
  imgStart: false,
  img: form,
  alt: 'Person image',
  dark: true,
  primary: true,
  darkText: true
};
