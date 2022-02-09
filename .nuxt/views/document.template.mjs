export default (params) => `<!DOCTYPE html>
<html ${params.HTML_ATTRS}>

<head ${params.HEAD_ATTRS}>
  ${params.HEAD}
</head>

<body ${params.BODY_ATTRS}>
  ${params.APP}
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js');
  });
}
</script></body>

</html>
`