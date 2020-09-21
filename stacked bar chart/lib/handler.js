function formatValue (x) {
  return isNaN(x) ? "N/A" : x.toLocaleString("en")
}