# Token Blacklist Subgraph

Build completed: QmRx61FWd6i1H8292QJJPZbszSwFyhtCVrxrW2waDEDrTB

Deployed to https://thegraph.com/studio/subgraph/token-blacklists

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/token-blacklists/v1.5

Example Query,
```
{
  blacklists(where: {usdt: true}) {
    id
    usdc
    usdt
    busd
    tusd
    euroc
    eurt
    usdp
    lastUpdated
  }
}
```
