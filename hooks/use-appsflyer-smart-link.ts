'use client';

import { useSyncExternalStore } from 'react';
import { useInAppBrowserInfo } from '@/components/in-app-browser-provider';
import {
  APPSFLYER_DEFAULT_ONELINK_URL,
  APPSFLYER_SMART_SCRIPT_READY_EVENT,
  generateAppsFlyerOneLinkURL,
} from '@/lib/appsflyer-smart-script';
import { hrefForInAppBrowser } from '@/lib/in-app-browser';

function subscribe(onChange: () => void) {
  window.addEventListener(APPSFLYER_SMART_SCRIPT_READY_EVENT, onChange);

  return () => {
    window.removeEventListener(APPSFLYER_SMART_SCRIPT_READY_EVENT, onChange);
  };
}

export function useAppsFlyerSmartLink(
  fallbackUrl = APPSFLYER_DEFAULT_ONELINK_URL
): string {
  const info = useInAppBrowserInfo();
  const oneLinkUrl = useSyncExternalStore(
    subscribe,
    () => generateAppsFlyerOneLinkURL() ?? fallbackUrl,
    () => fallbackUrl
  );

  return hrefForInAppBrowser(info, oneLinkUrl);
}
