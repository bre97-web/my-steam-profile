
type RouterLink = {
    url: string,
    label: string,
    icon: string
}

function useRouterLink(url: string, label: string, icon: string = label.toLowerCase()) {
    return ({
        url,
        label,
        icon
    })
}

export type { RouterLink }
export { useRouterLink }
