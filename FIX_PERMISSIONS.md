# Fix Build Error - Permission Issue

The build error is due to file permission issues with node_modules. Here's how to fix it:

## Quick Fix (Recommended)

**Option 1: Reinstall Dependencies**
```bash
cd /Users/paulmeakin/Desktop/staxxd-website-template
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Option 2: Fix Permissions**
```bash
cd /Users/paulmeakin/Desktop/staxxd-website-template
sudo chmod -R 755 node_modules
npm run dev
```

**Option 3: Use Yarn Instead**
```bash
cd /Users/paulmeakin/Desktop/staxxd-website-template
rm -rf node_modules package-lock.json
yarn install
yarn dev
```

## If npm install fails with permission errors:

1. **Check Node/npm version:**
   ```bash
   node --version
   npm --version
   ```

2. **Try using npx:**
   ```bash
   npx next dev
   ```

3. **Or install dependencies with --legacy-peer-deps:**
   ```bash
   npm install --legacy-peer-deps
   ```

## After fixing, start the dev server:
```bash
npm run dev
```

Then open: **http://localhost:3000**

---

**Note:** The error is related to Next.js trying to read files from node_modules that don't have proper permissions. Reinstalling dependencies usually fixes this.
