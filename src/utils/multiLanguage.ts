"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  jp: {
    translation: {
      // navigation links
      "Home": "ホーム",
      "About Us": "当社について",
      "Services": "サービス",
      "Recruitment": "採用",
      "Other Services": "その他のサービス",
      "Immigration Lawyer": "移民弁護士",
      "Contact": "連絡先",
      "Solomon Capital": "ソロモンキャピタル",
      "SSW": "熟練労働者",
      "Our Services": "当社のサービス",
      "Solomon Capital japan inc.": "ソロモンキャピタルジャパン株式会社",
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "jp",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
