/**
 * Declares a module for CSS files.
 * This allows importing CSS files as modules with class names as keys and the corresponding class names as values.
 *
 * @module '*.css'
 */
declare module '*.css' {
  /**
   * The content of the CSS module.
   * @type {Object.<string, string>}
   */
  const content: { [className: string]: string };
  export default content;
}

/**
 * Declares a module for JSON files.
 * This allows importing JSON files as modules with their content as the default export.
 *
 * @module '*.json'
 */
declare module '*.json' {
  /**
   * The value of the JSON module.
   * @type {any}
   */
  const value: any;
  export default value;
}
