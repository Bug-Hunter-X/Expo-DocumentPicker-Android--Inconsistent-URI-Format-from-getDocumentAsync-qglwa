This bug occurs when using the Expo DocumentPicker API on Android.  After selecting a file, the promise returned by `DocumentPicker.getDocumentAsync()` sometimes resolves with a `uri` that's incorrectly formatted, leading to errors when trying to access the file.  Specifically, the `uri` might be missing the `content://` prefix, causing `FileSystem.readAsStringAsync` to fail.