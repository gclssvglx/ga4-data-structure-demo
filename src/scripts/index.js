window.onload = function (event) {
  console.log("Site loaded...")

  window.dataLayer = window.dataLayer || []

  function gtag() {
    window.dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'GTM-MGR2L95')
}
