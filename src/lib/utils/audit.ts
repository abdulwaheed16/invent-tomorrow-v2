export function clearAuditStorage() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("audit-form-storage");
    console.log("Audit form storage cleared");
  }
}

export function getAuditStorage() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("audit-form-storage");
    return data ? JSON.parse(data) : null;
  }
  return null;
}
