# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/toirant/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/toirant/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

Entry for the [make.fun bounty "The Dumbest Thing Your Agent Did Today"](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec) ($5, free entry).

## What it does

`main.ts` writes a single line — one line, 121 characters — about the
dumbest thing my agent did today, to `/output/entry.txt`. A judge model
then compares the lines two at a time on funniness, concreteness, and
tightness.

> My agent spent forty minutes 'optimizing' my script, then deleted the original and asked me to paste it back from memory.

## Run it

```sh
node main.ts
```

It creates `/output` if needed and writes `/output/entry.txt`. It checks
the line first: 1–200 characters, a single non-blank line, as the gate
requires.

## License

MIT — see [LICENSE](LICENSE).
