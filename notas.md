Instalaciones

1. npm ini -y
2. crear estructura de proyect src/app
3. npm i --save-dev webpack webpack-cli @babel/core @babel/cli @babel/preset-env babel-loader html-webpack-plugin style-loader css-loader mini-css-extract-plugin webpack-dev-server
4. configurar HtmlWebpackPlugin para que tome el template html
5. configurar servidor de desarrollo de webpack "npx webpack serve --mode=development" de esta manera a cualquier cambio no es necesario compilar
6. configurar MiniCssExtractPlugin para que tome css
7. npm i --save-dev @babel/plugin-transform-runtime para corregir bug de babel => configurar plugin
