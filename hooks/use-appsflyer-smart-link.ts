'use client';

import { useEffect, useState } from 'react';
import {
  APPSFLYER_SMART_SCRIPT_READY_EVENT,
  generateAppsFlyerOneLinkURL,
} from '@/lib/appsflyer-smart-script';

export function useAppsFlyerSmartLink(fallbackUrl: string): string {
  const [href, setHref] = useState(fallbackUrl);

  useEffect(() => {
    setHref(fallbackUrl);

    function updateHref() {
      const appsFlyerUrl = generateAppsFlyerOneLinkURL();

      if (appsFlyerUrl) {
        setHref(appsFlyerUrl);
      }
    }

    updateHref();
    window.addEventListener(APPSFLYER_SMART_SCRIPT_READY_EVENT, updateHref);

    return () => {
      window.removeEventListener(
        APPSFLYER_SMART_SCRIPT_READY_EVENT,
        updateHref,
      );
    };
  }, [fallbackUrl]);

  return href;
}
