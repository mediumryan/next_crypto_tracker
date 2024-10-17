const BASE_URL = 'https://api.coingecko.com/api/v3/';

export type MarketsCoinType = {
  ath: number; // All Time High (최고가)
  ath_change_percentage: number; // ATH에서의 변화율
  ath_date: string; // ATH 도달 날짜 (ISO 8601 형식)
  atl: number; // All Time Low (최저가)
  atl_change_percentage: number; // ATL에서의 변화율
  atl_date: string; // ATL 도달 날짜 (ISO 8601 형식)
  circulating_supply: number; // 유통 중인 코인의 양
  current_price: number; // 현재 가격
  fully_diluted_valuation: number; // 전체 희석된 평가 금액
  high_24h: number; // 지난 24시간 동안의 최고가
  id: string; // 코인 ID
  image: string; // 코인 이미지 URL
  last_updated: string; // 마지막 업데이트 날짜 (ISO 8601 형식)
  low_24h: number; // 지난 24시간 동안의 최저가
  market_cap: number; // 시장 자본 총액
  market_cap_change_24h: number; // 지난 24시간 동안의 시장 자본 변화량
  market_cap_change_percentage_24h: number; // 지난 24시간 동안의 시장 자본 변화율
  market_cap_rank: number; // 시장 자본 순위
  max_supply: number; // 최대 공급량
  name: string; // 코인 이름
  price_change_24h: number; // 지난 24시간 동안의 가격 변화량
  price_change_percentage_24h: number; // 지난 24시간 동안의 가격 변화율
  roi: null | number; // Return on Investment (투자 수익률)
  symbol: string; // 코인 심볼
  total_supply: number; // 총 공급량
};

export type SearchResultType = {
  api_symbol: string;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
};

export async function getMarkets(): Promise<MarketsCoinType[]> {
  const res = await fetch(
    `${BASE_URL}coins/markets?vs_currency=jpy&order=market_cap_desc&per_page=100&page=1`
  );
  const result = await res.json();
  return result;
}

export async function getCoin(coinId: string): Promise<any> {
  const res = await fetch(`${BASE_URL}coins/${coinId}`, { cache: 'no-store' });
  const result = await res.json();
  return result;
}

export async function get7days(coinId: string): Promise<any> {
  const res = await fetch(
    `${BASE_URL}coins/${coinId}/market_chart?vs_currency=jpy&days=365`,
    { cache: 'no-store' }
  );
  const result = await res.json();
  return result;
}

export async function getSearch(query: string): Promise<any> {
  const res = await fetch(`${BASE_URL}search?query=${query}`, {
    cache: 'no-store',
  });
  const result = await res.json();
  return result;
}
