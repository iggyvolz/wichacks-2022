export default () => {
    const dialog = document.createElement("dialog");
    dialogPolyfill.registerDialog(dialog);
    document.body.appendChild(dialog);
    return dialog;
}