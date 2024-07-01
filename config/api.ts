export const heading: string = "currency converter";
const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";
const API_KEY: string = "cd57b0b3a771b3c86891f9ca";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;