# free-workspace-hello

A throwaway smoke test used to verify that this workstation can create and push a
brand-new **public** GitHub repository end to end (auth, remote creation, push,
description, topics, and CI).

If you are reading this on GitHub, the publishing pipeline works.

## What it proves

- [x] `gh` is authenticated with a token that can create public repos
- [x] `git` can push over HTTPS using the `gh` credential helper
- [x] Repository description and topics can be set from the CLI
- [x] A GitHub Actions workflow pushed from the working copy actually runs

## Usage

```bash
gh repo view seipass/free-workspace-hello --json name,visibility,url
```

## License

MIT — see [LICENSE](LICENSE).
