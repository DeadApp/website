'use client';

import { createContext, useContext, type ReactNode } from 'react';
import {
  hrefForInAppBrowser,
  type InAppBrowserInfo,
} from '@/lib/in-app-browser';

const EMPTY_INFO: InAppBrowserInfo = {
  family: null,
  app: null,
  os: 'other',
};

const InAppBrowserContext = createContext<InAppBrowserInfo>(EMPTY_INFO);

export function InAppBrowserProvider({
  info,
  children,
}: {
  info: InAppBrowserInfo;
  children: ReactNode;
}) {
  return (
    <InAppBrowserContext.Provider value={info}>
      {children}
    </InAppBrowserContext.Provider>
  );
}

export function useInAppBrowserInfo(): InAppBrowserInfo {
  return useContext(InAppBrowserContext);
}

export function useOutboundHref(destinationUrl: string): string {
  return hrefForInAppBrowser(useInAppBrowserInfo(), destinationUrl);
}
