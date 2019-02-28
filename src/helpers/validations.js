export const required = value =>
  value || typeof value === "string" ? undefined : "validations.required";

export const maxLength255 = value =>
  value && typeof value === "string" && value.length > 255
    ? "validations.maxTitleValue"
    : undefined;

export const maxLength5000 = value =>
  value && typeof value === "string" && value.length > 5000
    ? "validations.maxRecipeValue"
    : undefined;
