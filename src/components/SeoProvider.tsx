"use client";
import { DefaultSeo } from "next-seo";

export default function SeoProvider() {
    // TODO: Replace with actual website URL
    return (
        <DefaultSeo
            titleTemplate="%s | Mejabi Oluwadurotimi"
            defaultTitle="Professional Wedding & Event Photographer in Limerick | Mejabi Oluwadurotimi"
            description="Looking for a wedding, portrait, or event photographer in Limerick, Ireland? Mejabi Oluwadurotimi captures real moments with a creative touch."
            canonical="https://yourwebsite.com/"
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url: 'https://yourwebsite.com/',
                site_name: 'Mejabi Oluwadurotimi',
                images: [
                    {
                        url: 'https://yourwebsite.com/logo.png',
                        width: 500,
                        height: 500,
                        alt: 'Mejabi Oluwadurotimi Logo',
                    },
                ],
            }}
            twitter={{
                handle: '@yourhandle',
                site: '@yourhandle',
                cardType: 'summary_large_image',
            }}
        />
    );
} 