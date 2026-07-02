export const storeItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as any)
}

export const clearStore = () => {
    localStorage.clear()
    sessionStorage.clear()
}