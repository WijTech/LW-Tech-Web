document.getElementById("year").textContent = String(new Date().getFullYear());

function resizeFacebookEmbed() {
  const iframe = document.getElementById("facebook-embed");
  if (!iframe) return;

  const current = new URL(iframe.src);
  const isMobile = window.innerWidth <= 720;
  const targetWidth = isMobile
    ? Math.max(180, Math.min(320, window.innerWidth - 72))
    : 500;
  const targetHeight = isMobile ? 700 : 700;

  if (
    current.searchParams.get("width") === String(targetWidth) &&
    current.searchParams.get("height") === String(targetHeight)
  ) {
    return;
  }

  current.searchParams.set("width", String(targetWidth));
  current.searchParams.set("height", String(targetHeight));
  iframe.height = String(targetHeight);
  iframe.src = current.toString();
}

resizeFacebookEmbed();
window.addEventListener("resize", resizeFacebookEmbed);
