# Token Blacklist Subgraph

Build completed: QmVAnwmnxuE4tuaHnczuYNj2oN5r2reC3FEmj33Mc6CPQY

Deployed to https://thegraph.com/studio/subgraph/token-blacklists

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/token-blacklists/v1.2

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
  }
}
```
