import { ONELINK_BASE_URL } from '@/lib/onelink-config';

export const APPSFLYER_SMART_SCRIPT_SRC =
  'https://onelinksmartscript.appsflyersdk.com/onelink-smart-script-latest.js';

export const APPSFLYER_SMART_SCRIPT_READY_EVENT =
  'appsflyer-smart-script-ready';

const oneLinkURL = ONELINK_BASE_URL;

export const APPSFLYER_DEFAULT_ONELINK_URL = `${oneLinkURL}?pid=website&c=website&af_channel=website&deep_link_value=home&af_ss_ui=true`;

export function getAppsFlyerFallbackUrl(incomingSearch: string): string {
  const incoming = new URLSearchParams(incomingSearch);
  const destination = new URL(APPSFLYER_DEFAULT_ONELINK_URL);
  const mappings = [
    ['pid', ['pid', 'utm_source']],
    ['c', ['c', 'utm_campaign']],
    ['af_channel', ['af_channel', 'utm_medium']],
    ['af_ad', ['af_ad', 'utm_content']],
  ] as const;

  for (const [outgoingKey, incomingKeys] of mappings) {
    const value = incomingKeys
      .map((key) => incoming.get(key))
      .find((candidate) => candidate?.trim());
    if (value) destination.searchParams.set(outgoingKey, value);
  }

  // Preserve campaign details if the third-party script cannot load, while
  // keeping the destination, app route, and redirect settings under our control.
  for (const [key, value] of incoming) {
    if (
      /^(utm_(source|medium|campaign|content|term)|fbclid|gclid|ttclid|msclkid|af_sub[1-5]|af_adset|af_siteid)$/.test(
        key
      )
    ) {
      destination.searchParams.append(key, value);
    }
  }

  return destination.toString();
}

type AppsFlyerParameter = {
  keys?: string[];
  defaultValue?: string;
};

type AppsFlyerCustomParameter = AppsFlyerParameter & {
  paramKey: string;
};

type AppsFlyerGenerateOneLinkArgs = {
  oneLinkURL: string;
  afParameters: {
    mediaSource: AppsFlyerParameter;
    campaign?: AppsFlyerParameter;
    channel?: AppsFlyerParameter;
    ad?: AppsFlyerParameter;
    afCustom?: AppsFlyerCustomParameter[];
  };
};

type AppsFlyerSmartScriptResult = {
  clickURL: string;
};

declare global {
  interface Window {
    AF_SMART_SCRIPT?: {
      generateOneLinkURL: (
        args: AppsFlyerGenerateOneLinkArgs
      ) => AppsFlyerSmartScriptResult | null;
    };
  }
}

export function generateAppsFlyerOneLinkURL(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const result = window.AF_SMART_SCRIPT?.generateOneLinkURL({
    oneLinkURL,
    afParameters: {
      mediaSource: { keys: ['pid', 'utm_source'], defaultValue: 'website' },
      campaign: { keys: ['c', 'utm_campaign'], defaultValue: 'website' },
      channel: { keys: ['af_channel', 'utm_medium'], defaultValue: 'website' },
      ad: { keys: ['af_ad', 'utm_content'] },
      afCustom: [
        { paramKey: 'af_ss_ui', defaultValue: 'true' },
        { paramKey: 'deep_link_value', defaultValue: 'home' },
      ],
    },
  });

  return result?.clickURL ?? null;
}
