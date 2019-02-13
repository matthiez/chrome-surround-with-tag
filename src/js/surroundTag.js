const onMessage = async ({action, tag, text}, sender, sendResponse) => {
    let response = "";

    if (action === "tagify")
        response = `<${tag}>${text}</${tag}>`;

    await toClipboard(response);

    sendResponse(response);
};

chrome.runtime.onMessage.addListener(onMessage);

async function toClipboard(text) {
    await navigator.permissions.query({name: 'clipboard-write'});

    await navigator.clipboard.writeText(text);
}