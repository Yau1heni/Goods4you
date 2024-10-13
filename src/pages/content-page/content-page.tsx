import { Catalog, CatalogContent, Faq, Layout } from '@/components';
import { useEffect } from 'react';

export const ContentPage = () => {
  useEffect(() => {
    document.title = 'Catalog | Goods4you';
  }, []);

  return (
    <Layout>
      <CatalogContent />
      <Catalog />
      <Faq />
    </Layout>
  );
};
