# Expo DocumentPicker Android URI Formatting Issue

This repository demonstrates a bug in Expo's DocumentPicker API on Android.  The `getDocumentAsync` method occasionally returns a file URI without the necessary `content://` prefix, resulting in failures when attempting to read the selected file's contents using `FileSystem.readAsStringAsync`.

The `bug.js` file shows how to reproduce the issue. The `bugSolution.js` file offers a potential workaround.

## Reproducing the Bug

1. Run the `bug.js` example on an Android device or emulator.
2. Select a file using the DocumentPicker.
3. Observe the console for errors indicating a failure to read the file due to an incorrect URI.

## Potential Solution

The `bugSolution.js` file demonstrates a possible solution. It checks the URI format and adds the `content://` prefix if missing before attempting to read the file.  Note: this is a workaround, not a definitive fix for the underlying issue in Expo's API.