"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
    throw new Error('Unable to load the preview');
}

// Ensure these values are coming from environment variables or constants
if (!projectId || !dataset) {
    throw new Error("Check your .env file or environment variables");
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
});
