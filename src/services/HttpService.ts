import fetch from 'isomorphic-unfetch';

class HttpService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private fullUrl = (url: string) => `${this.baseUrl}${url}`;

  public get = async (url: string, params?: Record<string, string>, headers?: HeadersInit) => {
    let urlWithParams = url;
    if (params) {
      const query = Object.keys(params)
        .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
        .join('&');
      urlWithParams = `${url}${query ? `?${query}` : ''}`;
    }

    const response = await fetch(this.fullUrl(urlWithParams), {
      method: 'GET',
      headers,
    });

    return response?.status === 200 || response?.status === 202 ? response.json() : response;
  };

  public post = async (url: string, body: any, headers?: HeadersInit) => {
    const response = await fetch(this.fullUrl(url), {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    return response.json();
  };

  public postEnroll = async (url: string, body: any, headers?: HeadersInit) => {
    const response = await fetch(this.fullUrl(url), {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    return response?.status > 299 ? response?.status : response.json();
  };

  public postStream = async (url: string, body: any, headers?: HeadersInit) => {
    const response = await fetch(this.fullUrl(url), {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });
    return response;
  };

  public delete = async (url: string, body: any, headers?: HeadersInit) => {
    const response = await fetch(this.fullUrl(url), {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers,
    });
    return response.json();
  };

  public postFile = async (url: string, methodBody: any, headers?: HeadersInit) => {
    const response = await fetch(this.fullUrl(url), {
      method: 'POST',
      headers,
      body: methodBody,
    });
    return response.json();
  };

  public put = async (url: string, body: any, headers?: HeadersInit) => {
    const response = await fetch(this.fullUrl(url), {
      method: 'PUT',
      body: JSON.stringify(body),
      headers,
    });
    return response.json();
  };
}

export default HttpService;
