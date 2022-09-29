/**     
 * VSCode reports error:
 * Type 'PluginObject' is not assignable to type 'Plugin | Plugin[]'.

    Type 'import("/home/jerry/Documents/blog/node_modules/vuepress-plugin-full-text-search2/node_modules/@vuepress/core/dist/index").PluginObject' is not assignable to type 'import("/home/jerry/Documents/blog/node_modules/@vuepress/core/dist/index").PluginObject'.

    Types of property 'onInitialized' are incompatible.

    Type '((app: import("/home/jerry/Documents/blog/node_modules/vuepress-plugin-full-text-search2/node_modules/@vuepress/core/dist/index").App) => PromiseOrNot) | undefined' is not assignable to type '((app: import("/home/jerry/Documents/blog/node_modules/@vuepress/core/dist/index").App) => PromiseOrNot) | undefined'.

    Type '(app: import("/home/jerry/Documents/blog/node_modules/vuepress-plugin-full-text-search2/node_modules/@vuepress/core/dist/index").App) => PromiseOrNot' is not assignable to type '(app: import("/home/jerry/Documents/blog/node_modules/@vuepress/core/dist/index").App) => PromiseOrNot'.

    Types of parameters 'app' and 'app' are incompatible.

    Property 'layouts' is missing in type 'import("/home/jerry/Documents/blog/node_modules/@vuepress/core/dist/index").App' but required in type 'import("/home/jerry/Documents/blog/node_modules/vuepress-plugin-full-text-search2/node_modules/@vuepress/core/dist/index").App'.
 */

import { defineUserConfig } from "vuepress";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

export default defineUserConfig({
  plugins: [
    fullTextSearchPlugin({
      
    }),
  ],
})

/**  
 * The following code can avoid error, but the result is the same.
 */


// import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

// export default{
// plugins: [
//     fullTextSearchPlugin({
    
//     }),
// ],
// }