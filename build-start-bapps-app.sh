#!/bin/bash

# Build Start Bitcoin Office App for Bitcoin Office
# This script creates a macOS application with custom icon to start the dev server

echo "Building Start Bitcoin Office app..."

# Create app structure
APP_NAME="Start Bitcoin Office"
APP_DIR="$HOME/Desktop/$APP_NAME.app"
CONTENTS_DIR="$APP_DIR/Contents"
MACOS_DIR="$CONTENTS_DIR/MacOS"
RESOURCES_DIR="$CONTENTS_DIR/Resources"
PROJECT_PATH="/Users/b0ase/Projects/bitcoin-apps-suite"

# Remove old app if exists
rm -rf "$APP_DIR"

# Create directories
mkdir -p "$MACOS_DIR"
mkdir -p "$RESOURCES_DIR"

# Create the executable script
cat > "$MACOS_DIR/start-bitcoin-apps" << 'EOF'
#!/bin/bash

# Start Bitcoin Office on Port 1000

PROJECT_PATH="/Users/b0ase/Projects/bitcoin-apps-suite"

# Function to show notification
show_notification() {
    osascript -e "display notification \"$2\" with title \"$1\" sound name \"$3\""
}

# Check if port 1000 is already in use
PORT_PID=$(lsof -ti:1000 2>/dev/null)

if [ ! -z "$PORT_PID" ]; then
    show_notification "Bitcoin Office" "Port 1000 is already in use! Kill it first." "Basso"
    exit 1
fi

# Check if project directory exists
if [ ! -d "$PROJECT_PATH" ]; then
    show_notification "Bitcoin Office" "Project not found at $PROJECT_PATH" "Basso"
    exit 1
fi

# Navigate to project and start the dev server
cd "$PROJECT_PATH"

# Open Terminal and run the dev server
osascript <<END
tell application "Terminal"
    activate
    do script "cd '$PROJECT_PATH' && npm run dev"
    delay 2
    set custom title of window 1 to "Bitcoin Office - Port 1000"
end tell
END

show_notification "Bitcoin Office" "Starting development server on port 1000..." "Glass"

# Wait a moment then open browser
sleep 3

# Check if server started successfully
if lsof -ti:1000 >/dev/null 2>&1; then
    show_notification "Bitcoin Office" "Server running! Opening browser..." "Hero"
    open "http://localhost:1000"
else
    show_notification "Bitcoin Office" "Server may still be starting. Check Terminal." "Purr"
fi
EOF

# Make executable
chmod +x "$MACOS_DIR/start-bitcoin-apps"

# Create Info.plist
cat > "$CONTENTS_DIR/Info.plist" << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleExecutable</key>
    <string>start-bitcoin-apps</string>
    <key>CFBundleIdentifier</key>
    <string>com.bitcoinapps.startserver</string>
    <key>CFBundleName</key>
    <string>Start Bitcoin Office</string>
    <key>CFBundleDisplayName</key>
    <string>Start Bitcoin Office</string>
    <key>CFBundleVersion</key>
    <string>1.0</string>
    <key>CFBundleShortVersionString</key>
    <string>1.0</string>
    <key>CFBundlePackageType</key>
    <string>APPL</string>
    <key>CFBundleSignature</key>
    <string>????</string>
    <key>CFBundleIconFile</key>
    <string>AppIcon</string>
    <key>LSMinimumSystemVersion</key>
    <string>10.10</string>
    <key>LSUIElement</key>
    <string>0</string>
    <key>NSHighResolutionCapable</key>
    <true/>
</dict>
</plist>
EOF

# Copy icon if exists (we'll use the Bitcoin Apps logo)
if [ -f "public/bitcoin-apps-logo.jpg" ]; then
    echo "Converting logo to icon..."
    
    # Create temporary icon set
    ICONSET_DIR="/tmp/AppIcon.iconset"
    rm -rf "$ICONSET_DIR"
    mkdir -p "$ICONSET_DIR"
    
    # Convert JPG to PNG and create different sizes
    sips -s format png "public/bitcoin-apps-logo.jpg" --out "/tmp/bitcoin-apps-logo.png" 2>/dev/null
    
    # Generate icon sizes
    sips -z 16 16     "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_16x16.png" 2>/dev/null
    sips -z 32 32     "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_16x16@2x.png" 2>/dev/null
    sips -z 32 32     "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_32x32.png" 2>/dev/null
    sips -z 64 64     "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_32x32@2x.png" 2>/dev/null
    sips -z 128 128   "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_128x128.png" 2>/dev/null
    sips -z 256 256   "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_128x128@2x.png" 2>/dev/null
    sips -z 256 256   "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_256x256.png" 2>/dev/null
    sips -z 512 512   "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_256x256@2x.png" 2>/dev/null
    sips -z 512 512   "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_512x512.png" 2>/dev/null
    sips -z 1024 1024 "/tmp/bitcoin-apps-logo.png" --out "$ICONSET_DIR/icon_512x512@2x.png" 2>/dev/null
    
    # Create icns file
    iconutil -c icns "$ICONSET_DIR" -o "$RESOURCES_DIR/AppIcon.icns" 2>/dev/null
    
    # Clean up
    rm -rf "$ICONSET_DIR"
    rm -f "/tmp/bitcoin-apps-logo.png"
    
    echo "Icon added successfully!"
else
    echo "Warning: Logo file not found, app will use default icon"
fi

echo "✅ App created successfully at: $APP_DIR"
echo ""
echo "To add to your Dock:"
echo "1. Open Finder and go to Desktop"
echo "2. Drag 'Start Bitcoin Office.app' to your Dock (next to Kill Port 1000)"
echo ""
echo "The app will:"
echo "• Check if port 1000 is free"
echo "• Start the Bitcoin Office dev server"
echo "• Open Terminal with the server running"
echo "• Launch your browser to http://localhost:1000"