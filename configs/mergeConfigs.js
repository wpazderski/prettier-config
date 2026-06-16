/**
 * Merges multiple Prettier config objects into one.
 * Later configs override earlier ones for scalar options; the `plugins` and `overrides` arrays are concatenated (and `plugins` is de-duplicated). Falsy entries are ignored.
 *
 * @param {...(import("prettier").Config | undefined)} configs - The Prettier configs to merge, in increasing order of precedence.
 * @returns {import("prettier").Config} The merged Prettier config.
 */
export function mergeConfigs(...configs) {
    /** @type {Record<string, unknown>} */
    const result = {};
    /** @type {unknown[]} */
    const plugins = [];
    /** @type {unknown[]} */
    const overrides = [];
    for (const config of configs) {
        if (!config) {
            continue;
        }
        for (const [key, value] of Object.entries(config)) {
            if (key === "plugins" && Array.isArray(value)) {
                plugins.push(...value);
            } else if (key === "overrides" && Array.isArray(value)) {
                overrides.push(...value);
            } else {
                result[key] = value;
            }
        }
    }
    if (plugins.length > 0) {
        result["plugins"] = [...new Set(plugins)];
    }
    if (overrides.length > 0) {
        result["overrides"] = overrides;
    }
    return result;
}
