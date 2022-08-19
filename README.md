# Token Blacklist Subgraph

Build completed: QmfBi2Ej8SqUj52da39g3rAghgoSTeGRQm1MRm4bbDNLg2

Deployed to https://thegraph.com/studio/subgraph/token-blacklists

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/token-blacklists/v1.6

Example Query,
```
{
  blacklists(where: {usdt: true}) {
    id
    alusd
    busd
    euroc
    eurt
    husd
    tusd
    usdc
    usdp
    usdt
    lastUpdated
  }
}
```
