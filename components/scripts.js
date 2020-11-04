const config = require('../config');

const scriptTemplate = config => `
<script src="https://cdnjs.cloudflare.com/ajax/libs/history.js/1.8/bundled/html4+html5/native.history.js"></script>
<script src="/app.js?v=${config.assetVersion}"></script>
`;

module.exports = scriptTemplate(config);
