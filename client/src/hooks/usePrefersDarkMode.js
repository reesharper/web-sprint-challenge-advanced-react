export default function usePrefersDarkMode() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  return prefersDark
}