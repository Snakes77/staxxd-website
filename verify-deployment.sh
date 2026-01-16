#!/bin/bash
# Deployment Verification Script
# Run this after building to verify the output is complete and correct

set -e

echo "🔍 Verifying deployment readiness..."
echo ""

# Check build output exists
if [ ! -d "out" ]; then
    echo "❌ ERROR: 'out' directory not found. Run 'npm run build' first."
    exit 1
fi

# Check index.html exists
if [ ! -f "out/index.html" ]; then
    echo "❌ ERROR: index.html missing from build output"
    exit 1
fi
echo "✅ index.html exists"

# Check _next directory exists
if [ ! -d "out/_next" ]; then
    echo "❌ ERROR: _next directory missing from build output"
    exit 1
fi
echo "✅ _next directory exists"

# Check CSS file exists
CSS_FILE=$(find out/_next/static/css -name "*.css" | head -1)
if [ -z "$CSS_FILE" ]; then
    echo "❌ ERROR: CSS file missing from _next/static/css/"
    exit 1
fi
echo "✅ CSS file exists: $(basename $CSS_FILE)"

# Check referenced assets exist
echo ""
echo "🔍 Checking referenced assets..."

# Check font file
FONT_REF=$(grep -oE 'href="/_next/static/media/[^"]*\.woff2"' out/index.html | head -1 | sed 's/href="//;s/"//')
FONT_FILE="out$FONT_REF"
if [ -f "$FONT_FILE" ]; then
    echo "✅ Font file exists: $FONT_REF"
else
    echo "❌ ERROR: Font file missing: $FONT_REF"
    exit 1
fi

# Check images
IMAGE_REFS=$(grep -oE 'src="/images/[^"]*"' out/index.html | sed 's/src="//;s/"//' | sort | uniq)
for IMG in $IMAGE_REFS; do
    IMG_FILE="out$IMG"
    if [ -f "$IMG_FILE" ]; then
        echo "✅ Image exists: $IMG"
    else
        echo "⚠️  WARNING: Image missing: $IMG"
    fi
done

# Check videos
VIDEO_REFS=$(grep -oE 'src="/videos/[^"]*"' out/index.html | sed 's/src="//;s/"//' | sort | uniq)
for VID in $VIDEO_REFS; do
    VID_FILE="out$VID"
    if [ -f "$VID_FILE" ]; then
        SIZE=$(du -h "$VID_FILE" | cut -f1)
        echo "✅ Video exists: $VID ($SIZE)"
    else
        echo "⚠️  WARNING: Video missing: $VID (may need manual upload due to size)"
    fi
done

# Check JavaScript files
JS_REFS=$(grep -oE 'src="/_next/static/chunks/[^"]*\.js"' out/index.html | sed 's/src="//;s/"//' | head -5)
for JS in $JS_REFS; do
    JS_FILE="out$JS"
    if [ -f "$JS_FILE" ]; then
        echo "✅ JS file exists: $(basename $JS)"
    else
        echo "❌ ERROR: JS file missing: $JS"
        exit 1
    fi
done

# Count files
HTML_COUNT=$(find out -name "*.html" | wc -l | tr -d ' ')
ASSET_COUNT=$(find out/_next/static -type f | wc -l | tr -d ' ')

echo ""
echo "📊 Build Statistics:"
echo "   HTML files: $HTML_COUNT"
echo "   Static assets: $ASSET_COUNT"

# Check for source files (should NOT be in out/)
if [ -d "out/app" ] || [ -d "out/components" ] || [ -d "out/node_modules" ]; then
    echo ""
    echo "❌ ERROR: Source files found in build output!"
    echo "   This should not happen. Check build configuration."
    exit 1
fi

echo ""
echo "✅ Deployment verification complete!"
echo ""
echo "📦 Ready to deploy. The 'out' folder contains:"
echo "   - All HTML files"
echo "   - _next/ directory with CSS, JS, fonts"
echo "   - images/ directory"
echo "   - videos/ directory (check large files)"
echo "   - services/ directory"
echo ""
echo "⚠️  NOTE: Large video files (>100MB) may need manual upload to Hostinger"
