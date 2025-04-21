import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

const Meta = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="icon" type="image/svg+xml" href={AppConfig.logoPath} />
        <link rel="apple-touch-icon" href={AppConfig.logoPath} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <NextSeo
        title={AppConfig.title}
        description={AppConfig.description}
        canonical={`${router.basePath}${router.asPath}`}
        openGraph={{
          title: AppConfig.title,
          description: AppConfig.description,
          url: `${router.basePath}${router.asPath}`,
          site_name: AppConfig.site_name,
          images: [
            {
              url: AppConfig.logoPath,
              width: 512,
              height: 512,
              alt: 'PokeRogue Logo',
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
