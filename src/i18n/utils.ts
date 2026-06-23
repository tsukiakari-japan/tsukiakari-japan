import ja from './ja.json';
import en from './en.json';
import zhTW from './zh-TW.json';

export const LOCALES = ['ja', 'en', 'zh-TW'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ja';

const translations: Record<Locale, typeof ja> = {
  ja,
  en: en as typeof ja,
  'zh-TW': zhTW as typeof ja,
};

export function useTranslations(locale: Locale) {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}

// URLからロケールを取得する
export function getLocaleFromUrl(url: URL): Locale {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en' || firstSegment === 'zh-TW') {
    return firstSegment as Locale;
  }
  return DEFAULT_LOCALE;
}

// ロケールに応じたパスプレフィックスを返す
export function getLocalePath(locale: Locale, path: string = ''): string {
  const base = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${base}${path || '/'}`;
}

// 言語切り替えリンクを生成する
export function getAlternateLinks(currentPath: string, currentLocale: Locale) {
  // 現在のパスからロケールプレフィックスを除去
  let strippedPath = currentPath;
  for (const locale of LOCALES) {
    if (locale !== DEFAULT_LOCALE && currentPath.startsWith(`/${locale}`)) {
      strippedPath = currentPath.slice(`/${locale}`.length) || '/';
      break;
    }
  }

  return LOCALES.map((locale) => ({
    locale,
    href: getLocalePath(locale, strippedPath === '/' ? '' : strippedPath),
    isCurrent: locale === currentLocale,
  }));
}
