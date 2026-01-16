
export enum Language {
  MN = 'MN',
  EN = 'EN',
  KR = 'KR'
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface TranslationStrings {
  navHome: string;
  navAbout: string;
  navProducts: string;
  navContact: string;
  ctaRequest: string;
  heroTitle: string;
  heroSub: string;
  heroExplore: string;
  productTitle: string;
  product1Title: string;
  product1Desc: string;
  product2Title: string;
  product2Desc: string;
  viewDetails: string;
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missionText: string;
  valuesTitle: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  teamTitle: string;
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  contactMessage: string;
  officeAddress: string;
  footerRights: string;
  // Detailed Sections
  detailedSolutions: string;
  detailedModules: string;
  detailedAdvantages: string;
  detailedPrinciples: string;
  crmIntro: string;
  losIntro: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}
