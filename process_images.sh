#!/bin/bash

# Define Paths
DOWNLOADS_DIR="/Users/devferreirag/Downloads/favela"
PUBLIC_IMAGES="/Users/devferreirag/Documents/Saas/favelarepublica/public/images"

# 1. Clean Slate (Safety first: Create backup if needed, but here we wipe as requested)
echo "Cleaning old images..."
rm -rf "$PUBLIC_IMAGES"/*
mkdir -p "$PUBLIC_IMAGES"/hero
mkdir -p "$PUBLIC_IMAGES"/tours
mkdir -p "$PUBLIC_IMAGES"/testimonials
mkdir -p "$PUBLIC_IMAGES"/social

# 2. Process FOTOS SELECIONADAS -> tours & hero
echo "Processing FOTOS SELECIONADAS..."
FOTOS_DIR="$DOWNLOADS_DIR/FOTOS SELECIONADAS"

# Convert and Copy Tours Images
# Using sips to convert HEIC to JPG if needed, else just copy
for file in "$FOTOS_DIR"/*; do
    filename=$(basename "$file")
    extension="${filename##*.}"
    name="${filename%.*}"

    # Check if HEIC
    if [[ "$extension" =~ ^(HEIC|heic|HEIF|heif)$ ]]; then
        echo "Converting $filename to JPG..."
        sips -s format jpeg "$file" --out "$PUBLIC_IMAGES/tours/$name.jpg"
    else
        # Just copy if not HEIC (JPG, PNG)
        cp "$file" "$PUBLIC_IMAGES/tours/"
    fi
done

# Pick a Hero Image (e.g., IMG_9641 or a good landscape one)
# Let's copy one specific good one to hero folder for clarity
# Based on file list, IMG_9641.HEIC seems high number/recent, or maybe 7487.
# We'll copy ALL to tours, and then user requested "Use only these".
# I'll duplicate one good one to hero for now.
cp "$PUBLIC_IMAGES/tours/IMG_8882.jpg" "$PUBLIC_IMAGES/hero/hero-main.jpg" 2>/dev/null || cp "$PUBLIC_IMAGES/tours/IMG_8882.HEIC" "$PUBLIC_IMAGES/hero/hero-main.jpg" 2>/dev/null


# 3. Process DEPOIMENTOS -> testimonials
echo "Processing DEPOIMENTOS..."
DEPO_DIR="$DOWNLOADS_DIR/DEPOIMENTOS"
cp "$DEPO_DIR"/*.PNG "$PUBLIC_IMAGES/testimonials/" 2>/dev/null
cp "$DEPO_DIR"/*.png "$PUBLIC_IMAGES/testimonials/" 2>/dev/null

# 4. Process CAUSAS SOCIAIS -> social
echo "Processing CAUSAS SOCIAIS..."
# Note: Directory has a trailing space in the source system!
SOCIAL_DIR="$DOWNLOADS_DIR/CAUSAS SOCIAIS "

for file in "$SOCIAL_DIR"/*; do
    filename=$(basename "$file")
    extension="${filename##*.}"
    name="${filename%.*}"

    if [[ "$extension" =~ ^(HEIC|heic|HEIF|heif)$ ]]; then
        sips -s format jpeg "$file" --out "$PUBLIC_IMAGES/social/$name.jpg"
    else
        cp "$file" "$PUBLIC_IMAGES/social/"
    fi
done

echo "Image processing complete."
ls -R "$PUBLIC_IMAGES"
