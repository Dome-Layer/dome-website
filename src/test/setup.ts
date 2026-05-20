import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";

afterEach(() => {
  // Clear cookies between tests
  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });

  // Clear storage between tests
  localStorage.clear();
  sessionStorage.clear();
});
