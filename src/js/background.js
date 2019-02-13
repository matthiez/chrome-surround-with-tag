import '../img/icon-128.png'
import '../img/icon-34.png'

const parentId = "ecolos_wdt_surround";

(async () => {
    const menu = {
        contexts: ["selection"],
        id: parentId,
        title: "Surround with",
    };

    await chrome.contextMenus.create(menu);

    await addMenuEntry("strong");
    await addMenuEntry("sup");
})();

async function addMenuEntry(tag) {
    const onClick = async info => await chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, tabs => chrome.tabs.sendMessage(tabs[0].id, {
        action: "tagify",
        tag,
        text: info.selectionText
    }, () => chrome.notifications.create({
        type: "basic",
        title: "Copied to Clipboard!",
        message: `Selected text has been surrounded by <${tag}> tags and copied to clipboard.`,
        iconUrl: "icon-128.png"
    })));

    const menuEntry = {
        contexts: ["selection"],
        onclick: onClick,
        parentId,
        title: `<${tag}></${tag}>`,
    };

    await chrome.contextMenus.create(menuEntry);
}
