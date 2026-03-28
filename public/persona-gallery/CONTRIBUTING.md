# Contributing a Persona

We welcome community personas. To submit yours, open a PR against this repo.

## Steps

1. **Build your persona** in OwnTerm using the Persona Manager's Create wizard.
2. **Export it** — the Persona Manager has an Export button that saves a `.persona.json` file.
3. **Test it locally** — import the file back into OwnTerm and verify it works as expected.
4. **Fork this repo** and create a branch.
5. **Add your file** to `public/persona-gallery/personas/` as `your-persona-id.persona.json`.
6. **Add an entry** to `public/persona-gallery/index.json`:
   ```json
   {
     "id": "your-persona-id",
     "name": "Your Persona Name",
     "description": "A short description.",
     "avatar": "🤖",
     "author": "Your Name",
     "tags": ["tag1", "tag2"],
     "downloadUrl": "https://ownterm.com/persona-gallery/personas/your-persona-id.persona.json",
     "featured": false
   }
   ```
7. **Open a PR** with a brief description of your persona.

## Guidelines

- **No offensive content.** Personas that promote hate, harassment, or illegal activity will be rejected.
- **Test locally first.** Import your `.persona.json` into OwnTerm and confirm it loads, greets, and behaves correctly.
- **Use `$schema: "ownterm-persona-v1"`** in your persona file.
- **ID must be unique.** Check `index.json` for existing IDs before submitting.
- **Use a default Kokoro voice** (`am_adam`, `af_heart`, etc.) — not cloned voices, since those require local audio samples.
- **Keep `systemTemplate` focused.** A good persona has a clear identity and behavioral rules, not a wall of text.
- **One persona per PR.** Makes review easier.

## Review process

A maintainer will review your PR for:
- Valid `.persona.json` schema
- No duplicate IDs
- Appropriate content
- Working `downloadUrl` path

Once approved, your persona appears in the OwnTerm Gallery (both in-app and on ownterm.com/personas).
