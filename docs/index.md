# OmniRoute

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/ContextualWisdomLab/OmniRoute)

**A multi-provider AI gateway that presents OpenAI-compatible APIs while routing requests across configured providers, fallback paths, and agent-facing integrations.**

This repository is ContextualWisdomLab's maintained fork of the upstream OmniRoute project. Upstream product identity, website, copyright, and MIT licensing remain intact; fork-specific changes and verification must be evaluated from this repository's exact revision rather than inferred from upstream badges or releases.

## Start here

For upstream installation, client integrations, provider setup, routing features, and screenshots, use the [repository README](https://github.com/ContextualWisdomLab/OmniRoute#readme), which intentionally preserves the upstream product documentation.

To evaluate this fork from source, use the Node range declared by the current package metadata and install the committed dependency lock before running repository checks:

```bash
git clone https://github.com/ContextualWisdomLab/OmniRoute.git
cd OmniRoute
npm ci
npm run check
```

The current package manifest declares Node `>=22.22.2 <23 || >=24.0.0 <27`. Development, production-build, CLI, security, protocol, and documentation checks are defined in `package.json` and `CONTRIBUTING.md`; use the exact commands for the surface you change rather than assuming an upstream release receipt applies to this fork.

## Product and integration boundary

OmniRoute owns the gateway layer: API compatibility, provider translation/execution, routing and fallback behavior, local gateway state, dashboard/CLI surfaces, and supported MCP/A2A integrations. External model providers retain authority over their own models, credentials, quotas, prices, availability, and terms. Coding agents and clients remain separate consumers of the gateway contract.

The fork should not turn provider marketing, free-tier estimates, upstream popularity badges, or a source version into fork-local deployment or commercial-readiness evidence. Those values can change independently of this repository revision.

## Architecture and verification

The current source is a Node/TypeScript application using Next.js, an `open-sse` workspace for streaming/provider execution, SQLite-backed local state, and Electron for the desktop build. Repository guidance and executable checks are the authority for exact implementation details:

- [Contributing](https://github.com/ContextualWisdomLab/OmniRoute/blob/main/CONTRIBUTING.md) — supported Node versions, source setup, tests, coverage, build and PR gates.
- [Agent guidelines](https://github.com/ContextualWisdomLab/OmniRoute/blob/main/AGENTS.md) — repository-specific documentation accuracy and implementation conventions.
- [Documentation](https://github.com/ContextualWisdomLab/OmniRoute/tree/main/docs) — user, provider, routing, security, architecture, operations and reference material.
- [Ask DeepWiki](https://deepwiki.com/ContextualWisdomLab/OmniRoute) — repository-grounded navigation and questions.

GitHub Checks on an unchanged exact commit remain the authoritative hosted evidence for a pull request. A passing predecessor head, upstream build, or source version does not transfer to a changed fork head.

## Release and publication truth

This ContextualWisdomLab fork currently has **no GitHub Releases**. The package source has its own version metadata, but that is not proof that this fork has published an immutable release artifact. If a future fork release is used for deployment, verify its exact tag, assets, provenance, security evidence, and protected-source lineage.

This `docs/index.md` file is a public-documentation source prerequisite only. It does not claim GitHub Pages is enabled or published. The upstream product site remains [omniroute.online](https://omniroute.online) unless ContextualWisdomLab deliberately publishes and verifies a separate fork documentation site.

## License and provenance

Root [`LICENSE`](https://github.com/ContextualWisdomLab/OmniRoute/blob/main/LICENSE) preserves the upstream **MIT License** and `Copyright (c) 2026 diegosouzapw`. The root package metadata also declares MIT and points to the upstream `diegosouzapw/OmniRoute` project.

ContextualWisdomLab maintenance does not replace that copyright or relicense third-party packages, provider services, model APIs, desktop/runtime dependencies, or external assets. Those components retain their own licenses and terms.
