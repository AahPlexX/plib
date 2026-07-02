(function () {
  "use strict";

  function getArtifactText(targetId) {
    var artifact = document.getElementById(targetId);
    return artifact ? artifact.textContent.trim() + "\n" : "";
  }

  function showActionResult(button, message) {
    var actions = button.closest(".artifact-actions");
    var status = actions ? actions.querySelector(".action-status") : null;
    var label = button.dataset.label || button.textContent;

    button.dataset.label = label;
    button.textContent = message;
    button.disabled = true;
    if (status) status.textContent = message;

    window.setTimeout(function () {
      button.textContent = label;
      button.disabled = false;
      if (status) status.textContent = "";
    }, 1600);
  }

  function downloadText(text, fileName) {
    var blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 0);
  }

  document.addEventListener("click", async function (event) {
    var copyButton = event.target.closest("[data-copy-target]");
    if (copyButton) {
      var text = getArtifactText(copyButton.dataset.copyTarget);
      if (!text || !navigator.clipboard) return;

      try {
        await navigator.clipboard.writeText(text);
        showActionResult(copyButton, "Copied");
      } catch {
        showActionResult(copyButton, "Copy failed");
      }
      return;
    }

    var downloadButton = event.target.closest("[data-download-target]");
    if (!downloadButton) return;

    var downloadTextValue = getArtifactText(downloadButton.dataset.downloadTarget);
    if (!downloadTextValue) return;

    downloadText(downloadTextValue, downloadButton.dataset.downloadName || "artifact.md");
    showActionResult(downloadButton, "Downloaded");
  });
}());
