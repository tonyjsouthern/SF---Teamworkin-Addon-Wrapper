chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
       switch (request.directive) {
           case "get-flat":
               chrome.tabs.executeScript(null, { file: "content.js" });
               sendResponse("in get-flat directive");
               break;
           case "process":
               console.log("process", request.data);
               break;
            default:
               break;
        }
    }
);
