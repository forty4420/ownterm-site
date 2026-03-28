# OwnTerm Persona Gallery

Community-contributed personas for [OwnTerm](https://ownterm.com) — a voice-first AI terminal.

## What's here

- `index.json` — catalog of all available personas (fetched by the OwnTerm app and website)
- `personas/` — individual `.persona.json` files

## `.persona.json` format

```json
{
  "$schema": "ownterm-persona-v1",
  "id": "my-persona",
  "name": "My Persona",
  "description": "A short description of this persona.",
  "avatar": "🤖",
  "systemTemplate": "You are {{persona_name}}...",
  "traits": ["helpful", "concise"],
  "tone": "Friendly and direct.",
  "greeting": "Hello, {{user_name}}.",
  "capabilities": ["chat", "code", "tool", "friend"],
  "voiceId": "am_adam",
  "ttsSpeed": 1.0,
  "author": "Your Name",
  "tags": ["assistant"],
  "version": "1.0.0"
}
```

### Required fields

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | `string` | Must be `"ownterm-persona-v1"` |
| `id` | `string` | Lowercase, alphanumeric + hyphens. Max 50 chars. |
| `name` | `string` | Display name. Max 100 chars. |
| `systemTemplate` | `string` | The system prompt. Use `{{persona_name}}`, `{{user_name}}`, `{{memory_*}}` placeholders. |

### Optional fields

| Field | Type | Default |
|-------|------|---------|
| `description` | `string` | — |
| `avatar` | `string` | Emoji or unicode symbol |
| `traits` | `string[]` | Personality traits |
| `tone` | `string` | Voice/tone description |
| `greeting` | `string` | First message on activation |
| `capabilities` | `string[]` | `chat`, `code`, `tool`, `friend` |
| `voiceId` | `string` | Kokoro TTS voice ID (e.g. `am_adam`) |
| `ttsSpeed` | `number` | Speech rate 0.25–4.0 |
| `author` | `string` | Creator name |
| `tags` | `string[]` | Category tags |
| `version` | `string` | Semver |

## How to submit

See [CONTRIBUTING.md](CONTRIBUTING.md) for submission guidelines.
