import React from 'react';
import { useTranslation } from "react-i18next";
const Archive = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1> {t('archive')} </h1>
    </div>
  );
};
export default Archive;
