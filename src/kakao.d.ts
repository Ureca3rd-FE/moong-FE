interface KakaoLink {
  mobileWebUrl: string;
  webUrl: string;
}

interface KakaoContent {
  title: string;
  description: string;
  imageUrl: string;
  link: KakaoLink;
}

interface KakaoButton {
  title: string;
  link: KakaoLink;
}

interface KakaoShareDefaultParams {
  objectType: 'feed' | 'list' | 'location' | 'commerce' | 'text';
  content: KakaoContent;
  itemContent?: { [key: string]: any };
  social?: { [key: string]: any };
  buttons?: KakaoButton[];
}

interface KakaoShare {
  sendDefault(params: KakaoShareDefaultParams): void;
  createDefaultButton(params: any): void;
}

interface KakaoAPI {
  isInitialized(): boolean;
  init(key: string): void;
  Share: KakaoShare;
  [key: string]: any;
}

declare global {
  interface Window {
    Kakao: KakaoAPI;
  }
}

export {};
