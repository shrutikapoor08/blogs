# Code Splitting in ReactJS

Code-splitting helps to "lazy load" just the things that are currently needed by the user removing the need to import JS that may never be used by the user.

## How to code split in ReactJS

Instead of

`import { add } from './math'
`

do
ss
`import("./math").then( math ⇒ use math)`