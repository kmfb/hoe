export const toRegExp = (inputString: string) => {
    const flags = inputString.replace(/.*\/([gimy]*)$/, "$1");
    const pattern = inputString.replace(new RegExp("^/(.*?)/" + flags + "$"), "$1");
    const regex = new RegExp(pattern, flags);
    return regex
}