type RequestOptions<T = unknown> = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  body?: T
  headers?: Record<string, string>
  queryParams?: Record<string, string | number>
}

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3333"

function buildUrl(
  endpoint: string,
  queryParams?: Record<string, string | number>
) {
  const url = new URL(`${BASE_URL}${endpoint}`)
  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      url.searchParams.append(key, String(value))
    }
  }
  return url.toString()
}

export async function api<U, T = unknown>(
  endpoint: string,
  options: RequestOptions<T> = {}
): Promise<U> {
  const { method = "GET", body, headers = {}, queryParams } = options

  try {
    const response = await fetch(buildUrl(endpoint, queryParams), {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        errorData.message || "Ops, algo deu errado, tente novamente mais tarde!"
      )
    }

    const bodyResponse = await response.json()
    return bodyResponse
  } catch (error) {
    console.error("API error:", error)
    throw error
  }
}
