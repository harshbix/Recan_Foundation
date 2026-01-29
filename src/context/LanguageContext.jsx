import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const translations = {
  en: {
    navHome: 'Home',
    navStory: 'Our Story',
    navGallery: 'Gallery',
    navTeam: 'The Team',
    navPrograms: 'Programs',
    navContact: 'Contact Us',
    donateNow: 'Donate Now',
    supportMission: 'Support Our Mission',
    learnMore: 'Learn More',
    heroTitleLine1: 'Restoring Hope for',
    heroTitleLine2: "Tanzania’s Future.",
    heroSubtitle: 'Protecting and empowering the vulnerable, marginalized, and voiceless children of our communities.',
    aboutPill: 'Our Mission',
    aboutTitleLine1: 'Protecting & Empowering',
    aboutTitleLine2: "Tanzania's Future",
    aboutBody1: 'RECAN Foundation aims at protecting, empowering, and establishing balance in the lives of the marginalized and vulnerable in Tanzania. The increase of teen mothers and children facing homelessness in our communities, is a problem that needs urgent response.',
    aboutBody2: 'We believe every child deserves a chance to dream, learn and grow in a healthy and safe environment, both physically and mentally.',
    statChildren: 'Children Reached',
    statPrograms: 'Community Programs',
    statVolunteer: 'Volunteer Hours',
    impactLabel: 'Impact',
    impactValue: 'Every smile restored',
    galleryPill: 'Our Gallery',
    galleryTitle: 'Moments of Impact',
    gallerySubtitle: 'Real stories and real lives touched through compassion, education, and protection.',
    galleryViewImage: 'View image',
    galleryLightboxLabel: 'Gallery image viewer',
    close: 'Close',
    previous: 'Previous',
    next: 'Next',
    languageLabel: 'Switch language',
  },
  sw: {
    navHome: 'Nyumbani',
    navStory: 'Hadithi Yetu',
    navGallery: 'Picha',
    navTeam: 'Timu',
    navPrograms: 'Programu',
    navContact: 'Wasiliana Nasi',
    donateNow: 'Changia Sasa',
    supportMission: 'Saidia Dhamira Yetu',
    learnMore: 'Jifunze Zaidi',
    heroTitleLine1: 'Kurejesha Tumaini kwa',
    heroTitleLine2: 'Mustakabali wa Tanzania.',
    heroSubtitle: 'Kulinda na kuwawezesha watoto walio hatarini, waliotengwa na wasio na sauti katika jamii zetu.',
    aboutPill: 'Dhamira Yetu',
    aboutTitleLine1: 'Kulinda na Kuwezesha',
    aboutTitleLine2: 'Mustakabali wa Tanzania',
    aboutBody1: 'RECAN Foundation inalenga kulinda, kuwawezesha, na kuleta usawa katika maisha ya makundi yaliyo pembezoni na walio hatarini nchini Tanzania. Ongezeko la mama vijana na watoto wanaokosa makazi katika jamii zetu ni tatizo linalohitaji hatua za haraka.',
    aboutBody2: 'Tunaamini kila mtoto anastahili nafasi ya kuota, kujifunza na kukua katika mazingira yenye afya na usalama, kimwili na kiakili.',
    statChildren: 'Watoto Walioguswa',
    statPrograms: 'Programu za Jamii',
    statVolunteer: 'Saa za Kujitolea',
    impactLabel: 'Athari',
    impactValue: 'Kila tabasamu lirejeshwe',
    galleryPill: 'Maktaba ya Picha',
    galleryTitle: 'Nyakati za Athari',
    gallerySubtitle: 'Hadithi halisi na maisha halisi yaliyoguswa kwa huruma, elimu, na ulinzi.',
    galleryViewImage: 'Tazama picha',
    galleryLightboxLabel: 'Kioneshi cha maktaba',
    close: 'Funga',
    previous: 'Iliyotangulia',
    next: 'Inayofuata',
    languageLabel: 'Badilisha lugha',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('recan-language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('recan-language', language);
    document.documentElement.lang = language === 'sw' ? 'sw' : 'en';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'sw' : 'en'));
  }, []);

  const t = useCallback(
    (key) => translations[language]?.[key] || translations.en[key] || key,
    [language]
  );

  const value = useMemo(
    () => ({ language, toggleLanguage, t }),
    [language, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
