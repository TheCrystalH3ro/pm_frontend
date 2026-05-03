const BASE_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(url: string, options: RequestInit = {}) : Promise<Response>
{
    const res = await fetch(`${BASE_URL}${url}`, {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });

    if (res.status === 401) {
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }

    if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(data.error || `Request failed with status ${res.status}`);
    }

    return res;
}