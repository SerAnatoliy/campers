import { InfoItem } from '../components/CatalogCard/CatalogCard.module';

export const renderIfDetails = (condition, icon, text) => {
  if (condition) {
    return renderInfoItem(icon, text);
  }
  return null;
};

const renderInfoItem = (icon, text) => {
  return (
    <InfoItem>
      {icon}
      {text}
    </InfoItem>
  );
};
