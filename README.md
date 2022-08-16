# Token Blacklist Subgraph

Build completed: Qmdm96s7PEDemzKHpnynEJ5xDEmDwSGjGXr8CVSx5VDJHx

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
