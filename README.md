# Reproduce problem with NEXT_PUBLIC_ env vars exposing to browser

1. `unset NEXT_PUBLIC_BACKEND_ENDPOINT`
1. `rm -f .next; npm run build`
1. `export NEXT_PUBLIC_BACKEND_ENDPOINT='http://localhost:8081'`
1. `npm run start`
1. `open http://localhost:3000`
1. See `from next getConfig() = http://localhost:8081` and `process.env.NEXT_PUBLIC_BACKEND_ENDPOINT = undefined`
1. Go to Chrome Dev Tools. Find in Network localhost response and open Preview tab in request/response inspector
1. See `process.env.NEXT_PUBLIC_BACKEND_ENDPOINT = http://localhost:8081` in preview. But after client side rendering this will undefined. See #6
1. Next problem - Click About link. 
1. See again `from next getConfig() = http://localhost:8081` and `process.env.NEXT_PUBLIC_BACKEND_ENDPOINT = undefined`
1. But now - refresh the page. And see default value instead of real value from NEXT_PUBLIC_BACKEND_ENDPOINT (with 8080 port) `from next getConfig() = http://localhost:8080` and `process.env.NEXT_PUBLIC_BACKEND_ENDPOINT = undefined`

It's a two kind of bug or its normal behavior?