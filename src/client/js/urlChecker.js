function checkForURL(inputURL) {
    let url;
    try {
      url = new URL(inputURL);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
 }

 export { checkForURL }
