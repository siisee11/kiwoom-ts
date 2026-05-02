# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-12-13

### Added

- Added `createKiwoomClient` and object-style `KiwoomClient` construction.
- Added `KiwoomAuth`, automatic token coordination, and manual token controls.
- Added common `KiwoomHttpClient` with Kiwoom headers, continuation support, errors, and response normalization.
- Added domestic account clients for `kt00001`, `kt00018`, `ka10075`, and `ka01690`.
- Added domestic stock client for `ka00198`.
- Kept legacy function exports for token issuance, daily balance yield, and stock search ranking.
