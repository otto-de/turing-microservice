# turing-health

[![version](https://img.shields.io/npm/v/turing-health.svg)](https://www.npmjs.com/package/turing-health) [![license](https://img.shields.io/npm/l/turing-health.svg)](./LICENSE)

An express route for an health check.

## API

Simply require _turing-health_ and add the router to your _turing-server_.

    const health = require('turing-health');

    server.use(health);

### Config

- turing:server:routes:internal - The base-url of internal endpoints like health or status.
- turing:health:route - The relative url of the health endpoint behind the internal route.

## Contributors

- Benedikt Stemmildt
- Jonathan Meyer

## License

MIT