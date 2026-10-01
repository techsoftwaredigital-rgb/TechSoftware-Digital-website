# Security Specification & Rule Audit

## 1. Data Invariants
- **Enquiries (`/enquiries/{enquiryId}`)**:
  - `enquiryId`: Must match alphanumeric and hyphen/underscore regex (`^[a-zA-Z0-9_\-]+$`) with length <= 128.
  - Required fields: `name`, `phone`, `email`, `projectType`, `budgetRange`, `message`, `createdAt`.
  - Allowed fields: Required keys + optional `companyName` and `status`. No ghost fields or unexpected properties allowed.
  - Data types and constraints:
    - `name`: string, 2 to 100 characters.
    - `companyName`: string, <= 120 characters (optional).
    - `phone`: string, 8 to 20 characters.
    - `email`: string, <= 120 characters.
    - `projectType`: string, <= 60 characters.
    - `budgetRange`: string, <= 60 characters.
    - `message`: string, 10 to 2000 characters.
    - `createdAt`: string ISO timestamp, <= 40 characters.
    - `status`: string, must be one of `['new', 'in_review', 'contacted', 'archived']`.
  - Permission tiers:
    - Public visitors can `create` enquiries with validated payload.
    - Only administrative accounts can `get`, `list`, `update`, or `delete` client enquiries.
    - Blanket unauthenticated reads are rejected.

## 2. Red Team Threat Analysis
1. **Ghost Field Injection**: Attempting to pass `isVerified: true` or `admin: true` is blocked by `data.keys().hasOnly(...)`.
2. **Denial of Wallet (Payload Bloat)**: Strings are constrained with `.size()` limits (names <= 100, messages <= 2000, IDs <= 128).
3. **ID Poisoning**: Enforces `isValidId(enquiryId)` on all document target operations.
4. **PII Protection**: Client phone numbers and email addresses stored in `/enquiries/` cannot be read by public unauthenticated requests; only authenticated administrators have read access.
