1. Serve demo site locally:
   Ensure you have node.js installed, then 
   ```
   cd demo/broken && npx serve -p 8080
   ```

2. Open a new terminal, and write
   ```
   npx lighthouse http://localhost:8080  \
   --output=json \
   --output-path=demo/broken/lazy.json \
   --chrome-flags="--headless" \
   --save-assets \
   --throttling-method=simulate \
   --emulated-form-factor=mobile
   ```

3. Do the same for demo/ (just a different port/output-path)
   ```
   cd demo/fixed && npx serve -p 8081

   npx lighthouse http://localhost:8081  \
   --output=json \
   --output-path=demo/fixed/lazy.json \
   --chrome-flags="--headless" \
   --save-assets \
   --throttling-method=simulate \
   --emulated-form-factor=mobile
   ```

4. Then run, but make sure you have downloaded the `@tgwf/co2` library with `npm install @tgwf/co2`
    ```
    cd demo/scripts && node co2.js
    ```